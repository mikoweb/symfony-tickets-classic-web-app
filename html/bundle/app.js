(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$4=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$7=Symbol(),n$5=new Map;class s$5{constructor(t,n){if(this._$cssResult$=!0,n!==e$7)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$5.get(this.cssText);return t$4&&void 0===e&&(n$5.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$7=t=>new s$5("string"==typeof t?t:t+"",e$7),r$4=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$5(o,e$7)},i$6=(e,n)=>{t$4?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$2=t$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$7(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$4;const e$6=window.reactiveElementPolyfillSupport,r$3={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},h$2=(t,i)=>i!==t&&(i==i||t==t),o$6={attribute:!0,type:String,converter:r$3,reflect:!1,hasChanged:h$2};class n$4 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=o$6){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||o$6}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$2(i));}else void 0!==i&&s.push(S$2(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Em)&&void 0!==i?i:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Em)||void 0===i||i.splice(this._$Em.indexOf(t)>>>0,1);}_$Ep(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$6(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$Eg(t,i,s=o$6){var e,h;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const o=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:r$3.toAttribute)(i,s.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null;}}_$AK(t,i){var s,e,h;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:r$3.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC());}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Em)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return !0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,i)=>this._$Eg(i,this[i],t))),this._$ES=void 0),this._$EU();}updated(t){}firstUpdated(t){}}n$4.finalized=!0,n$4.elementProperties=new Map,n$4.elementStyles=[],n$4.shadowRootOptions={mode:"open"},null==e$6||e$6({ReactiveElement:n$4}),(null!==(s$4=globalThis.reactiveElementVersions)&&void 0!==s$4?s$4:globalThis.reactiveElementVersions=[]).push("1.0.1");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$3;const i$5=globalThis.trustedTypes,s$3=i$5?i$5.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$5=`lit$${(Math.random()+"").slice(9)}$`,o$5="?"+e$5,n$3=`<${o$5}>`,l$4=document,h$1=(t="")=>l$4.createComment(t),r$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$1=Array.isArray,u$1=t=>{var i;return d$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,a$1=/>/g,f$2=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_$1=/'/g,m$1=/"/g,g$1=/^(?:script|style|textarea)$/i,$$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),p$1=$$1(1),b$1=Symbol.for("lit-noChange"),T$1=Symbol.for("lit-nothing"),x$1=new WeakMap,w$1=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N$1(i.insertBefore(h$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A$1=l$4.createTreeWalker(l$4,129,null,!1),C$1=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c$1;for(let i=0;i<o;i++){const s=t[i];let o,u,$=-1,p=0;for(;p<s.length&&(d.lastIndex=p,u=d.exec(s),null!==u);)p=d.lastIndex,d===c$1?"!--"===u[1]?d=v$1:void 0!==u[1]?d=a$1:void 0!==u[2]?(g$1.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f$2):void 0!==u[3]&&(d=f$2):d===f$2?">"===u[0]?(d=null!=h?h:c$1,$=-1):void 0===u[1]?$=-2:($=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f$2:'"'===u[3]?m$1:_$1):d===m$1||d===_$1?d=f$2:d===v$1||d===a$1?d=c$1:(d=f$2,h=void 0);const y=d===f$2&&t[i+1].startsWith("/>")?" ":"";r+=d===c$1?s+n$3:$>=0?(l.push(o),s.slice(0,$)+"$lit$"+s.slice($)+e$5+y):s+e$5+(-2===$?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");return [void 0!==s$3?s$3.createHTML(u):u,l]};class P$1{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C$1(t,s);if(this.el=P$1.createElement(v,n),A$1.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A$1.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$5)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$5),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M$1:"?"===i[1]?k$1:"@"===i[1]?H$1:S$1});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g$1.test(l.tagName)){const t=l.textContent.split(e$5),s=t.length-1;if(s>0){l.textContent=i$5?i$5.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$1()),A$1.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$1());}}}else if(8===l.nodeType)if(l.data===o$5)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$5,t+1));)c.push({type:7,index:r}),t+=e$5.length-1;}r++;}}static createElement(t,i){const s=l$4.createElement("template");return s.innerHTML=t,s}}function V$1(t,i,s=t,e){var o,n,l,h;if(i===b$1)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$2(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=V$1(t,d._$AS(t,i.values),d,e)),i}class E$1{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$4).importNode(s,!0);A$1.currentNode=o;let n=A$1.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N$1(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I$1(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A$1.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N$1{constructor(t,i,s,e){var o;this.type=2,this._$AH=T$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V$1(this,t,i),r$2(t)?t===T$1||null==t||""===t?(this._$AH!==T$1&&this._$AR(),this._$AH=T$1):t!==this._$AH&&t!==b$1&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u$1(t)?this.M(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==T$1&&r$2(this._$AH)?this._$AA.nextSibling.data=t:this.S(l$4.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P$1.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new E$1(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t;}}_$AC(t){let i=x$1.get(t.strings);return void 0===i&&x$1.set(t.strings,i=new P$1(t)),i}M(t){d$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N$1(this.A(h$1()),this.A(h$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S$1{constructor(t,i,s,e,o){this.type=1,this._$AH=T$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V$1(this,t,i,0),n=!r$2(t)||t!==this._$AH&&t!==b$1,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V$1(this,e[s+l],i,l),h===b$1&&(h=this._$AH[l]),n||(n=!r$2(h)||h!==this._$AH[l]),h===T$1?t=T$1:t!==T$1&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.k(t);}k(t){t===T$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M$1 extends S$1{constructor(){super(...arguments),this.type=3;}k(t){this.element[this.name]=t===T$1?void 0:t;}}class k$1 extends S$1{constructor(){super(...arguments),this.type=4;}k(t){t&&t!==T$1?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class H$1 extends S$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=V$1(this,t,i,0))&&void 0!==s?s:T$1)===b$1)return;const e=this._$AH,o=t===T$1&&e!==T$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==T$1&&(e===T$1||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I$1{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){V$1(this,t);}}const R$1=window.litHtmlPolyfillSupport;null==R$1||R$1(P$1,N$1),(null!==(t$3=globalThis.litHtmlVersions)&&void 0!==t$3?t$3:globalThis.litHtmlVersions=[]).push("2.0.1");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l$3,o$4;class s$2 extends n$4{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=w$1(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b$1}}s$2.finalized=!0,s$2._$litElement$=!0,null===(l$3=globalThis.litElementHydrateSupport)||void 0===l$3||l$3.call(globalThis,{LitElement:s$2});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s$2});(null!==(o$4=globalThis.litElementVersions)&&void 0!==o$4?o$4:globalThis.litElementVersions=[]).push("3.0.1");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const n$1=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i$4=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$4(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$4(e,n)}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function t$2(t){return e$4({...t,state:!0})}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const o$3=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function e$3(e){return o$3({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function i$3(i,n){return o$3({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    function e$2(e){return o$3({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function o$2(o="",n=!1,t=""){return o$3({descriptor:e=>({get(){var e,r,l;const i="slot"+(o?`[name=${o}]`:":not([name])");let u=null!==(l=null===(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(i))||void 0===r?void 0:r.assignedNodes({flatten:n}))&&void 0!==l?l:[];return t&&(u=u.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(t)))),u},enumerable:!0,configurable:!0})})}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles$9 = r$4 `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    let Icon = class Icon extends s$2 {
        /** @soyTemplate */
        render() {
            return p$1 `<span><slot></slot></span>`;
        }
    };
    Icon.styles = [styles$9];
    Icon = __decorate([
        n$1('mwc-icon')
    ], Icon);

    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    function matches(element, selector) {
        var nativeMatches = element.matches
            || element.webkitMatchesSelector
            || element.msMatchesSelector;
        return nativeMatches.call(element, selector);
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    function addHasRemoveClass(element) {
        return {
            addClass: (className) => {
                element.classList.add(className);
            },
            removeClass: (className) => {
                element.classList.remove(className);
            },
            hasClass: (className) => element.classList.contains(className),
        };
    }
    const fn = () => { };
    const optionsBlock = {
        get passive() {
            return false;
        }
    };
    document.addEventListener('x', fn, optionsBlock);
    document.removeEventListener('x', fn);

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    class BaseElement extends s$2 {
        click() {
            if (this.mdcRoot) {
                this.mdcRoot.focus();
                this.mdcRoot.click();
                return;
            }
            super.click();
        }
        /**
         * Create and attach the MDC Foundation to the instance
         */
        createFoundation() {
            if (this.mdcFoundation !== undefined) {
                this.mdcFoundation.destroy();
            }
            if (this.mdcFoundationClass) {
                this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
                this.mdcFoundation.init();
            }
        }
        firstUpdated() {
            this.createFoundation();
        }
    }

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var MDCFoundation = /** @class */ (function () {
        function MDCFoundation(adapter) {
            if (adapter === void 0) { adapter = {}; }
            this.adapter = adapter;
        }
        Object.defineProperty(MDCFoundation, "cssClasses", {
            get: function () {
                // Classes extending MDCFoundation should implement this method to return an object which exports every
                // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
                return {};
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCFoundation, "strings", {
            get: function () {
                // Classes extending MDCFoundation should implement this method to return an object which exports all
                // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
                return {};
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCFoundation, "numbers", {
            get: function () {
                // Classes extending MDCFoundation should implement this method to return an object which exports all
                // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
                return {};
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCFoundation, "defaultAdapter", {
            get: function () {
                // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
                // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
                // validation.
                return {};
            },
            enumerable: false,
            configurable: true
        });
        MDCFoundation.prototype.init = function () {
            // Subclasses should override this method to perform initialization routines (registering events, etc.)
        };
        MDCFoundation.prototype.destroy = function () {
            // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
        };
        return MDCFoundation;
    }());

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var cssClasses$6 = {
        // Ripple is a special case where the "root" component is really a "mixin" of sorts,
        // given that it's an 'upgrade' to an existing component. That being said it is the root
        // CSS class that all other CSS classes derive from.
        BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
        ROOT: 'mdc-ripple-upgraded',
        UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
    };
    var strings$4 = {
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top',
    };
    var numbers$2 = {
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        INITIAL_ORIGIN_SCALE: 0.6,
        PADDING: 10,
        TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
    };

    /**
     * Stores result from supportsCssVariables to avoid redundant processing to
     * detect CSS custom variable support.
     */
    function getNormalizedEventCoords(evt, pageOffset, clientRect) {
        if (!evt) {
            return { x: 0, y: 0 };
        }
        var x = pageOffset.x, y = pageOffset.y;
        var documentX = x + clientRect.left;
        var documentY = y + clientRect.top;
        var normalizedX;
        var normalizedY;
        // Determine touch point relative to the ripple container.
        if (evt.type === 'touchstart') {
            var touchEvent = evt;
            normalizedX = touchEvent.changedTouches[0].pageX - documentX;
            normalizedY = touchEvent.changedTouches[0].pageY - documentY;
        }
        else {
            var mouseEvent = evt;
            normalizedX = mouseEvent.pageX - documentX;
            normalizedY = mouseEvent.pageY - documentY;
        }
        return { x: normalizedX, y: normalizedY };
    }

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    // Activation events registered on the root element of each instance for activation
    var ACTIVATION_EVENT_TYPES = [
        'touchstart', 'pointerdown', 'mousedown', 'keydown',
    ];
    // Deactivation events registered on documentElement when a pointer-related down event occurs
    var POINTER_DEACTIVATION_EVENT_TYPES = [
        'touchend', 'pointerup', 'mouseup', 'contextmenu',
    ];
    // simultaneous nested activations
    var activatedTargets = [];
    var MDCRippleFoundation = /** @class */ (function (_super) {
        __extends(MDCRippleFoundation, _super);
        function MDCRippleFoundation(adapter) {
            var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
            _this.activationAnimationHasEnded = false;
            _this.activationTimer = 0;
            _this.fgDeactivationRemovalTimer = 0;
            _this.fgScale = '0';
            _this.frame = { width: 0, height: 0 };
            _this.initialSize = 0;
            _this.layoutFrame = 0;
            _this.maxRadius = 0;
            _this.unboundedCoords = { left: 0, top: 0 };
            _this.activationState = _this.defaultActivationState();
            _this.activationTimerCallback = function () {
                _this.activationAnimationHasEnded = true;
                _this.runDeactivationUXLogicIfReady();
            };
            _this.activateHandler = function (e) {
                _this.activateImpl(e);
            };
            _this.deactivateHandler = function () {
                _this.deactivateImpl();
            };
            _this.focusHandler = function () {
                _this.handleFocus();
            };
            _this.blurHandler = function () {
                _this.handleBlur();
            };
            _this.resizeHandler = function () {
                _this.layout();
            };
            return _this;
        }
        Object.defineProperty(MDCRippleFoundation, "cssClasses", {
            get: function () {
                return cssClasses$6;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "strings", {
            get: function () {
                return strings$4;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "numbers", {
            get: function () {
                return numbers$2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
            get: function () {
                return {
                    addClass: function () { return undefined; },
                    browserSupportsCssVars: function () { return true; },
                    computeBoundingRect: function () {
                        return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                    },
                    containsEventTarget: function () { return true; },
                    deregisterDocumentInteractionHandler: function () { return undefined; },
                    deregisterInteractionHandler: function () { return undefined; },
                    deregisterResizeHandler: function () { return undefined; },
                    getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                    isSurfaceActive: function () { return true; },
                    isSurfaceDisabled: function () { return true; },
                    isUnbounded: function () { return true; },
                    registerDocumentInteractionHandler: function () { return undefined; },
                    registerInteractionHandler: function () { return undefined; },
                    registerResizeHandler: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    updateCssVariable: function () { return undefined; },
                };
            },
            enumerable: false,
            configurable: true
        });
        MDCRippleFoundation.prototype.init = function () {
            var _this = this;
            var supportsPressRipple = this.supportsPressRipple();
            this.registerRootHandlers(supportsPressRipple);
            if (supportsPressRipple) {
                var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
                requestAnimationFrame(function () {
                    _this.adapter.addClass(ROOT_1);
                    if (_this.adapter.isUnbounded()) {
                        _this.adapter.addClass(UNBOUNDED_1);
                        // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                        _this.layoutInternal();
                    }
                });
            }
        };
        MDCRippleFoundation.prototype.destroy = function () {
            var _this = this;
            if (this.supportsPressRipple()) {
                if (this.activationTimer) {
                    clearTimeout(this.activationTimer);
                    this.activationTimer = 0;
                    this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                }
                if (this.fgDeactivationRemovalTimer) {
                    clearTimeout(this.fgDeactivationRemovalTimer);
                    this.fgDeactivationRemovalTimer = 0;
                    this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                }
                var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
                requestAnimationFrame(function () {
                    _this.adapter.removeClass(ROOT_2);
                    _this.adapter.removeClass(UNBOUNDED_2);
                    _this.removeCssVars();
                });
            }
            this.deregisterRootHandlers();
            this.deregisterDeactivationHandlers();
        };
        /**
         * @param evt Optional event containing position information.
         */
        MDCRippleFoundation.prototype.activate = function (evt) {
            this.activateImpl(evt);
        };
        MDCRippleFoundation.prototype.deactivate = function () {
            this.deactivateImpl();
        };
        MDCRippleFoundation.prototype.layout = function () {
            var _this = this;
            if (this.layoutFrame) {
                cancelAnimationFrame(this.layoutFrame);
            }
            this.layoutFrame = requestAnimationFrame(function () {
                _this.layoutInternal();
                _this.layoutFrame = 0;
            });
        };
        MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
            var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
            if (unbounded) {
                this.adapter.addClass(UNBOUNDED);
            }
            else {
                this.adapter.removeClass(UNBOUNDED);
            }
        };
        MDCRippleFoundation.prototype.handleFocus = function () {
            var _this = this;
            requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
        };
        MDCRippleFoundation.prototype.handleBlur = function () {
            var _this = this;
            requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
        };
        /**
         * We compute this property so that we are not querying information about the client
         * until the point in time where the foundation requests it. This prevents scenarios where
         * client-side feature-detection may happen too early, such as when components are rendered on the server
         * and then initialized at mount time on the client.
         */
        MDCRippleFoundation.prototype.supportsPressRipple = function () {
            return this.adapter.browserSupportsCssVars();
        };
        MDCRippleFoundation.prototype.defaultActivationState = function () {
            return {
                activationEvent: undefined,
                hasDeactivationUXRun: false,
                isActivated: false,
                isProgrammatic: false,
                wasActivatedByPointer: false,
                wasElementMadeActive: false,
            };
        };
        /**
         * supportsPressRipple Passed from init to save a redundant function call
         */
        MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
            var e_1, _a;
            if (supportsPressRipple) {
                try {
                    for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                        var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                        this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (this.adapter.isUnbounded()) {
                    this.adapter.registerResizeHandler(this.resizeHandler);
                }
            }
            this.adapter.registerInteractionHandler('focus', this.focusHandler);
            this.adapter.registerInteractionHandler('blur', this.blurHandler);
        };
        MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
            var e_2, _a;
            if (evt.type === 'keydown') {
                this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
            }
            else {
                try {
                    for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                        this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        };
        MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
            var e_3, _a;
            try {
                for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                    var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                    this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
            this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
            if (this.adapter.isUnbounded()) {
                this.adapter.deregisterResizeHandler(this.resizeHandler);
            }
        };
        MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
            var e_4, _a;
            this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
            try {
                for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                    this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        MDCRippleFoundation.prototype.removeCssVars = function () {
            var _this = this;
            var rippleStrings = MDCRippleFoundation.strings;
            var keys = Object.keys(rippleStrings);
            keys.forEach(function (key) {
                if (key.indexOf('VAR_') === 0) {
                    _this.adapter.updateCssVariable(rippleStrings[key], null);
                }
            });
        };
        MDCRippleFoundation.prototype.activateImpl = function (evt) {
            var _this = this;
            if (this.adapter.isSurfaceDisabled()) {
                return;
            }
            var activationState = this.activationState;
            if (activationState.isActivated) {
                return;
            }
            // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
            var previousActivationEvent = this.previousActivationEvent;
            var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
            if (isSameInteraction) {
                return;
            }
            activationState.isActivated = true;
            activationState.isProgrammatic = evt === undefined;
            activationState.activationEvent = evt;
            activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
            var hasActivatedChild = evt !== undefined &&
                activatedTargets.length > 0 &&
                activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
            if (hasActivatedChild) {
                // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                this.resetActivationState();
                return;
            }
            if (evt !== undefined) {
                activatedTargets.push(evt.target);
                this.registerDeactivationHandlers(evt);
            }
            activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
            if (activationState.wasElementMadeActive) {
                this.animateActivation();
            }
            requestAnimationFrame(function () {
                // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                activatedTargets = [];
                if (!activationState.wasElementMadeActive
                    && evt !== undefined
                    && (evt.key === ' ' || evt.keyCode === 32)) {
                    // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                    // active states inconsistently when they're called within event handling code:
                    // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                    // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                    // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                    // variable is set within a rAF callback for a submit button interaction (#2241).
                    activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                    if (activationState.wasElementMadeActive) {
                        _this.animateActivation();
                    }
                }
                if (!activationState.wasElementMadeActive) {
                    // Reset activation state immediately if element was not made active.
                    _this.activationState = _this.defaultActivationState();
                }
            });
        };
        MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
            return (evt !== undefined && evt.type === 'keydown') ?
                this.adapter.isSurfaceActive() :
                true;
        };
        MDCRippleFoundation.prototype.animateActivation = function () {
            var _this = this;
            var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
            var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
            var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
            this.layoutInternal();
            var translateStart = '';
            var translateEnd = '';
            if (!this.adapter.isUnbounded()) {
                var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
                translateStart = startPoint.x + "px, " + startPoint.y + "px";
                translateEnd = endPoint.x + "px, " + endPoint.y + "px";
            }
            this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
            this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
            // Cancel any ongoing activation/deactivation animations
            clearTimeout(this.activationTimer);
            clearTimeout(this.fgDeactivationRemovalTimer);
            this.rmBoundedActivationClasses();
            this.adapter.removeClass(FG_DEACTIVATION);
            // Force layout in order to re-trigger the animation.
            this.adapter.computeBoundingRect();
            this.adapter.addClass(FG_ACTIVATION);
            this.activationTimer = setTimeout(function () {
                _this.activationTimerCallback();
            }, DEACTIVATION_TIMEOUT_MS);
        };
        MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
            var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
            var startPoint;
            if (wasActivatedByPointer) {
                startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
            }
            else {
                startPoint = {
                    x: this.frame.width / 2,
                    y: this.frame.height / 2,
                };
            }
            // Center the element around the start point.
            startPoint = {
                x: startPoint.x - (this.initialSize / 2),
                y: startPoint.y - (this.initialSize / 2),
            };
            var endPoint = {
                x: (this.frame.width / 2) - (this.initialSize / 2),
                y: (this.frame.height / 2) - (this.initialSize / 2),
            };
            return { startPoint: startPoint, endPoint: endPoint };
        };
        MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
            var _this = this;
            // This method is called both when a pointing device is released, and when the activation animation ends.
            // The deactivation animation should only run after both of those occur.
            var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
            var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
            var activationHasEnded = hasDeactivationUXRun || !isActivated;
            if (activationHasEnded && this.activationAnimationHasEnded) {
                this.rmBoundedActivationClasses();
                this.adapter.addClass(FG_DEACTIVATION);
                this.fgDeactivationRemovalTimer = setTimeout(function () {
                    _this.adapter.removeClass(FG_DEACTIVATION);
                }, numbers$2.FG_DEACTIVATION_MS);
            }
        };
        MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
            var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
            this.adapter.removeClass(FG_ACTIVATION);
            this.activationAnimationHasEnded = false;
            this.adapter.computeBoundingRect();
        };
        MDCRippleFoundation.prototype.resetActivationState = function () {
            var _this = this;
            this.previousActivationEvent = this.activationState.activationEvent;
            this.activationState = this.defaultActivationState();
            // Touch devices may fire additional events for the same interaction within a short time.
            // Store the previous event until it's safe to assume that subsequent events are for new interactions.
            setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
        };
        MDCRippleFoundation.prototype.deactivateImpl = function () {
            var _this = this;
            var activationState = this.activationState;
            // This can happen in scenarios such as when you have a keyup event that blurs the element.
            if (!activationState.isActivated) {
                return;
            }
            var state = __assign({}, activationState);
            if (activationState.isProgrammatic) {
                requestAnimationFrame(function () {
                    _this.animateDeactivation(state);
                });
                this.resetActivationState();
            }
            else {
                this.deregisterDeactivationHandlers();
                requestAnimationFrame(function () {
                    _this.activationState.hasDeactivationUXRun = true;
                    _this.animateDeactivation(state);
                    _this.resetActivationState();
                });
            }
        };
        MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
            var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
            if (wasActivatedByPointer || wasElementMadeActive) {
                this.runDeactivationUXLogicIfReady();
            }
        };
        MDCRippleFoundation.prototype.layoutInternal = function () {
            var _this = this;
            this.frame = this.adapter.computeBoundingRect();
            var maxDim = Math.max(this.frame.height, this.frame.width);
            // Surface diameter is treated differently for unbounded vs. bounded ripples.
            // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
            // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
            // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
            // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
            // `overflow: hidden`.
            var getBoundedRadius = function () {
                var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
                return hypotenuse + MDCRippleFoundation.numbers.PADDING;
            };
            this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
            // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
            var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
            // Unbounded ripple size should always be even number to equally center align.
            if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
                this.initialSize = initialSize - 1;
            }
            else {
                this.initialSize = initialSize;
            }
            this.fgScale = "" + this.maxRadius / this.initialSize;
            this.updateLayoutCssVars();
        };
        MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
            var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
            this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
            this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
            if (this.adapter.isUnbounded()) {
                this.unboundedCoords = {
                    left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                    top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
                };
                this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
                this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
            }
        };
        return MDCRippleFoundation;
    }(MDCFoundation));
    // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
    var MDCRippleFoundation$1 = MDCRippleFoundation;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i$2{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const o$1=e$1(class extends i$2{constructor(t){var i;if(super(t),t.type!==t$1.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.st){this.st=new Set,void 0!==i.strings&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.et)||void 0===r?void 0:r.has(t))&&this.st.add(t);return this.render(s)}const e=i.element.classList;this.st.forEach((t=>{t in s||(e.remove(t),this.st.delete(t));}));for(const t in s){const i=!!s[t];i===this.st.has(t)||(null===(o=this.et)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.st.add(t)):(e.remove(t),this.st.delete(t)));}return b$1}});

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const i$1=e$1(class extends i$2{constructor(t){var e;if(super(t),t.type!==t$1.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut){this.ut=new Set;for(const t in r)this.ut.add(t);return this.render(r)}this.ut.forEach((t=>{null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.ut.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return b$1}});

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    class RippleBase extends BaseElement {
        constructor() {
            super(...arguments);
            this.primary = false;
            this.accent = false;
            this.unbounded = false;
            this.disabled = false;
            this.activated = false;
            this.selected = false;
            this.internalUseStateLayerCustomProperties = false;
            this.hovering = false;
            this.bgFocused = false;
            this.fgActivation = false;
            this.fgDeactivation = false;
            this.fgScale = '';
            this.fgSize = '';
            this.translateStart = '';
            this.translateEnd = '';
            this.leftPos = '';
            this.topPos = '';
            this.mdcFoundationClass = MDCRippleFoundation$1;
        }
        get isActive() {
            return matches(this.parentElement || this, ':active');
        }
        createAdapter() {
            return {
                browserSupportsCssVars: () => true,
                isUnbounded: () => this.unbounded,
                isSurfaceActive: () => this.isActive,
                isSurfaceDisabled: () => this.disabled,
                addClass: (className) => {
                    switch (className) {
                        case 'mdc-ripple-upgraded--background-focused':
                            this.bgFocused = true;
                            break;
                        case 'mdc-ripple-upgraded--foreground-activation':
                            this.fgActivation = true;
                            break;
                        case 'mdc-ripple-upgraded--foreground-deactivation':
                            this.fgDeactivation = true;
                            break;
                    }
                },
                removeClass: (className) => {
                    switch (className) {
                        case 'mdc-ripple-upgraded--background-focused':
                            this.bgFocused = false;
                            break;
                        case 'mdc-ripple-upgraded--foreground-activation':
                            this.fgActivation = false;
                            break;
                        case 'mdc-ripple-upgraded--foreground-deactivation':
                            this.fgDeactivation = false;
                            break;
                    }
                },
                containsEventTarget: () => true,
                registerInteractionHandler: () => undefined,
                deregisterInteractionHandler: () => undefined,
                registerDocumentInteractionHandler: () => undefined,
                deregisterDocumentInteractionHandler: () => undefined,
                registerResizeHandler: () => undefined,
                deregisterResizeHandler: () => undefined,
                updateCssVariable: (varName, value) => {
                    switch (varName) {
                        case '--mdc-ripple-fg-scale':
                            this.fgScale = value;
                            break;
                        case '--mdc-ripple-fg-size':
                            this.fgSize = value;
                            break;
                        case '--mdc-ripple-fg-translate-end':
                            this.translateEnd = value;
                            break;
                        case '--mdc-ripple-fg-translate-start':
                            this.translateStart = value;
                            break;
                        case '--mdc-ripple-left':
                            this.leftPos = value;
                            break;
                        case '--mdc-ripple-top':
                            this.topPos = value;
                            break;
                    }
                },
                computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
                getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
            };
        }
        startPress(ev) {
            this.waitForFoundation(() => {
                this.mdcFoundation.activate(ev);
            });
        }
        endPress() {
            this.waitForFoundation(() => {
                this.mdcFoundation.deactivate();
            });
        }
        startFocus() {
            this.waitForFoundation(() => {
                this.mdcFoundation.handleFocus();
            });
        }
        endFocus() {
            this.waitForFoundation(() => {
                this.mdcFoundation.handleBlur();
            });
        }
        startHover() {
            this.hovering = true;
        }
        endHover() {
            this.hovering = false;
        }
        /**
         * Wait for the MDCFoundation to be created by `firstUpdated`
         */
        waitForFoundation(fn) {
            if (this.mdcFoundation) {
                fn();
            }
            else {
                this.updateComplete.then(fn);
            }
        }
        update(changedProperties) {
            if (changedProperties.has('disabled')) {
                // stop hovering when ripple is disabled to prevent a stuck "hover" state
                // When re-enabled, the outer component will get a `mouseenter` event on
                // the first movement, which will call `startHover()`
                if (this.disabled) {
                    this.endHover();
                }
            }
            super.update(changedProperties);
        }
        /** @soyTemplate */
        render() {
            const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
            const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
            /** @classMap */
            const classes = {
                'mdc-ripple-surface--accent': this.accent,
                'mdc-ripple-surface--primary--activated': shouldActivateInPrimary,
                'mdc-ripple-surface--accent--activated': this.accent && this.activated,
                'mdc-ripple-surface--primary--selected': shouldSelectInPrimary,
                'mdc-ripple-surface--accent--selected': this.accent && this.selected,
                'mdc-ripple-surface--disabled': this.disabled,
                'mdc-ripple-surface--hover': this.hovering,
                'mdc-ripple-surface--primary': this.primary,
                'mdc-ripple-surface--selected': this.selected,
                'mdc-ripple-upgraded--background-focused': this.bgFocused,
                'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
                'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
                'mdc-ripple-upgraded--unbounded': this.unbounded,
                'mdc-ripple-surface--internal-use-state-layer-custom-properties': this.internalUseStateLayerCustomProperties,
            };
            return p$1 `
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o$1(classes)}"
          style="${i$1({
            '--mdc-ripple-fg-scale': this.fgScale,
            '--mdc-ripple-fg-size': this.fgSize,
            '--mdc-ripple-fg-translate-end': this.translateEnd,
            '--mdc-ripple-fg-translate-start': this.translateStart,
            '--mdc-ripple-left': this.leftPos,
            '--mdc-ripple-top': this.topPos,
        })}"></div>`;
        }
    }
    __decorate([
        i$3('.mdc-ripple-surface')
    ], RippleBase.prototype, "mdcRoot", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], RippleBase.prototype, "primary", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], RippleBase.prototype, "accent", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], RippleBase.prototype, "unbounded", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], RippleBase.prototype, "disabled", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], RippleBase.prototype, "activated", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], RippleBase.prototype, "selected", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "hovering", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "bgFocused", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "fgActivation", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "fgDeactivation", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "fgScale", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "fgSize", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "translateStart", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "translateEnd", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "leftPos", void 0);
    __decorate([
        t$2()
    ], RippleBase.prototype, "topPos", void 0);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles$8 = r$4 `.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    let Ripple = class Ripple extends RippleBase {
    };
    Ripple.styles = [styles$8];
    Ripple = __decorate([
        n$1('mwc-ripple')
    ], Ripple);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * TypeScript version of the decorator
     * @see https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
     */
    function tsDecorator(prototype, name, descriptor) {
        const constructor = prototype.constructor;
        if (!descriptor) {
            /**
             * lit uses internal properties with two leading underscores to
             * provide storage for accessors
             */
            const litInternalPropertyKey = `__${name}`;
            descriptor =
                constructor.getPropertyDescriptor(name, litInternalPropertyKey);
            if (!descriptor) {
                throw new Error('@ariaProperty must be used after a @property decorator');
            }
        }
        // descriptor must exist at this point, reassign so typescript understands
        const propDescriptor = descriptor;
        let attribute = '';
        if (!propDescriptor.set) {
            throw new Error(`@ariaProperty requires a setter for ${name}`);
        }
        // TODO(b/202853219): Remove this check when internal tooling is
        // compatible
        // tslint:disable-next-line:no-any bail if applied to internal generated class
        if (prototype.dispatchWizEvent) {
            return descriptor;
        }
        const wrappedDescriptor = {
            configurable: true,
            enumerable: true,
            set(value) {
                if (attribute === '') {
                    const options = constructor.getPropertyOptions(name);
                    // if attribute is not a string, use `name` instead
                    attribute =
                        typeof options.attribute === 'string' ? options.attribute : name;
                }
                if (this.hasAttribute(attribute)) {
                    this.removeAttribute(attribute);
                }
                propDescriptor.set.call(this, value);
            }
        };
        if (propDescriptor.get) {
            wrappedDescriptor.get = function () {
                return propDescriptor.get.call(this);
            };
        }
        return wrappedDescriptor;
    }
    /**
     * A property decorator proxies an aria attribute to an internal node
     *
     * This decorator is only intended for use with ARIA attributes, such as `role`
     * and `aria-label` due to screenreader needs.
     *
     * Upon first render, `@ariaProperty` will remove the attribute from the host
     * element to prevent screenreaders from reading the host instead of the
     * internal node.
     *
     * This decorator should only be used for non-Symbol public fields decorated
     * with `@property`, or on a setter with an optional getter.
     *
     * @example
     * ```ts
     * class MyElement {
     *   @ariaProperty
     *   @property({ type: String, attribute: 'aria-label' })
     *   ariaLabel!: string;
     * }
     * ```
     * @category Decorator
     * @ExportDecoratedItems
     */
    function ariaProperty(protoOrDescriptor, name, 
    // tslint:disable-next-line:no-any any is required as a return type from decorators
    descriptor) {
        if (name !== undefined) {
            return tsDecorator(protoOrDescriptor, name, descriptor);
        }
        else {
            throw new Error('@ariaProperty only supports TypeScript Decorators');
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * Class that encapsulates the events handlers for `mwc-ripple`
     *
     *
     * Example:
     * ```
     * class XFoo extends LitElement {
     *   async getRipple() {
     *     this.renderRipple = true;
     *     await this.updateComplete;
     *     return this.renderRoot.querySelector('mwc-ripple');
     *   }
     *   rippleHandlers = new RippleHandlers(() => this.getRipple());
     *
     *   render() {
     *     return html`
     *       <div @mousedown=${this.rippleHandlers.startPress}></div>
     *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
     *     `;
     *   }
     * }
     * ```
     */
    class RippleHandlers {
        constructor(
        /** Function that returns a `mwc-ripple` */
        rippleFn) {
            this.startPress = (ev) => {
                rippleFn().then((r) => {
                    r && r.startPress(ev);
                });
            };
            this.endPress = () => {
                rippleFn().then((r) => {
                    r && r.endPress();
                });
            };
            this.startFocus = () => {
                rippleFn().then((r) => {
                    r && r.startFocus();
                });
            };
            this.endFocus = () => {
                rippleFn().then((r) => {
                    r && r.endFocus();
                });
            };
            this.startHover = () => {
                rippleFn().then((r) => {
                    r && r.startHover();
                });
            };
            this.endHover = () => {
                rippleFn().then((r) => {
                    r && r.endHover();
                });
            };
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const l$2=l=>null!=l?l:T$1;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    class IconButtonBase extends s$2 {
        constructor() {
            super(...arguments);
            this.disabled = false;
            this.icon = '';
            this.shouldRenderRipple = false;
            this.rippleHandlers = new RippleHandlers(() => {
                this.shouldRenderRipple = true;
                return this.ripple;
            });
        }
        /** @soyTemplate */
        renderRipple() {
            return this.shouldRenderRipple ? p$1 `
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` :
                '';
        }
        focus() {
            const buttonElement = this.buttonElement;
            if (buttonElement) {
                this.rippleHandlers.startFocus();
                buttonElement.focus();
            }
        }
        blur() {
            const buttonElement = this.buttonElement;
            if (buttonElement) {
                this.rippleHandlers.endFocus();
                buttonElement.blur();
            }
        }
        /** @soyTemplate */
        render() {
            return p$1 `<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${l$2(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`;
        }
        handleRippleMouseDown(event) {
            const onUp = () => {
                window.removeEventListener('mouseup', onUp);
                this.handleRippleDeactivate();
            };
            window.addEventListener('mouseup', onUp);
            this.rippleHandlers.startPress(event);
        }
        handleRippleTouchStart(event) {
            this.rippleHandlers.startPress(event);
        }
        handleRippleDeactivate() {
            this.rippleHandlers.endPress();
        }
        handleRippleMouseEnter() {
            this.rippleHandlers.startHover();
        }
        handleRippleMouseLeave() {
            this.rippleHandlers.endHover();
        }
        handleRippleFocus() {
            this.rippleHandlers.startFocus();
        }
        handleRippleBlur() {
            this.rippleHandlers.endFocus();
        }
    }
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], IconButtonBase.prototype, "disabled", void 0);
    __decorate([
        e$4({ type: String })
    ], IconButtonBase.prototype, "icon", void 0);
    __decorate([
        ariaProperty,
        e$4({ type: String, attribute: 'aria-label' })
    ], IconButtonBase.prototype, "ariaLabel", void 0);
    __decorate([
        ariaProperty,
        e$4({ type: String, attribute: 'aria-haspopup' })
    ], IconButtonBase.prototype, "ariaHasPopup", void 0);
    __decorate([
        i$3('button')
    ], IconButtonBase.prototype, "buttonElement", void 0);
    __decorate([
        e$2('mwc-ripple')
    ], IconButtonBase.prototype, "ripple", void 0);
    __decorate([
        t$2()
    ], IconButtonBase.prototype, "shouldRenderRipple", void 0);
    __decorate([
        e$3({ passive: true })
    ], IconButtonBase.prototype, "handleRippleMouseDown", null);
    __decorate([
        e$3({ passive: true })
    ], IconButtonBase.prototype, "handleRippleTouchStart", null);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles$7 = r$4 `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    let IconButton = class IconButton extends IconButtonBase {
    };
    IconButton.styles = [styles$7];
    IconButton = __decorate([
        n$1('mwc-icon-button')
    ], IconButton);

    /**
     * @license
     * Copyright 2016 Google Inc. All rights reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    (() => {
        var _a, _b, _c;
        /* Symbols for private properties */
        const _blockingElements = Symbol();
        const _alreadyInertElements = Symbol();
        const _topElParents = Symbol();
        const _siblingsToRestore = Symbol();
        const _parentMO = Symbol();
        /* Symbols for private static methods */
        const _topChanged = Symbol();
        const _swapInertedSibling = Symbol();
        const _inertSiblings = Symbol();
        const _restoreInertedSiblings = Symbol();
        const _getParents = Symbol();
        const _getDistributedChildren = Symbol();
        const _isInertable = Symbol();
        const _handleMutations = Symbol();
        class BlockingElementsImpl {
            constructor() {
                /**
                 * The blocking elements.
                 */
                this[_a] = [];
                /**
                 * Used to keep track of the parents of the top element, from the element
                 * itself up to body. When top changes, the old top might have been removed
                 * from the document, so we need to memoize the inerted parents' siblings
                 * in order to restore their inerteness when top changes.
                 */
                this[_b] = [];
                /**
                 * Elements that are already inert before the first blocking element is
                 * pushed.
                 */
                this[_c] = new Set();
            }
            destructor() {
                // Restore original inertness.
                this[_restoreInertedSiblings](this[_topElParents]);
                // Note we don't want to make these properties nullable on the class,
                // since then we'd need non-null casts in many places. Calling a method on
                // a BlockingElements instance after calling destructor will result in an
                // exception.
                const nullable = this;
                nullable[_blockingElements] = null;
                nullable[_topElParents] = null;
                nullable[_alreadyInertElements] = null;
            }
            get top() {
                const elems = this[_blockingElements];
                return elems[elems.length - 1] || null;
            }
            push(element) {
                if (!element || element === this.top) {
                    return;
                }
                // Remove it from the stack, we'll bring it to the top.
                this.remove(element);
                this[_topChanged](element);
                this[_blockingElements].push(element);
            }
            remove(element) {
                const i = this[_blockingElements].indexOf(element);
                if (i === -1) {
                    return false;
                }
                this[_blockingElements].splice(i, 1);
                // Top changed only if the removed element was the top element.
                if (i === this[_blockingElements].length) {
                    this[_topChanged](this.top);
                }
                return true;
            }
            pop() {
                const top = this.top;
                top && this.remove(top);
                return top;
            }
            has(element) {
                return this[_blockingElements].indexOf(element) !== -1;
            }
            /**
             * Sets `inert` to all document elements except the new top element, its
             * parents, and its distributed content.
             */
            [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
                const toKeepInert = this[_alreadyInertElements];
                const oldParents = this[_topElParents];
                // No new top, reset old top if any.
                if (!newTop) {
                    this[_restoreInertedSiblings](oldParents);
                    toKeepInert.clear();
                    this[_topElParents] = [];
                    return;
                }
                const newParents = this[_getParents](newTop);
                // New top is not contained in the main document!
                if (newParents[newParents.length - 1].parentNode !== document.body) {
                    throw Error('Non-connected element cannot be a blocking element');
                }
                // Cast here because we know we'll call _inertSiblings on newParents
                // below.
                this[_topElParents] = newParents;
                const toSkip = this[_getDistributedChildren](newTop);
                // No previous top element.
                if (!oldParents.length) {
                    this[_inertSiblings](newParents, toSkip, toKeepInert);
                    return;
                }
                let i = oldParents.length - 1;
                let j = newParents.length - 1;
                // Find common parent. Index 0 is the element itself (so stop before it).
                while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
                    i--;
                    j--;
                }
                // If up the parents tree there are 2 elements that are siblings, swap
                // the inerted sibling.
                if (oldParents[i] !== newParents[j]) {
                    this[_swapInertedSibling](oldParents[i], newParents[j]);
                }
                // Restore old parents siblings inertness.
                i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i));
                // Make new parents siblings inert.
                j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
            }
            /**
             * Swaps inertness between two sibling elements.
             * Sets the property `inert` over the attribute since the inert spec
             * doesn't specify if it should be reflected.
             * https://html.spec.whatwg.org/multipage/interaction.html#inert
             */
            [_swapInertedSibling](oldInert, newInert) {
                const siblingsToRestore = oldInert[_siblingsToRestore];
                // oldInert is not contained in siblings to restore, so we have to check
                // if it's inertable and if already inert.
                if (this[_isInertable](oldInert) && !oldInert.inert) {
                    oldInert.inert = true;
                    siblingsToRestore.add(oldInert);
                }
                // If newInert was already between the siblings to restore, it means it is
                // inertable and must be restored.
                if (siblingsToRestore.has(newInert)) {
                    newInert.inert = false;
                    siblingsToRestore.delete(newInert);
                }
                newInert[_parentMO] = oldInert[_parentMO];
                newInert[_siblingsToRestore] = siblingsToRestore;
                oldInert[_parentMO] = undefined;
                oldInert[_siblingsToRestore] = undefined;
            }
            /**
             * Restores original inertness to the siblings of the elements.
             * Sets the property `inert` over the attribute since the inert spec
             * doesn't specify if it should be reflected.
             * https://html.spec.whatwg.org/multipage/interaction.html#inert
             */
            [_restoreInertedSiblings](elements) {
                for (const element of elements) {
                    const mo = element[_parentMO];
                    mo.disconnect();
                    element[_parentMO] = undefined;
                    const siblings = element[_siblingsToRestore];
                    for (const sibling of siblings) {
                        sibling.inert = false;
                    }
                    element[_siblingsToRestore] = undefined;
                }
            }
            /**
             * Inerts the siblings of the elements except the elements to skip. Stores
             * the inerted siblings into the element's symbol `_siblingsToRestore`.
             * Pass `toKeepInert` to collect the already inert elements.
             * Sets the property `inert` over the attribute since the inert spec
             * doesn't specify if it should be reflected.
             * https://html.spec.whatwg.org/multipage/interaction.html#inert
             */
            [_inertSiblings](elements, toSkip, toKeepInert) {
                for (const element of elements) {
                    // Assume element is not a Document, so it must have a parentNode.
                    const parent = element.parentNode;
                    const children = parent.children;
                    const inertedSiblings = new Set();
                    for (let j = 0; j < children.length; j++) {
                        const sibling = children[j];
                        // Skip the input element, if not inertable or to be skipped.
                        if (sibling === element || !this[_isInertable](sibling) ||
                            (toSkip && toSkip.has(sibling))) {
                            continue;
                        }
                        // Should be collected since already inerted.
                        if (toKeepInert && sibling.inert) {
                            toKeepInert.add(sibling);
                        }
                        else {
                            sibling.inert = true;
                            inertedSiblings.add(sibling);
                        }
                    }
                    // Store the siblings that were inerted.
                    element[_siblingsToRestore] = inertedSiblings;
                    // Observe only immediate children mutations on the parent.
                    const mo = new MutationObserver(this[_handleMutations].bind(this));
                    element[_parentMO] = mo;
                    let parentToObserve = parent;
                    // If we're using the ShadyDOM polyfill, then our parent could be a
                    // shady root, which is an object that acts like a ShadowRoot, but isn't
                    // actually a node in the real DOM. Observe the real DOM parent instead.
                    const maybeShadyRoot = parentToObserve;
                    if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
                        parentToObserve = maybeShadyRoot.host;
                    }
                    mo.observe(parentToObserve, {
                        childList: true,
                    });
                }
            }
            /**
             * Handles newly added/removed nodes by toggling their inertness.
             * It also checks if the current top Blocking Element has been removed,
             * notifying and removing it.
             */
            [_handleMutations](mutations) {
                const parents = this[_topElParents];
                const toKeepInert = this[_alreadyInertElements];
                for (const mutation of mutations) {
                    // If the target is a shadowRoot, get its host as we skip shadowRoots when
                    // computing _topElParents.
                    const target = mutation.target.host || mutation.target;
                    const idx = target === document.body ?
                        parents.length :
                        parents.indexOf(target);
                    const inertedChild = parents[idx - 1];
                    const inertedSiblings = inertedChild[_siblingsToRestore];
                    // To restore.
                    for (let i = 0; i < mutation.removedNodes.length; i++) {
                        const sibling = mutation.removedNodes[i];
                        if (sibling === inertedChild) {
                            console.info('Detected removal of the top Blocking Element.');
                            this.pop();
                            return;
                        }
                        if (inertedSiblings.has(sibling)) {
                            sibling.inert = false;
                            inertedSiblings.delete(sibling);
                        }
                    }
                    // To inert.
                    for (let i = 0; i < mutation.addedNodes.length; i++) {
                        const sibling = mutation.addedNodes[i];
                        if (!this[_isInertable](sibling)) {
                            continue;
                        }
                        if (toKeepInert && sibling.inert) {
                            toKeepInert.add(sibling);
                        }
                        else {
                            sibling.inert = true;
                            inertedSiblings.add(sibling);
                        }
                    }
                }
            }
            /**
             * Returns if the element is inertable.
             */
            [_isInertable](element) {
                return false === /^(style|template|script)$/.test(element.localName);
            }
            /**
             * Returns the list of newParents of an element, starting from element
             * (included) up to `document.body` (excluded).
             */
            [_getParents](element) {
                const parents = [];
                let current = element;
                // Stop to body.
                while (current && current !== document.body) {
                    // Skip shadow roots.
                    if (current.nodeType === Node.ELEMENT_NODE) {
                        parents.push(current);
                    }
                    // ShadowDom v1
                    if (current.assignedSlot) {
                        // Collect slots from deepest slot to top.
                        while (current = current.assignedSlot) {
                            parents.push(current);
                        }
                        // Continue the search on the top slot.
                        current = parents.pop();
                        continue;
                    }
                    current = current.parentNode ||
                        current.host;
                }
                return parents;
            }
            /**
             * Returns the distributed children of the element's shadow root.
             * Returns null if the element doesn't have a shadow root.
             */
            [_getDistributedChildren](element) {
                const shadowRoot = element.shadowRoot;
                if (!shadowRoot) {
                    return null;
                }
                const result = new Set();
                let i;
                let j;
                let nodes;
                const slots = shadowRoot.querySelectorAll('slot');
                if (slots.length && slots[0].assignedNodes) {
                    for (i = 0; i < slots.length; i++) {
                        nodes = slots[i].assignedNodes({
                            flatten: true,
                        });
                        for (j = 0; j < nodes.length; j++) {
                            if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                                result.add(nodes[j]);
                            }
                        }
                    }
                    // No need to search for <content>.
                }
                return result;
            }
        }
        document.$blockingElements =
            new BlockingElementsImpl();
    })();

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * This work is licensed under the W3C Software and Document License
     * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
     */

    (function () {
      // Return early if we're not running inside of the browser.
      if (typeof window === 'undefined') {
        return;
      }

      // Convenience function for converting NodeLists.
      /** @type {typeof Array.prototype.slice} */
      var slice = Array.prototype.slice;

      /**
       * IE has a non-standard name for "matches".
       * @type {typeof Element.prototype.matches}
       */
      var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

      /** @type {string} */
      var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');

      /**
       * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
       * attribute.
       *
       * Its main functions are:
       *
       * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
       *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
       *   each focusable node in the subtree with the singleton `InertManager` which manages all known
       *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
       *   instance exists for each focusable node which has at least one inert root as an ancestor.
       *
       * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
       *   attribute is removed from the root node). This is handled in the destructor, which calls the
       *   `deregister` method on `InertManager` for each managed inert node.
       */

      var InertRoot = function () {
        /**
         * @param {!Element} rootElement The Element at the root of the inert subtree.
         * @param {!InertManager} inertManager The global singleton InertManager object.
         */
        function InertRoot(rootElement, inertManager) {
          _classCallCheck(this, InertRoot);

          /** @type {!InertManager} */
          this._inertManager = inertManager;

          /** @type {!Element} */
          this._rootElement = rootElement;

          /**
           * @type {!Set<!InertNode>}
           * All managed focusable nodes in this InertRoot's subtree.
           */
          this._managedNodes = new Set();

          // Make the subtree hidden from assistive technology
          if (this._rootElement.hasAttribute('aria-hidden')) {
            /** @type {?string} */
            this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
          } else {
            this._savedAriaHidden = null;
          }
          this._rootElement.setAttribute('aria-hidden', 'true');

          // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
          this._makeSubtreeUnfocusable(this._rootElement);

          // Watch for:
          // - any additions in the subtree: make them unfocusable too
          // - any removals from the subtree: remove them from this inert root's managed nodes
          // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
          //   element, make that node a managed node.
          this._observer = new MutationObserver(this._onMutation.bind(this));
          this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
        }

        /**
         * Call this whenever this object is about to become obsolete.  This unwinds all of the state
         * stored in this object and updates the state of all of the managed nodes.
         */


        _createClass(InertRoot, [{
          key: 'destructor',
          value: function destructor() {
            this._observer.disconnect();

            if (this._rootElement) {
              if (this._savedAriaHidden !== null) {
                this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
              } else {
                this._rootElement.removeAttribute('aria-hidden');
              }
            }

            this._managedNodes.forEach(function (inertNode) {
              this._unmanageNode(inertNode.node);
            }, this);

            // Note we cast the nulls to the ANY type here because:
            // 1) We want the class properties to be declared as non-null, or else we
            //    need even more casts throughout this code. All bets are off if an
            //    instance has been destroyed and a method is called.
            // 2) We don't want to cast "this", because we want type-aware optimizations
            //    to know which properties we're setting.
            this._observer = /** @type {?} */null;
            this._rootElement = /** @type {?} */null;
            this._managedNodes = /** @type {?} */null;
            this._inertManager = /** @type {?} */null;
          }

          /**
           * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
           */

        }, {
          key: '_makeSubtreeUnfocusable',


          /**
           * @param {!Node} startNode
           */
          value: function _makeSubtreeUnfocusable(startNode) {
            var _this2 = this;

            composedTreeWalk(startNode, function (node) {
              return _this2._visitNode(node);
            });

            var activeElement = document.activeElement;

            if (!document.body.contains(startNode)) {
              // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
              var node = startNode;
              /** @type {!ShadowRoot|undefined} */
              var root = undefined;
              while (node) {
                if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  root = /** @type {!ShadowRoot} */node;
                  break;
                }
                node = node.parentNode;
              }
              if (root) {
                activeElement = root.activeElement;
              }
            }
            if (startNode.contains(activeElement)) {
              activeElement.blur();
              // In IE11, if an element is already focused, and then set to tabindex=-1
              // calling blur() will not actually move the focus.
              // To work around this we call focus() on the body instead.
              if (activeElement === document.activeElement) {
                document.body.focus();
              }
            }
          }

          /**
           * @param {!Node} node
           */

        }, {
          key: '_visitNode',
          value: function _visitNode(node) {
            if (node.nodeType !== Node.ELEMENT_NODE) {
              return;
            }
            var element = /** @type {!Element} */node;

            // If a descendant inert root becomes un-inert, its descendants will still be inert because of
            // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
            if (element !== this._rootElement && element.hasAttribute('inert')) {
              this._adoptInertRoot(element);
            }

            if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
              this._manageNode(element);
            }
          }

          /**
           * Register the given node with this InertRoot and with InertManager.
           * @param {!Node} node
           */

        }, {
          key: '_manageNode',
          value: function _manageNode(node) {
            var inertNode = this._inertManager.register(node, this);
            this._managedNodes.add(inertNode);
          }

          /**
           * Unregister the given node with this InertRoot and with InertManager.
           * @param {!Node} node
           */

        }, {
          key: '_unmanageNode',
          value: function _unmanageNode(node) {
            var inertNode = this._inertManager.deregister(node, this);
            if (inertNode) {
              this._managedNodes['delete'](inertNode);
            }
          }

          /**
           * Unregister the entire subtree starting at `startNode`.
           * @param {!Node} startNode
           */

        }, {
          key: '_unmanageSubtree',
          value: function _unmanageSubtree(startNode) {
            var _this3 = this;

            composedTreeWalk(startNode, function (node) {
              return _this3._unmanageNode(node);
            });
          }

          /**
           * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
           * @param {!Element} node
           */

        }, {
          key: '_adoptInertRoot',
          value: function _adoptInertRoot(node) {
            var inertSubroot = this._inertManager.getInertRoot(node);

            // During initialisation this inert root may not have been registered yet,
            // so register it now if need be.
            if (!inertSubroot) {
              this._inertManager.setInert(node, true);
              inertSubroot = this._inertManager.getInertRoot(node);
            }

            inertSubroot.managedNodes.forEach(function (savedInertNode) {
              this._manageNode(savedInertNode.node);
            }, this);
          }

          /**
           * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
           * @param {!Array<!MutationRecord>} records
           * @param {!MutationObserver} self
           */

        }, {
          key: '_onMutation',
          value: function _onMutation(records, self) {
            records.forEach(function (record) {
              var target = /** @type {!Element} */record.target;
              if (record.type === 'childList') {
                // Manage added nodes
                slice.call(record.addedNodes).forEach(function (node) {
                  this._makeSubtreeUnfocusable(node);
                }, this);

                // Un-manage removed nodes
                slice.call(record.removedNodes).forEach(function (node) {
                  this._unmanageSubtree(node);
                }, this);
              } else if (record.type === 'attributes') {
                if (record.attributeName === 'tabindex') {
                  // Re-initialise inert node if tabindex changes
                  this._manageNode(target);
                } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                  // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                  // already managed nodes from this inert subroot.
                  this._adoptInertRoot(target);
                  var inertSubroot = this._inertManager.getInertRoot(target);
                  this._managedNodes.forEach(function (managedNode) {
                    if (target.contains(managedNode.node)) {
                      inertSubroot._manageNode(managedNode.node);
                    }
                  });
                }
              }
            }, this);
          }
        }, {
          key: 'managedNodes',
          get: function get() {
            return new Set(this._managedNodes);
          }

          /** @return {boolean} */

        }, {
          key: 'hasSavedAriaHidden',
          get: function get() {
            return this._savedAriaHidden !== null;
          }

          /** @param {?string} ariaHidden */

        }, {
          key: 'savedAriaHidden',
          set: function set(ariaHidden) {
            this._savedAriaHidden = ariaHidden;
          }

          /** @return {?string} */
          ,
          get: function get() {
            return this._savedAriaHidden;
          }
        }]);

        return InertRoot;
      }();

      /**
       * `InertNode` initialises and manages a single inert node.
       * A node is inert if it is a descendant of one or more inert root elements.
       *
       * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
       * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
       * is intrinsically focusable or not.
       *
       * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
       * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
       * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
       * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
       * or removes the `tabindex` attribute if the element is intrinsically focusable.
       */


      var InertNode = function () {
        /**
         * @param {!Node} node A focusable element to be made inert.
         * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
         */
        function InertNode(node, inertRoot) {
          _classCallCheck(this, InertNode);

          /** @type {!Node} */
          this._node = node;

          /** @type {boolean} */
          this._overrodeFocusMethod = false;

          /**
           * @type {!Set<!InertRoot>} The set of descendant inert roots.
           *    If and only if this set becomes empty, this node is no longer inert.
           */
          this._inertRoots = new Set([inertRoot]);

          /** @type {?number} */
          this._savedTabIndex = null;

          /** @type {boolean} */
          this._destroyed = false;

          // Save any prior tabindex info and make this node untabbable
          this.ensureUntabbable();
        }

        /**
         * Call this whenever this object is about to become obsolete.
         * This makes the managed node focusable again and deletes all of the previously stored state.
         */


        _createClass(InertNode, [{
          key: 'destructor',
          value: function destructor() {
            this._throwIfDestroyed();

            if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
              var element = /** @type {!Element} */this._node;
              if (this._savedTabIndex !== null) {
                element.setAttribute('tabindex', this._savedTabIndex);
              } else {
                element.removeAttribute('tabindex');
              }

              // Use `delete` to restore native focus method.
              if (this._overrodeFocusMethod) {
                delete element.focus;
              }
            }

            // See note in InertRoot.destructor for why we cast these nulls to ANY.
            this._node = /** @type {?} */null;
            this._inertRoots = /** @type {?} */null;
            this._destroyed = true;
          }

          /**
           * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
           * If the object has been destroyed, any attempt to access it will cause an exception.
           */

        }, {
          key: '_throwIfDestroyed',


          /**
           * Throw if user tries to access destroyed InertNode.
           */
          value: function _throwIfDestroyed() {
            if (this.destroyed) {
              throw new Error('Trying to access destroyed InertNode');
            }
          }

          /** @return {boolean} */

        }, {
          key: 'ensureUntabbable',


          /** Save the existing tabindex value and make the node untabbable and unfocusable */
          value: function ensureUntabbable() {
            if (this.node.nodeType !== Node.ELEMENT_NODE) {
              return;
            }
            var element = /** @type {!Element} */this.node;
            if (matches.call(element, _focusableElementsString)) {
              if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
                return;
              }

              if (element.hasAttribute('tabindex')) {
                this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
              }
              element.setAttribute('tabindex', '-1');
              if (element.nodeType === Node.ELEMENT_NODE) {
                element.focus = function () {};
                this._overrodeFocusMethod = true;
              }
            } else if (element.hasAttribute('tabindex')) {
              this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
              element.removeAttribute('tabindex');
            }
          }

          /**
           * Add another inert root to this inert node's set of managing inert roots.
           * @param {!InertRoot} inertRoot
           */

        }, {
          key: 'addInertRoot',
          value: function addInertRoot(inertRoot) {
            this._throwIfDestroyed();
            this._inertRoots.add(inertRoot);
          }

          /**
           * Remove the given inert root from this inert node's set of managing inert roots.
           * If the set of managing inert roots becomes empty, this node is no longer inert,
           * so the object should be destroyed.
           * @param {!InertRoot} inertRoot
           */

        }, {
          key: 'removeInertRoot',
          value: function removeInertRoot(inertRoot) {
            this._throwIfDestroyed();
            this._inertRoots['delete'](inertRoot);
            if (this._inertRoots.size === 0) {
              this.destructor();
            }
          }
        }, {
          key: 'destroyed',
          get: function get() {
            return (/** @type {!InertNode} */this._destroyed
            );
          }
        }, {
          key: 'hasSavedTabIndex',
          get: function get() {
            return this._savedTabIndex !== null;
          }

          /** @return {!Node} */

        }, {
          key: 'node',
          get: function get() {
            this._throwIfDestroyed();
            return this._node;
          }

          /** @param {?number} tabIndex */

        }, {
          key: 'savedTabIndex',
          set: function set(tabIndex) {
            this._throwIfDestroyed();
            this._savedTabIndex = tabIndex;
          }

          /** @return {?number} */
          ,
          get: function get() {
            this._throwIfDestroyed();
            return this._savedTabIndex;
          }
        }]);

        return InertNode;
      }();

      /**
       * InertManager is a per-document singleton object which manages all inert roots and nodes.
       *
       * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
       * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
       * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
       * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
       * is created for each such node, via the `_managedNodes` map.
       */


      var InertManager = function () {
        /**
         * @param {!Document} document
         */
        function InertManager(document) {
          _classCallCheck(this, InertManager);

          if (!document) {
            throw new Error('Missing required argument; InertManager needs to wrap a document.');
          }

          /** @type {!Document} */
          this._document = document;

          /**
           * All managed nodes known to this InertManager. In a map to allow looking up by Node.
           * @type {!Map<!Node, !InertNode>}
           */
          this._managedNodes = new Map();

          /**
           * All inert roots known to this InertManager. In a map to allow looking up by Node.
           * @type {!Map<!Node, !InertRoot>}
           */
          this._inertRoots = new Map();

          /**
           * Observer for mutations on `document.body`.
           * @type {!MutationObserver}
           */
          this._observer = new MutationObserver(this._watchForInert.bind(this));

          // Add inert style.
          addInertStyle(document.head || document.body || document.documentElement);

          // Wait for document to be loaded.
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
          } else {
            this._onDocumentLoaded();
          }
        }

        /**
         * Set whether the given element should be an inert root or not.
         * @param {!Element} root
         * @param {boolean} inert
         */


        _createClass(InertManager, [{
          key: 'setInert',
          value: function setInert(root, inert) {
            if (inert) {
              if (this._inertRoots.has(root)) {
                // element is already inert
                return;
              }

              var inertRoot = new InertRoot(root, this);
              root.setAttribute('inert', '');
              this._inertRoots.set(root, inertRoot);
              // If not contained in the document, it must be in a shadowRoot.
              // Ensure inert styles are added there.
              if (!this._document.body.contains(root)) {
                var parent = root.parentNode;
                while (parent) {
                  if (parent.nodeType === 11) {
                    addInertStyle(parent);
                  }
                  parent = parent.parentNode;
                }
              }
            } else {
              if (!this._inertRoots.has(root)) {
                // element is already non-inert
                return;
              }

              var _inertRoot = this._inertRoots.get(root);
              _inertRoot.destructor();
              this._inertRoots['delete'](root);
              root.removeAttribute('inert');
            }
          }

          /**
           * Get the InertRoot object corresponding to the given inert root element, if any.
           * @param {!Node} element
           * @return {!InertRoot|undefined}
           */

        }, {
          key: 'getInertRoot',
          value: function getInertRoot(element) {
            return this._inertRoots.get(element);
          }

          /**
           * Register the given InertRoot as managing the given node.
           * In the case where the node has a previously existing inert root, this inert root will
           * be added to its set of inert roots.
           * @param {!Node} node
           * @param {!InertRoot} inertRoot
           * @return {!InertNode} inertNode
           */

        }, {
          key: 'register',
          value: function register(node, inertRoot) {
            var inertNode = this._managedNodes.get(node);
            if (inertNode !== undefined) {
              // node was already in an inert subtree
              inertNode.addInertRoot(inertRoot);
            } else {
              inertNode = new InertNode(node, inertRoot);
            }

            this._managedNodes.set(node, inertNode);

            return inertNode;
          }

          /**
           * De-register the given InertRoot as managing the given inert node.
           * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
           * node from the InertManager's set of managed nodes if it is destroyed.
           * If the node is not currently managed, this is essentially a no-op.
           * @param {!Node} node
           * @param {!InertRoot} inertRoot
           * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
           */

        }, {
          key: 'deregister',
          value: function deregister(node, inertRoot) {
            var inertNode = this._managedNodes.get(node);
            if (!inertNode) {
              return null;
            }

            inertNode.removeInertRoot(inertRoot);
            if (inertNode.destroyed) {
              this._managedNodes['delete'](node);
            }

            return inertNode;
          }

          /**
           * Callback used when document has finished loading.
           */

        }, {
          key: '_onDocumentLoaded',
          value: function _onDocumentLoaded() {
            // Find all inert roots in document and make them actually inert.
            var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
            inertElements.forEach(function (inertElement) {
              this.setInert(inertElement, true);
            }, this);

            // Comment this out to use programmatic API only.
            this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
          }

          /**
           * Callback used when mutation observer detects attribute changes.
           * @param {!Array<!MutationRecord>} records
           * @param {!MutationObserver} self
           */

        }, {
          key: '_watchForInert',
          value: function _watchForInert(records, self) {
            var _this = this;
            records.forEach(function (record) {
              switch (record.type) {
                case 'childList':
                  slice.call(record.addedNodes).forEach(function (node) {
                    if (node.nodeType !== Node.ELEMENT_NODE) {
                      return;
                    }
                    var inertElements = slice.call(node.querySelectorAll('[inert]'));
                    if (matches.call(node, '[inert]')) {
                      inertElements.unshift(node);
                    }
                    inertElements.forEach(function (inertElement) {
                      this.setInert(inertElement, true);
                    }, _this);
                  }, _this);
                  break;
                case 'attributes':
                  if (record.attributeName !== 'inert') {
                    return;
                  }
                  var target = /** @type {!Element} */record.target;
                  var inert = target.hasAttribute('inert');
                  _this.setInert(target, inert);
                  break;
              }
            }, this);
          }
        }]);

        return InertManager;
      }();

      /**
       * Recursively walk the composed tree from |node|.
       * @param {!Node} node
       * @param {(function (!Element))=} callback Callback to be called for each element traversed,
       *     before descending into child nodes.
       * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
       */


      function composedTreeWalk(node, callback, shadowRootAncestor) {
        if (node.nodeType == Node.ELEMENT_NODE) {
          var element = /** @type {!Element} */node;
          if (callback) {
            callback(element);
          }

          // Descend into node:
          // If it has a ShadowRoot, ignore all child elements - these will be picked
          // up by the <content> or <shadow> elements. Descend straight into the
          // ShadowRoot.
          var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
          if (shadowRoot) {
            composedTreeWalk(shadowRoot, callback);
            return;
          }

          // If it is a <content> element, descend into distributed elements - these
          // are elements from outside the shadow root which are rendered inside the
          // shadow DOM.
          if (element.localName == 'content') {
            var content = /** @type {!HTMLContentElement} */element;
            // Verifies if ShadowDom v0 is supported.
            var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
            for (var i = 0; i < distributedNodes.length; i++) {
              composedTreeWalk(distributedNodes[i], callback);
            }
            return;
          }

          // If it is a <slot> element, descend into assigned nodes - these
          // are elements from outside the shadow root which are rendered inside the
          // shadow DOM.
          if (element.localName == 'slot') {
            var slot = /** @type {!HTMLSlotElement} */element;
            // Verify if ShadowDom v1 is supported.
            var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
            for (var _i = 0; _i < _distributedNodes.length; _i++) {
              composedTreeWalk(_distributedNodes[_i], callback);
            }
            return;
          }
        }

        // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
        // element, nor a <shadow> element recurse normally.
        var child = node.firstChild;
        while (child != null) {
          composedTreeWalk(child, callback);
          child = child.nextSibling;
        }
      }

      /**
       * Adds a style element to the node containing the inert specific styles
       * @param {!Node} node
       */
      function addInertStyle(node) {
        if (node.querySelector('style#inert-style, link#inert-style')) {
          return;
        }
        var style = document.createElement('style');
        style.setAttribute('id', 'inert-style');
        style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
        node.appendChild(style);
      }

      if (!Element.prototype.hasOwnProperty('inert')) {
        /** @type {!InertManager} */
        var inertManager = new InertManager(document);

        Object.defineProperty(Element.prototype, 'inert', {
          enumerable: true,
          /** @this {!Element} */
          get: function get() {
            return this.hasAttribute('inert');
          },
          /** @this {!Element} */
          set: function set(inert) {
            inertManager.setInert(this, inert);
          }
        });
      }
    })();

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var cssClasses$5 = {
        ANIMATE: 'mdc-drawer--animate',
        CLOSING: 'mdc-drawer--closing',
        DISMISSIBLE: 'mdc-drawer--dismissible',
        MODAL: 'mdc-drawer--modal',
        OPEN: 'mdc-drawer--open',
        OPENING: 'mdc-drawer--opening',
        ROOT: 'mdc-drawer',
    };
    var strings$3 = {
        APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
        CLOSE_EVENT: 'MDCDrawer:closed',
        OPEN_EVENT: 'MDCDrawer:opened',
        SCRIM_SELECTOR: '.mdc-drawer-scrim',
        LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
        LIST_ITEM_ACTIVATED_SELECTOR: '.mdc-list-item--activated,.mdc-deprecated-list-item--activated',
    };

    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var MDCDismissibleDrawerFoundation = /** @class */ (function (_super) {
        __extends(MDCDismissibleDrawerFoundation, _super);
        function MDCDismissibleDrawerFoundation(adapter) {
            var _this = _super.call(this, __assign(__assign({}, MDCDismissibleDrawerFoundation.defaultAdapter), adapter)) || this;
            _this.animationFrame = 0;
            _this.animationTimer = 0;
            return _this;
        }
        Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
            get: function () {
                return strings$3;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
            get: function () {
                return cssClasses$5;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
            get: function () {
                // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                return {
                    addClass: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    hasClass: function () { return false; },
                    elementHasClass: function () { return false; },
                    notifyClose: function () { return undefined; },
                    notifyOpen: function () { return undefined; },
                    saveFocus: function () { return undefined; },
                    restoreFocus: function () { return undefined; },
                    focusActiveNavigationItem: function () { return undefined; },
                    trapFocus: function () { return undefined; },
                    releaseFocus: function () { return undefined; },
                };
                // tslint:enable:object-literal-sort-keys
            },
            enumerable: false,
            configurable: true
        });
        MDCDismissibleDrawerFoundation.prototype.destroy = function () {
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
            }
            if (this.animationTimer) {
                clearTimeout(this.animationTimer);
            }
        };
        /**
         * Opens the drawer from the closed state.
         */
        MDCDismissibleDrawerFoundation.prototype.open = function () {
            var _this = this;
            if (this.isOpen() || this.isOpening() || this.isClosing()) {
                return;
            }
            this.adapter.addClass(cssClasses$5.OPEN);
            this.adapter.addClass(cssClasses$5.ANIMATE);
            // Wait a frame once display is no longer "none", to establish basis for animation
            this.runNextAnimationFrame(function () {
                _this.adapter.addClass(cssClasses$5.OPENING);
            });
            this.adapter.saveFocus();
        };
        /**
         * Closes the drawer from the open state.
         */
        MDCDismissibleDrawerFoundation.prototype.close = function () {
            if (!this.isOpen() || this.isOpening() || this.isClosing()) {
                return;
            }
            this.adapter.addClass(cssClasses$5.CLOSING);
        };
        /**
         * Returns true if the drawer is in the open position.
         * @return true if drawer is in open state.
         */
        MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
            return this.adapter.hasClass(cssClasses$5.OPEN);
        };
        /**
         * Returns true if the drawer is animating open.
         * @return true if drawer is animating open.
         */
        MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
            return this.adapter.hasClass(cssClasses$5.OPENING) ||
                this.adapter.hasClass(cssClasses$5.ANIMATE);
        };
        /**
         * Returns true if the drawer is animating closed.
         * @return true if drawer is animating closed.
         */
        MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
            return this.adapter.hasClass(cssClasses$5.CLOSING);
        };
        /**
         * Keydown handler to close drawer when key is escape.
         */
        MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
            var keyCode = evt.keyCode, key = evt.key;
            var isEscape = key === 'Escape' || keyCode === 27;
            if (isEscape) {
                this.close();
            }
        };
        /**
         * Handles the `transitionend` event when the drawer finishes opening/closing.
         */
        MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
            var OPENING = cssClasses$5.OPENING, CLOSING = cssClasses$5.CLOSING, OPEN = cssClasses$5.OPEN, ANIMATE = cssClasses$5.ANIMATE, ROOT = cssClasses$5.ROOT;
            // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
            var isRootElement = this.isElement(evt.target) &&
                this.adapter.elementHasClass(evt.target, ROOT);
            if (!isRootElement) {
                return;
            }
            if (this.isClosing()) {
                this.adapter.removeClass(OPEN);
                this.closed();
                this.adapter.restoreFocus();
                this.adapter.notifyClose();
            }
            else {
                this.adapter.focusActiveNavigationItem();
                this.opened();
                this.adapter.notifyOpen();
            }
            this.adapter.removeClass(ANIMATE);
            this.adapter.removeClass(OPENING);
            this.adapter.removeClass(CLOSING);
        };
        /**
         * Extension point for when drawer finishes open animation.
         */
        MDCDismissibleDrawerFoundation.prototype.opened = function () { }; // tslint:disable-line:no-empty
        /**
         * Extension point for when drawer finishes close animation.
         */
        MDCDismissibleDrawerFoundation.prototype.closed = function () { }; // tslint:disable-line:no-empty
        /**
         * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
         */
        MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame = function (callback) {
            var _this = this;
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = requestAnimationFrame(function () {
                _this.animationFrame = 0;
                clearTimeout(_this.animationTimer);
                _this.animationTimer = setTimeout(callback, 0);
            });
        };
        MDCDismissibleDrawerFoundation.prototype.isElement = function (element) {
            // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
            return Boolean(element.classList);
        };
        return MDCDismissibleDrawerFoundation;
    }(MDCFoundation));
    // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
    var MDCDismissibleDrawerFoundation$1 = MDCDismissibleDrawerFoundation;

    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /* istanbul ignore next: subclass is not a branch statement */
    var MDCModalDrawerFoundation = /** @class */ (function (_super) {
        __extends(MDCModalDrawerFoundation, _super);
        function MDCModalDrawerFoundation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Handles click event on scrim.
         */
        MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
            this.close();
        };
        /**
         * Called when drawer finishes open animation.
         */
        MDCModalDrawerFoundation.prototype.opened = function () {
            this.adapter.trapFocus();
        };
        /**
         * Called when drawer finishes close animation.
         */
        MDCModalDrawerFoundation.prototype.closed = function () {
            this.adapter.releaseFocus();
        };
        return MDCModalDrawerFoundation;
    }(MDCDismissibleDrawerFoundation));
    // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
    var MDCModalDrawerFoundation$1 = MDCModalDrawerFoundation;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * Specifies an observer callback that is run when the decorated property
     * changes. The observer receives the current and old value as arguments.
     */
    const observer = (observer) => 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (proto, propName) => {
        // if we haven't wrapped `updated` in this class, do so
        if (!proto.constructor
            ._observers) {
            proto.constructor._observers = new Map();
            const userUpdated = proto.updated;
            proto.updated = function (changedProperties) {
                userUpdated.call(this, changedProperties);
                changedProperties.forEach((v, k) => {
                    const observers = this.constructor
                        ._observers;
                    const observer = observers.get(k);
                    if (observer !== undefined) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        observer.call(this, this[k], v);
                    }
                });
            };
            // clone any existing observers (superclasses)
            // eslint-disable-next-line no-prototype-builtins
        }
        else if (!proto.constructor.hasOwnProperty('_observers')) {
            const observers = proto.constructor._observers;
            proto.constructor._observers = new Map();
            observers.forEach(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (v, k) => proto.constructor._observers.set(k, v));
        }
        // set this method
        proto.constructor._observers.set(propName, observer);
    };

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    const blockingElements = document.$blockingElements;
    class DrawerBase extends BaseElement {
        constructor() {
            super(...arguments);
            this._previousFocus = null;
            this.open = false;
            this.hasHeader = false;
            this.type = '';
        }
        get mdcFoundationClass() {
            return this.type === 'modal' ? MDCModalDrawerFoundation$1 :
                MDCDismissibleDrawerFoundation$1;
        }
        createAdapter() {
            return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { elementHasClass: (element, className) => element.classList.contains(className), saveFocus: () => {
                    // Note, casting to avoid cumbersome runtime check.
                    this._previousFocus =
                        this.getRootNode().activeElement;
                }, restoreFocus: () => {
                    const previousFocus = this._previousFocus && this._previousFocus.focus;
                    if (previousFocus) {
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        this._previousFocus.focus();
                    }
                }, notifyClose: () => {
                    this.open = false;
                    this.dispatchEvent(new Event(strings$3.CLOSE_EVENT, { bubbles: true, cancelable: true }));
                }, notifyOpen: () => {
                    this.open = true;
                    this.dispatchEvent(new Event(strings$3.OPEN_EVENT, { bubbles: true, cancelable: true }));
                }, focusActiveNavigationItem: () => { }, trapFocus: () => {
                    blockingElements.push(this);
                    this.appContent.inert = true;
                }, releaseFocus: () => {
                    blockingElements.remove(this);
                    this.appContent.inert = false;
                } });
        }
        _handleScrimClick() {
            if (this.mdcFoundation instanceof MDCModalDrawerFoundation$1) {
                this.mdcFoundation.handleScrimClick();
            }
        }
        render() {
            const dismissible = this.type === 'dismissible' || this.type === 'modal';
            const modal = this.type === 'modal';
            const header = this.hasHeader ? p$1 `
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      ` :
                '';
            const classes = {
                'mdc-drawer--dismissible': dismissible,
                'mdc-drawer--modal': modal,
            };
            return p$1 `
      <aside class="mdc-drawer ${o$1(classes)}">
        ${header}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${modal ? p$1 `<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>` :
            ''}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `;
        }
        // note, we avoid calling `super.firstUpdated()` to control when
        // `createFoundation()` is called.
        firstUpdated() {
            this.mdcRoot.addEventListener('keydown', (e) => this.mdcFoundation.handleKeydown(e));
            this.mdcRoot.addEventListener('transitionend', (e) => this.mdcFoundation.handleTransitionEnd(e));
        }
        updated(changedProperties) {
            if (changedProperties.has('type')) {
                this.createFoundation();
            }
        }
    }
    __decorate([
        i$3('.mdc-drawer')
    ], DrawerBase.prototype, "mdcRoot", void 0);
    __decorate([
        i$3('.mdc-drawer-app-content')
    ], DrawerBase.prototype, "appContent", void 0);
    __decorate([
        observer(function (value) {
            if (this.type === '') {
                return;
            }
            if (value) {
                this.mdcFoundation.open();
            }
            else {
                this.mdcFoundation.close();
            }
        }),
        e$4({ type: Boolean, reflect: true })
    ], DrawerBase.prototype, "open", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], DrawerBase.prototype, "hasHeader", void 0);
    __decorate([
        e$4({ reflect: true })
    ], DrawerBase.prototype, "type", void 0);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles$6 = r$4 `.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    let Drawer = class Drawer extends DrawerBase {
    };
    Drawer.styles = [styles$6];
    Drawer = __decorate([
        n$1('mwc-drawer')
    ], Drawer);

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    class LinearProgressBase extends s$2 {
        constructor() {
            super(...arguments);
            this.indeterminate = false;
            this.progress = 0;
            this.buffer = 1;
            this.reverse = false;
            this.closed = false;
            this.stylePrimaryHalf = '';
            this.stylePrimaryFull = '';
            this.styleSecondaryQuarter = '';
            this.styleSecondaryHalf = '';
            this.styleSecondaryFull = '';
            this.animationReady = true;
            this.closedAnimationOff = false;
            this.resizeObserver = null;
        }
        connectedCallback() {
            super.connectedCallback();
            // if detached and reattached
            if (this.rootEl) {
                this.attachResizeObserver();
            }
        }
        /**
         * @soyTemplate
         */
        render() {
            /** @classMap */
            const classes = {
                'mdc-linear-progress--closed': this.closed,
                'mdc-linear-progress--closed-animation-off': this.closedAnimationOff,
                'mdc-linear-progress--indeterminate': this.indeterminate,
                // needed for controller-less render
                'mdc-linear-progress--animation-ready': this.animationReady
            };
            /** @styleMap */
            const rootStyles = {
                '--mdc-linear-progress-primary-half': this.stylePrimaryHalf,
                '--mdc-linear-progress-primary-half-neg': this.stylePrimaryHalf !== '' ? `-${this.stylePrimaryHalf}` : '',
                '--mdc-linear-progress-primary-full': this.stylePrimaryFull,
                '--mdc-linear-progress-primary-full-neg': this.stylePrimaryFull !== '' ? `-${this.stylePrimaryFull}` : '',
                '--mdc-linear-progress-secondary-quarter': this.styleSecondaryQuarter,
                '--mdc-linear-progress-secondary-quarter-neg': this.styleSecondaryQuarter !== '' ? `-${this.styleSecondaryQuarter}` :
                    '',
                '--mdc-linear-progress-secondary-half': this.styleSecondaryHalf,
                '--mdc-linear-progress-secondary-half-neg': this.styleSecondaryHalf !== '' ? `-${this.styleSecondaryHalf}` : '',
                '--mdc-linear-progress-secondary-full': this.styleSecondaryFull,
                '--mdc-linear-progress-secondary-full-neg': this.styleSecondaryFull !== '' ? `-${this.styleSecondaryFull}` : '',
            };
            /** @styleMap */
            const bufferBarStyles = {
                'flex-basis': this.indeterminate ? '100%' : `${this.buffer * 100}%`,
            };
            /** @styleMap */
            const primaryBarStyles = {
                transform: this.indeterminate ? 'scaleX(1)' : `scaleX(${this.progress})`,
            };
            return p$1 `
      <div
          role="progressbar"
          class="mdc-linear-progress ${o$1(classes)}"
          style="${i$1(rootStyles)}"
          dir="${l$2(this.reverse ? 'rtl' : undefined)}"
          aria-label="${l$2(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${l$2(this.indeterminate ? undefined : this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${i$1(bufferBarStyles)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${i$1(primaryBarStyles)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`;
        }
        update(changedProperties) {
            // - When showing the indicator, enable animations immediately.
            // - On first render, disable the animation immediately.
            // - For normal calls to hide the component, let transitionend event trigger
            //   disabling of animations instead (see render method), so that animation
            //   does not jump in the middle of fade out.
            if (changedProperties.has('closed') &&
                (!this.closed || changedProperties.get('closed') === undefined)) {
                this.syncClosedState();
            }
            super.update(changedProperties);
        }
        async firstUpdated(changed) {
            super.firstUpdated(changed);
            this.attachResizeObserver();
        }
        syncClosedState() {
            this.closedAnimationOff = this.closed;
        }
        updated(changed) {
            // restart animation for timing if reverse changed and is indeterminate.
            // don't restart here if indeterminate has changed as well because we don't
            // want to incur an extra style recalculation
            if (!changed.has('indeterminate') && changed.has('reverse') &&
                this.indeterminate) {
                this.restartAnimation();
            }
            // Recaclulate the animation css custom props and restart the calculation
            // if this is not the first render cycle, otherwise, resize observer init
            // will already handle this and prevent unnecessary rerender + style recalc
            // but resize observer will not update animation vals while determinate
            if (changed.has('indeterminate') &&
                changed.get('indeterminate') !== undefined && this.indeterminate &&
                window.ResizeObserver) {
                this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth);
            }
            super.updated(changed);
        }
        disconnectedCallback() {
            if (this.resizeObserver) {
                this.resizeObserver.disconnect();
                this.resizeObserver = null;
            }
            super.disconnectedCallback();
        }
        attachResizeObserver() {
            if (window.ResizeObserver) {
                this.resizeObserver =
                    new window
                        .ResizeObserver((entries) => {
                        if (!this.indeterminate) {
                            return;
                        }
                        for (const entry of entries) {
                            if (entry.contentRect) {
                                const width = entry.contentRect.width;
                                this.calculateAndSetAnimationDimensions(width);
                            }
                        }
                    });
                this.resizeObserver.observe(this.rootEl);
                return;
            }
            this.resizeObserver = null;
        }
        calculateAndSetAnimationDimensions(width) {
            const primaryHalf = width * 0.8367142;
            const primaryFull = width * 2.00611057;
            const secondaryQuarter = width * 0.37651913;
            const secondaryHalf = width * 0.84386165;
            const secondaryFull = width * 1.60277782;
            this.stylePrimaryHalf = `${primaryHalf}px`;
            this.stylePrimaryFull = `${primaryFull}px`;
            this.styleSecondaryQuarter = `${secondaryQuarter}px`;
            this.styleSecondaryHalf = `${secondaryHalf}px`;
            this.styleSecondaryFull = `${secondaryFull}px`;
            // need to restart animation for custom props to apply to keyframes
            this.restartAnimation();
        }
        async restartAnimation() {
            this.animationReady = false;
            await this.updateComplete;
            await new Promise(requestAnimationFrame);
            this.animationReady = true;
            await this.updateComplete;
        }
        open() {
            this.closed = false;
        }
        close() {
            this.closed = true;
        }
    }
    __decorate([
        i$3('.mdc-linear-progress')
    ], LinearProgressBase.prototype, "rootEl", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], LinearProgressBase.prototype, "indeterminate", void 0);
    __decorate([
        e$4({ type: Number })
    ], LinearProgressBase.prototype, "progress", void 0);
    __decorate([
        e$4({ type: Number })
    ], LinearProgressBase.prototype, "buffer", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], LinearProgressBase.prototype, "reverse", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], LinearProgressBase.prototype, "closed", void 0);
    __decorate([
        ariaProperty,
        e$4({ attribute: 'aria-label' })
    ], LinearProgressBase.prototype, "ariaLabel", void 0);
    __decorate([
        t$2()
    ], LinearProgressBase.prototype, "stylePrimaryHalf", void 0);
    __decorate([
        t$2()
    ], LinearProgressBase.prototype, "stylePrimaryFull", void 0);
    __decorate([
        t$2()
    ], LinearProgressBase.prototype, "styleSecondaryQuarter", void 0);
    __decorate([
        t$2()
    ], LinearProgressBase.prototype, "styleSecondaryHalf", void 0);
    __decorate([
        t$2()
    ], LinearProgressBase.prototype, "styleSecondaryFull", void 0);
    __decorate([
        t$2()
    ], LinearProgressBase.prototype, "animationReady", void 0);
    __decorate([
        t$2()
    ], LinearProgressBase.prototype, "closedAnimationOff", void 0);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles$5 = r$4 `@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    let LinearProgress = class LinearProgress extends LinearProgressBase {
    };
    LinearProgress.styles = [styles$5];
    LinearProgress = __decorate([
        n$1('mwc-linear-progress')
    ], LinearProgress);

    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var strings$2 = {
        NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
    };
    var numbers$1 = {
        // This should stay in sync with $mdc-notched-outline-padding * 2.
        NOTCH_ELEMENT_PADDING: 8,
    };
    var cssClasses$4 = {
        NO_LABEL: 'mdc-notched-outline--no-label',
        OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
        OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
    };

    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
        __extends(MDCNotchedOutlineFoundation, _super);
        function MDCNotchedOutlineFoundation(adapter) {
            return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
        }
        Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
            get: function () {
                return strings$2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
            get: function () {
                return cssClasses$4;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
            get: function () {
                return numbers$1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
            /**
             * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
             */
            get: function () {
                // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                return {
                    addClass: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    setNotchWidthProperty: function () { return undefined; },
                    removeNotchWidthProperty: function () { return undefined; },
                };
                // tslint:enable:object-literal-sort-keys
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
         */
        MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
            var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
            if (notchWidth > 0) {
                notchWidth += numbers$1.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
            }
            this.adapter.setNotchWidthProperty(notchWidth);
            this.adapter.addClass(OUTLINE_NOTCHED);
        };
        /**
         * Removes notched outline selector to close the notch in the outline.
         */
        MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
            var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
            this.adapter.removeClass(OUTLINE_NOTCHED);
            this.adapter.removeNotchWidthProperty();
        };
        return MDCNotchedOutlineFoundation;
    }(MDCFoundation));

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    class NotchedOutlineBase extends BaseElement {
        constructor() {
            super(...arguments);
            this.mdcFoundationClass = MDCNotchedOutlineFoundation;
            this.width = 0;
            this.open = false;
            this.lastOpen = this.open;
        }
        createAdapter() {
            return {
                addClass: (className) => this.mdcRoot.classList.add(className),
                removeClass: (className) => this.mdcRoot.classList.remove(className),
                setNotchWidthProperty: (width) => this.notchElement.style.setProperty('width', `${width}px`),
                removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width'),
            };
        }
        openOrClose(shouldOpen, width) {
            if (!this.mdcFoundation) {
                return;
            }
            if (shouldOpen && width !== undefined) {
                this.mdcFoundation.notch(width);
            }
            else {
                this.mdcFoundation.closeNotch();
            }
        }
        render() {
            this.openOrClose(this.open, this.width);
            const classes = o$1({
                'mdc-notched-outline--notched': this.open,
            });
            return p$1 `
      <span class="mdc-notched-outline ${classes}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
        }
    }
    __decorate([
        i$3('.mdc-notched-outline')
    ], NotchedOutlineBase.prototype, "mdcRoot", void 0);
    __decorate([
        e$4({ type: Number })
    ], NotchedOutlineBase.prototype, "width", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], NotchedOutlineBase.prototype, "open", void 0);
    __decorate([
        i$3('.mdc-notched-outline__notch')
    ], NotchedOutlineBase.prototype, "notchElement", void 0);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles$4 = r$4 `.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    let NotchedOutline = class NotchedOutline extends NotchedOutlineBase {
    };
    NotchedOutline.styles = [styles$4];
    NotchedOutline = __decorate([
        n$1('mwc-notched-outline')
    ], NotchedOutline);

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    var _a, _b;
    // ShadyDOM should submit <input> elements in component internals
    const USING_SHADY_DOM = (_b = (_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) !== null && _b !== void 0 ? _b : false;
    /** @soyCompatible */
    class FormElement extends BaseElement {
        constructor() {
            super(...arguments);
            /**
             * Disabled state for the component. When `disabled` is set to `true`, the
             * component will not be added to form submission.
             */
            this.disabled = false;
            /**
             * Form element that contains this element
             */
            this.containingForm = null;
            this.formDataListener = (ev) => {
                if (!this.disabled) {
                    this.setFormData(ev.formData);
                }
            };
        }
        findFormElement() {
            // If the component internals are not in Shadow DOM, subscribing to form
            // data events could lead to duplicated data, which may not work correctly
            // on the server side.
            if (!this.shadowRoot || USING_SHADY_DOM) {
                return null;
            }
            const root = this.getRootNode();
            const forms = root.querySelectorAll('form');
            for (const form of Array.from(forms)) {
                if (form.contains(this)) {
                    return form;
                }
            }
            return null;
        }
        connectedCallback() {
            var _a;
            super.connectedCallback();
            this.containingForm = this.findFormElement();
            (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.addEventListener('formdata', this.formDataListener);
        }
        disconnectedCallback() {
            var _a;
            super.disconnectedCallback();
            (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.removeEventListener('formdata', this.formDataListener);
            this.containingForm = null;
        }
        click() {
            if (this.formElement && !this.disabled) {
                this.formElement.focus();
                this.formElement.click();
            }
        }
        firstUpdated() {
            super.firstUpdated();
            if (this.shadowRoot) {
                this.mdcRoot.addEventListener('change', (e) => {
                    this.dispatchEvent(new Event('change', e));
                });
            }
        }
    }
    FormElement.shadowRootOptions = { mode: 'open', delegatesFocus: true };
    __decorate([
        e$4({ type: Boolean })
    ], FormElement.prototype, "disabled", void 0);

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var cssClasses$3 = {
        LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
        LABEL_REQUIRED: 'mdc-floating-label--required',
        LABEL_SHAKE: 'mdc-floating-label--shake',
        ROOT: 'mdc-floating-label',
    };

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
        __extends(MDCFloatingLabelFoundation, _super);
        function MDCFloatingLabelFoundation(adapter) {
            var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
            _this.shakeAnimationEndHandler = function () {
                _this.handleShakeAnimationEnd();
            };
            return _this;
        }
        Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
            get: function () {
                return cssClasses$3;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
            /**
             * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
             */
            get: function () {
                // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                return {
                    addClass: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    getWidth: function () { return 0; },
                    registerInteractionHandler: function () { return undefined; },
                    deregisterInteractionHandler: function () { return undefined; },
                };
                // tslint:enable:object-literal-sort-keys
            },
            enumerable: false,
            configurable: true
        });
        MDCFloatingLabelFoundation.prototype.init = function () {
            this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
        };
        MDCFloatingLabelFoundation.prototype.destroy = function () {
            this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
        };
        /**
         * Returns the width of the label element.
         */
        MDCFloatingLabelFoundation.prototype.getWidth = function () {
            return this.adapter.getWidth();
        };
        /**
         * Styles the label to produce a shake animation to indicate an error.
         * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
         */
        MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
            var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
            if (shouldShake) {
                this.adapter.addClass(LABEL_SHAKE);
            }
            else {
                this.adapter.removeClass(LABEL_SHAKE);
            }
        };
        /**
         * Styles the label to float or dock.
         * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
         */
        MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
            var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
            if (shouldFloat) {
                this.adapter.addClass(LABEL_FLOAT_ABOVE);
            }
            else {
                this.adapter.removeClass(LABEL_FLOAT_ABOVE);
                this.adapter.removeClass(LABEL_SHAKE);
            }
        };
        /**
         * Styles the label as required.
         * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
         */
        MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
            var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
            if (isRequired) {
                this.adapter.addClass(LABEL_REQUIRED);
            }
            else {
                this.adapter.removeClass(LABEL_REQUIRED);
            }
        };
        MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd = function () {
            var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
            this.adapter.removeClass(LABEL_SHAKE);
        };
        return MDCFloatingLabelFoundation;
    }(MDCFoundation));

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    const createAdapter$1 = (labelElement) => {
        return {
            addClass: (className) => labelElement.classList.add(className),
            removeClass: (className) => labelElement.classList.remove(className),
            getWidth: () => labelElement.scrollWidth,
            registerInteractionHandler: (evtType, handler) => {
                labelElement.addEventListener(evtType, handler);
            },
            deregisterInteractionHandler: (evtType, handler) => {
                labelElement.removeEventListener(evtType, handler);
            },
        };
    };
    class FloatingLabelDirective extends i$2 {
        constructor(partInfo) {
            super(partInfo);
            this.foundation = null;
            this.previousPart = null;
            switch (partInfo.type) {
                // Only allow Attribute and Part bindings
                case t$1.ATTRIBUTE:
                case t$1.PROPERTY:
                    break;
                default:
                    throw new Error('FloatingLabel directive only support attribute and property parts');
            }
        }
        /**
         * There is no PropertyPart in Lit 2 so far. For more info see:
         * https://github.com/lit/lit/issues/1863
         */
        update(part, [label]) {
            if (part !== this.previousPart) {
                if (this.foundation) {
                    this.foundation.destroy();
                }
                this.previousPart = part;
                const labelElement = part.element;
                labelElement.classList.add('mdc-floating-label');
                const adapter = createAdapter$1(labelElement);
                this.foundation = new MDCFloatingLabelFoundation(adapter);
                this.foundation.init();
            }
            return this.render(label);
        }
        render(_label) {
            return this.foundation;
        }
    }
    const floatingLabel = e$1(FloatingLabelDirective);

    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var cssClasses$2 = {
        LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
        LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
    };

    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var MDCLineRippleFoundation = /** @class */ (function (_super) {
        __extends(MDCLineRippleFoundation, _super);
        function MDCLineRippleFoundation(adapter) {
            var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
            _this.transitionEndHandler = function (evt) {
                _this.handleTransitionEnd(evt);
            };
            return _this;
        }
        Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
            get: function () {
                return cssClasses$2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
            /**
             * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
             */
            get: function () {
                // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                return {
                    addClass: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    hasClass: function () { return false; },
                    setStyle: function () { return undefined; },
                    registerEventHandler: function () { return undefined; },
                    deregisterEventHandler: function () { return undefined; },
                };
                // tslint:enable:object-literal-sort-keys
            },
            enumerable: false,
            configurable: true
        });
        MDCLineRippleFoundation.prototype.init = function () {
            this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
        };
        MDCLineRippleFoundation.prototype.destroy = function () {
            this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
        };
        MDCLineRippleFoundation.prototype.activate = function () {
            this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
            this.adapter.addClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
        };
        MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
            this.adapter.setStyle('transform-origin', xCoordinate + "px center");
        };
        MDCLineRippleFoundation.prototype.deactivate = function () {
            this.adapter.addClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
        };
        MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
            // Wait for the line ripple to be either transparent or opaque
            // before emitting the animation end event
            var isDeactivating = this.adapter.hasClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
            if (evt.propertyName === 'opacity') {
                if (isDeactivating) {
                    this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
                    this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
                }
            }
        };
        return MDCLineRippleFoundation;
    }(MDCFoundation));

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    const createAdapter = (lineElement) => {
        return {
            addClass: (className) => lineElement.classList.add(className),
            removeClass: (className) => lineElement.classList.remove(className),
            hasClass: (className) => lineElement.classList.contains(className),
            setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
            registerEventHandler: (evtType, handler) => {
                lineElement.addEventListener(evtType, handler);
            },
            deregisterEventHandler: (evtType, handler) => {
                lineElement.removeEventListener(evtType, handler);
            },
        };
    };
    class LineRippleDirective extends i$2 {
        constructor(partInfo) {
            super(partInfo);
            this.previousPart = null;
            this.foundation = null;
            switch (partInfo.type) {
                case t$1.ATTRIBUTE:
                case t$1.PROPERTY:
                    return;
                default:
                    throw new Error('LineRipple only support attribute and property parts.');
            }
        }
        /**
         * There is no PropertyPart in Lit 2 so far. For more info see:
         * https://github.com/lit/lit/issues/1863
         */
        update(part, _params) {
            if (this.previousPart !== part) {
                if (this.foundation) {
                    this.foundation.destroy();
                }
                this.previousPart = part;
                const lineElement = part.element;
                lineElement.classList.add('mdc-line-ripple');
                const adapter = createAdapter(lineElement);
                this.foundation = new MDCLineRippleFoundation(adapter);
                this.foundation.init();
            }
            return this.render();
        }
        render() {
            return this.foundation;
        }
    }
    const lineRipple = e$1(LineRippleDirective);

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var strings$1 = {
        ARIA_CONTROLS: 'aria-controls',
        ARIA_DESCRIBEDBY: 'aria-describedby',
        INPUT_SELECTOR: '.mdc-text-field__input',
        LABEL_SELECTOR: '.mdc-floating-label',
        LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
        LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
        OUTLINE_SELECTOR: '.mdc-notched-outline',
        PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
        SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
        TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
    };
    var cssClasses$1 = {
        DISABLED: 'mdc-text-field--disabled',
        FOCUSED: 'mdc-text-field--focused',
        HELPER_LINE: 'mdc-text-field-helper-line',
        INVALID: 'mdc-text-field--invalid',
        LABEL_FLOATING: 'mdc-text-field--label-floating',
        NO_LABEL: 'mdc-text-field--no-label',
        OUTLINED: 'mdc-text-field--outlined',
        ROOT: 'mdc-text-field',
        TEXTAREA: 'mdc-text-field--textarea',
        WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
        WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
        WITH_INTERNAL_COUNTER: 'mdc-text-field--with-internal-counter',
    };
    var numbers = {
        LABEL_SCALE: 0.75,
    };
    /**
     * Whitelist based off of
     * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
     * under the "Validation-related attributes" section.
     */
    var VALIDATION_ATTR_WHITELIST = [
        'pattern',
        'min',
        'max',
        'required',
        'step',
        'minlength',
        'maxlength',
    ];
    /**
     * Label should always float for these types as they show some UI even if value
     * is empty.
     */
    var ALWAYS_FLOAT_TYPES = [
        'color',
        'date',
        'datetime-local',
        'month',
        'range',
        'time',
        'week',
    ];

    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
    var INTERACTION_EVENTS = ['click', 'keydown'];
    var MDCTextFieldFoundation = /** @class */ (function (_super) {
        __extends(MDCTextFieldFoundation, _super);
        /**
         * @param adapter
         * @param foundationMap Map from subcomponent names to their subfoundations.
         */
        function MDCTextFieldFoundation(adapter, foundationMap) {
            if (foundationMap === void 0) { foundationMap = {}; }
            var _this = _super.call(this, __assign(__assign({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;
            _this.isFocused = false;
            _this.receivedUserInput = false;
            _this.valid = true;
            _this.useNativeValidation = true;
            _this.validateOnValueChange = true;
            _this.helperText = foundationMap.helperText;
            _this.characterCounter = foundationMap.characterCounter;
            _this.leadingIcon = foundationMap.leadingIcon;
            _this.trailingIcon = foundationMap.trailingIcon;
            _this.inputFocusHandler = function () {
                _this.activateFocus();
            };
            _this.inputBlurHandler = function () {
                _this.deactivateFocus();
            };
            _this.inputInputHandler = function () {
                _this.handleInput();
            };
            _this.setPointerXOffset = function (evt) {
                _this.setTransformOrigin(evt);
            };
            _this.textFieldInteractionHandler = function () {
                _this.handleTextFieldInteraction();
            };
            _this.validationAttributeChangeHandler = function (attributesList) {
                _this.handleValidationAttributeChange(attributesList);
            };
            return _this;
        }
        Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
            get: function () {
                return cssClasses$1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation, "strings", {
            get: function () {
                return strings$1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation, "numbers", {
            get: function () {
                return numbers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat", {
            get: function () {
                var type = this.getNativeInput().type;
                return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
            get: function () {
                return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() ||
                    this.isBadInput();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
            get: function () {
                return !this.isFocused && !this.isValid() && !!this.getValue();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
            /**
             * See {@link MDCTextFieldAdapter} for typing information on parameters and
             * return types.
             */
            get: function () {
                // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                return {
                    addClass: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    hasClass: function () { return true; },
                    setInputAttr: function () { return undefined; },
                    removeInputAttr: function () { return undefined; },
                    registerTextFieldInteractionHandler: function () { return undefined; },
                    deregisterTextFieldInteractionHandler: function () { return undefined; },
                    registerInputInteractionHandler: function () { return undefined; },
                    deregisterInputInteractionHandler: function () { return undefined; },
                    registerValidationAttributeChangeHandler: function () {
                        return new MutationObserver(function () { return undefined; });
                    },
                    deregisterValidationAttributeChangeHandler: function () { return undefined; },
                    getNativeInput: function () { return null; },
                    isFocused: function () { return false; },
                    activateLineRipple: function () { return undefined; },
                    deactivateLineRipple: function () { return undefined; },
                    setLineRippleTransformOrigin: function () { return undefined; },
                    shakeLabel: function () { return undefined; },
                    floatLabel: function () { return undefined; },
                    setLabelRequired: function () { return undefined; },
                    hasLabel: function () { return false; },
                    getLabelWidth: function () { return 0; },
                    hasOutline: function () { return false; },
                    notchOutline: function () { return undefined; },
                    closeOutline: function () { return undefined; },
                };
                // tslint:enable:object-literal-sort-keys
            },
            enumerable: false,
            configurable: true
        });
        MDCTextFieldFoundation.prototype.init = function () {
            var e_1, _a, e_2, _b;
            if (this.adapter.hasLabel() && this.getNativeInput().required) {
                this.adapter.setLabelRequired(true);
            }
            if (this.adapter.isFocused()) {
                this.inputFocusHandler();
            }
            else if (this.adapter.hasLabel() && this.shouldFloat) {
                this.notchOutline(true);
                this.adapter.floatLabel(true);
                this.styleFloating(true);
            }
            this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler);
            this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler);
            this.adapter.registerInputInteractionHandler('input', this.inputInputHandler);
            try {
                for (var POINTERDOWN_EVENTS_1 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
                    var evtType = POINTERDOWN_EVENTS_1_1.value;
                    this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return)) _a.call(POINTERDOWN_EVENTS_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                    var evtType = INTERACTION_EVENTS_1_1.value;
                    this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return)) _b.call(INTERACTION_EVENTS_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.validationObserver =
                this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
            this.setcharacterCounter(this.getValue().length);
        };
        MDCTextFieldFoundation.prototype.destroy = function () {
            var e_3, _a, e_4, _b;
            this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler);
            this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler);
            this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler);
            try {
                for (var POINTERDOWN_EVENTS_2 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
                    var evtType = POINTERDOWN_EVENTS_2_1.value;
                    this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return)) _a.call(POINTERDOWN_EVENTS_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            try {
                for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                    var evtType = INTERACTION_EVENTS_2_1.value;
                    this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return)) _b.call(INTERACTION_EVENTS_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
            this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
        };
        /**
         * Handles user interactions with the Text Field.
         */
        MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
            var nativeInput = this.adapter.getNativeInput();
            if (nativeInput && nativeInput.disabled) {
                return;
            }
            this.receivedUserInput = true;
        };
        /**
         * Handles validation attribute changes
         */
        MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
            var _this = this;
            attributesList.some(function (attributeName) {
                if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                    _this.styleValidity(true);
                    _this.adapter.setLabelRequired(_this.getNativeInput().required);
                    return true;
                }
                return false;
            });
            if (attributesList.indexOf('maxlength') > -1) {
                this.setcharacterCounter(this.getValue().length);
            }
        };
        /**
         * Opens/closes the notched outline.
         */
        MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
            if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
                return;
            }
            if (openNotch) {
                var labelWidth = this.adapter.getLabelWidth() * numbers.LABEL_SCALE;
                this.adapter.notchOutline(labelWidth);
            }
            else {
                this.adapter.closeOutline();
            }
        };
        /**
         * Activates the text field focus state.
         */
        MDCTextFieldFoundation.prototype.activateFocus = function () {
            this.isFocused = true;
            this.styleFocused(this.isFocused);
            this.adapter.activateLineRipple();
            if (this.adapter.hasLabel()) {
                this.notchOutline(this.shouldFloat);
                this.adapter.floatLabel(this.shouldFloat);
                this.styleFloating(this.shouldFloat);
                this.adapter.shakeLabel(this.shouldShake);
            }
            if (this.helperText &&
                (this.helperText.isPersistent() || !this.helperText.isValidation() ||
                    !this.valid)) {
                this.helperText.showToScreenReader();
            }
        };
        /**
         * Sets the line ripple's transform origin, so that the line ripple activate
         * animation will animate out from the user's click location.
         */
        MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
            if (this.isDisabled() || this.adapter.hasOutline()) {
                return;
            }
            var touches = evt.touches;
            var targetEvent = touches ? touches[0] : evt;
            var targetClientRect = targetEvent.target.getBoundingClientRect();
            var normalizedX = targetEvent.clientX - targetClientRect.left;
            this.adapter.setLineRippleTransformOrigin(normalizedX);
        };
        /**
         * Handles input change of text input and text area.
         */
        MDCTextFieldFoundation.prototype.handleInput = function () {
            this.autoCompleteFocus();
            this.setcharacterCounter(this.getValue().length);
        };
        /**
         * Activates the Text Field's focus state in cases when the input value
         * changes without user input (e.g. programmatically).
         */
        MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
            if (!this.receivedUserInput) {
                this.activateFocus();
            }
        };
        /**
         * Deactivates the Text Field's focus state.
         */
        MDCTextFieldFoundation.prototype.deactivateFocus = function () {
            this.isFocused = false;
            this.adapter.deactivateLineRipple();
            var isValid = this.isValid();
            this.styleValidity(isValid);
            this.styleFocused(this.isFocused);
            if (this.adapter.hasLabel()) {
                this.notchOutline(this.shouldFloat);
                this.adapter.floatLabel(this.shouldFloat);
                this.styleFloating(this.shouldFloat);
                this.adapter.shakeLabel(this.shouldShake);
            }
            if (!this.shouldFloat) {
                this.receivedUserInput = false;
            }
        };
        MDCTextFieldFoundation.prototype.getValue = function () {
            return this.getNativeInput().value;
        };
        /**
         * @param value The value to set on the input Element.
         */
        MDCTextFieldFoundation.prototype.setValue = function (value) {
            // Prevent Safari from moving the caret to the end of the input when the
            // value has not changed.
            if (this.getValue() !== value) {
                this.getNativeInput().value = value;
            }
            this.setcharacterCounter(value.length);
            if (this.validateOnValueChange) {
                var isValid = this.isValid();
                this.styleValidity(isValid);
            }
            if (this.adapter.hasLabel()) {
                this.notchOutline(this.shouldFloat);
                this.adapter.floatLabel(this.shouldFloat);
                this.styleFloating(this.shouldFloat);
                if (this.validateOnValueChange) {
                    this.adapter.shakeLabel(this.shouldShake);
                }
            }
        };
        /**
         * @return The custom validity state, if set; otherwise, the result of a
         *     native validity check.
         */
        MDCTextFieldFoundation.prototype.isValid = function () {
            return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
        };
        /**
         * @param isValid Sets the custom validity state of the Text Field.
         */
        MDCTextFieldFoundation.prototype.setValid = function (isValid) {
            this.valid = isValid;
            this.styleValidity(isValid);
            var shouldShake = !isValid && !this.isFocused && !!this.getValue();
            if (this.adapter.hasLabel()) {
                this.adapter.shakeLabel(shouldShake);
            }
        };
        /**
         * @param shouldValidate Whether or not validity should be updated on
         *     value change.
         */
        MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {
            this.validateOnValueChange = shouldValidate;
        };
        /**
         * @return Whether or not validity should be updated on value change. `true`
         *     by default.
         */
        MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {
            return this.validateOnValueChange;
        };
        /**
         * Enables or disables the use of native validation. Use this for custom
         * validation.
         * @param useNativeValidation Set this to false to ignore native input
         *     validation.
         */
        MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
            this.useNativeValidation = useNativeValidation;
        };
        MDCTextFieldFoundation.prototype.isDisabled = function () {
            return this.getNativeInput().disabled;
        };
        /**
         * @param disabled Sets the text-field disabled or enabled.
         */
        MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
            this.getNativeInput().disabled = disabled;
            this.styleDisabled(disabled);
        };
        /**
         * @param content Sets the content of the helper text.
         */
        MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
            if (this.helperText) {
                this.helperText.setContent(content);
            }
        };
        /**
         * Sets the aria label of the leading icon.
         */
        MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
            if (this.leadingIcon) {
                this.leadingIcon.setAriaLabel(label);
            }
        };
        /**
         * Sets the text content of the leading icon.
         */
        MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
            if (this.leadingIcon) {
                this.leadingIcon.setContent(content);
            }
        };
        /**
         * Sets the aria label of the trailing icon.
         */
        MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
            if (this.trailingIcon) {
                this.trailingIcon.setAriaLabel(label);
            }
        };
        /**
         * Sets the text content of the trailing icon.
         */
        MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
            if (this.trailingIcon) {
                this.trailingIcon.setContent(content);
            }
        };
        /**
         * Sets character counter values that shows characters used and the total
         * character limit.
         */
        MDCTextFieldFoundation.prototype.setcharacterCounter = function (currentLength) {
            if (!this.characterCounter) {
                return;
            }
            var maxLength = this.getNativeInput().maxLength;
            if (maxLength === -1) {
                throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
            }
            this.characterCounter.setCounterValue(currentLength, maxLength);
        };
        /**
         * @return True if the Text Field input fails in converting the user-supplied
         *     value.
         */
        MDCTextFieldFoundation.prototype.isBadInput = function () {
            // The badInput property is not supported in IE 11 💩.
            return this.getNativeInput().validity.badInput || false;
        };
        /**
         * @return The result of native validity checking (ValidityState.valid).
         */
        MDCTextFieldFoundation.prototype.isNativeInputValid = function () {
            return this.getNativeInput().validity.valid;
        };
        /**
         * Styles the component based on the validity state.
         */
        MDCTextFieldFoundation.prototype.styleValidity = function (isValid) {
            var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
            if (isValid) {
                this.adapter.removeClass(INVALID);
            }
            else {
                this.adapter.addClass(INVALID);
            }
            if (this.helperText) {
                this.helperText.setValidity(isValid);
                // We dynamically set or unset aria-describedby for validation helper text
                // only, based on whether the field is valid
                var helperTextValidation = this.helperText.isValidation();
                if (!helperTextValidation) {
                    return;
                }
                var helperTextVisible = this.helperText.isVisible();
                var helperTextId = this.helperText.getId();
                if (helperTextVisible && helperTextId) {
                    this.adapter.setInputAttr(strings$1.ARIA_DESCRIBEDBY, helperTextId);
                }
                else {
                    this.adapter.removeInputAttr(strings$1.ARIA_DESCRIBEDBY);
                }
            }
        };
        /**
         * Styles the component based on the focused state.
         */
        MDCTextFieldFoundation.prototype.styleFocused = function (isFocused) {
            var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
            if (isFocused) {
                this.adapter.addClass(FOCUSED);
            }
            else {
                this.adapter.removeClass(FOCUSED);
            }
        };
        /**
         * Styles the component based on the disabled state.
         */
        MDCTextFieldFoundation.prototype.styleDisabled = function (isDisabled) {
            var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
            if (isDisabled) {
                this.adapter.addClass(DISABLED);
                this.adapter.removeClass(INVALID);
            }
            else {
                this.adapter.removeClass(DISABLED);
            }
            if (this.leadingIcon) {
                this.leadingIcon.setDisabled(isDisabled);
            }
            if (this.trailingIcon) {
                this.trailingIcon.setDisabled(isDisabled);
            }
        };
        /**
         * Styles the component based on the label floating state.
         */
        MDCTextFieldFoundation.prototype.styleFloating = function (isFloating) {
            var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;
            if (isFloating) {
                this.adapter.addClass(LABEL_FLOATING);
            }
            else {
                this.adapter.removeClass(LABEL_FLOATING);
            }
        };
        /**
         * @return The native text input element from the host environment, or an
         *     object with the same shape for unit tests.
         */
        MDCTextFieldFoundation.prototype.getNativeInput = function () {
            // this.adapter may be undefined in foundation unit tests. This happens when
            // testdouble is creating a mock object and invokes the
            // shouldShake/shouldFloat getters (which in turn call getValue(), which
            // calls this method) before init() has been called from the MDCTextField
            // constructor. To work around that issue, we return a dummy object.
            var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
            return nativeInput || {
                disabled: false,
                maxLength: -1,
                required: false,
                type: 'input',
                validity: {
                    badInput: false,
                    valid: true,
                },
                value: '',
            };
        };
        return MDCTextFieldFoundation;
    }(MDCFoundation));
    // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
    var MDCTextFieldFoundation$1 = MDCTextFieldFoundation;

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const r$1=o=>void 0===o.strings,f$1={},s$1=(o,i=f$1)=>o._$AH=i;

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const l$1=e$1(class extends i$2{constructor(r){if(super(r),r.type!==t$1.PROPERTY&&r.type!==t$1.ATTRIBUTE&&r.type!==t$1.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!r$1(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t]){if(t===b$1||t===T$1)return t;const o=i.element,l=i.name;if(i.type===t$1.PROPERTY){if(t===o[l])return b$1}else if(i.type===t$1.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return b$1}else if(i.type===t$1.ATTRIBUTE&&o.getAttribute(l)===t+"")return b$1;return s$1(i),t}});

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    const passiveEvents = ['touchstart', 'touchmove', 'scroll', 'mousewheel'];
    const createValidityObj = (customValidity = {}) => {
        /*
         * We need to make ValidityState an object because it is readonly and
         * we cannot use the spread operator. Also, we don't export
         * `CustomValidityState` because it is a leaky implementation and the user
         * already has access to `ValidityState` in lib.dom.ts. Also an interface
         * {a: Type} can be casted to {readonly a: Type} so passing any object
         * should be fine.
         */
        const objectifiedCustomValidity = {};
        // eslint-disable-next-line guard-for-in
        for (const propName in customValidity) {
            /*
             * Casting is needed because ValidityState's props are all readonly and
             * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
             * interface is the same as ValidityState (but not readonly), but the
             * function signature casts the output to ValidityState (thus readonly).
             */
            objectifiedCustomValidity[propName] =
                customValidity[propName];
        }
        return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
    };
    /** @soyCompatible */
    class TextFieldBase extends FormElement {
        constructor() {
            super(...arguments);
            this.mdcFoundationClass = MDCTextFieldFoundation$1;
            this.value = '';
            this.type = 'text';
            this.placeholder = '';
            this.label = '';
            this.icon = '';
            this.iconTrailing = '';
            this.disabled = false;
            this.required = false;
            this.minLength = -1;
            this.maxLength = -1;
            this.outlined = false;
            this.helper = '';
            this.validateOnInitialRender = false;
            this.validationMessage = '';
            this.autoValidate = false;
            this.pattern = '';
            this.min = '';
            this.max = '';
            /**
             * step can be a number or the keyword "any".
             *
             * Use `String` typing to pass down the value as a string and let the native
             * input cast internally as needed.
             */
            this.step = null;
            this.size = null;
            this.helperPersistent = false;
            this.charCounter = false;
            this.endAligned = false;
            this.prefix = '';
            this.suffix = '';
            this.name = '';
            this.readOnly = false;
            this.autocapitalize = '';
            this.outlineOpen = false;
            this.outlineWidth = 0;
            this.isUiValid = true;
            this.focused = false;
            this._validity = createValidityObj();
            this.validityTransform = null;
        }
        get validity() {
            this._checkValidity(this.value);
            return this._validity;
        }
        get willValidate() {
            return this.formElement.willValidate;
        }
        get selectionStart() {
            return this.formElement.selectionStart;
        }
        get selectionEnd() {
            return this.formElement.selectionEnd;
        }
        focus() {
            const focusEvt = new CustomEvent('focus');
            this.formElement.dispatchEvent(focusEvt);
            this.formElement.focus();
        }
        blur() {
            const blurEvt = new CustomEvent('blur');
            this.formElement.dispatchEvent(blurEvt);
            this.formElement.blur();
        }
        select() {
            this.formElement.select();
        }
        setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
            this.formElement.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
        }
        update(changedProperties) {
            if (changedProperties.has('autoValidate') && this.mdcFoundation) {
                this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
            }
            if (changedProperties.has('value') && typeof this.value !== 'string') {
                this.value = `${this.value}`;
            }
            super.update(changedProperties);
        }
        setFormData(formData) {
            if (this.name) {
                formData.append(this.name, this.value);
            }
        }
        /** @soyTemplate */
        render() {
            const shouldRenderCharCounter = this.charCounter && this.maxLength !== -1;
            const shouldRenderHelperText = !!this.helper || !!this.validationMessage || shouldRenderCharCounter;
            /** @classMap */
            const classes = {
                'mdc-text-field--disabled': this.disabled,
                'mdc-text-field--no-label': !this.label,
                'mdc-text-field--filled': !this.outlined,
                'mdc-text-field--outlined': this.outlined,
                'mdc-text-field--with-leading-icon': this.icon,
                'mdc-text-field--with-trailing-icon': this.iconTrailing,
                'mdc-text-field--end-aligned': this.endAligned,
            };
            return p$1 `
      <label class="mdc-text-field ${o$1(classes)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(shouldRenderHelperText)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
        }
        updated(changedProperties) {
            if (changedProperties.has('value') &&
                changedProperties.get('value') !== undefined) {
                this.mdcFoundation.setValue(this.value);
                if (this.autoValidate) {
                    this.reportValidity();
                }
            }
        }
        /** @soyTemplate */
        renderRipple() {
            return this.outlined ? '' : p$1 `
      <span class="mdc-text-field__ripple"></span>
    `;
        }
        /** @soyTemplate */
        renderOutline() {
            return !this.outlined ? '' : p$1 `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;
        }
        /** @soyTemplate */
        renderLabel() {
            return !this.label ?
                '' :
                p$1 `
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;
        }
        /** @soyTemplate */
        renderLeadingIcon() {
            return this.icon ? this.renderIcon(this.icon) : '';
        }
        /** @soyTemplate */
        renderTrailingIcon() {
            return this.iconTrailing ? this.renderIcon(this.iconTrailing, true) : '';
        }
        /** @soyTemplate */
        renderIcon(icon, isTrailingIcon = false) {
            /** @classMap */
            const classes = {
                'mdc-text-field__icon--leading': !isTrailingIcon,
                'mdc-text-field__icon--trailing': isTrailingIcon
            };
            return p$1 `<i class="material-icons mdc-text-field__icon ${o$1(classes)}">${icon}</i>`;
        }
        /** @soyTemplate */
        renderPrefix() {
            return this.prefix ? this.renderAffix(this.prefix) : '';
        }
        /** @soyTemplate */
        renderSuffix() {
            return this.suffix ? this.renderAffix(this.suffix, true) : '';
        }
        /** @soyTemplate */
        renderAffix(content, isSuffix = false) {
            /** @classMap */
            const classes = {
                'mdc-text-field__affix--prefix': !isSuffix,
                'mdc-text-field__affix--suffix': isSuffix
            };
            return p$1 `<span class="mdc-text-field__affix ${o$1(classes)}">
        ${content}</span>`;
        }
        /** @soyTemplate */
        renderInput(shouldRenderHelperText) {
            const minOrUndef = this.minLength === -1 ? undefined : this.minLength;
            const maxOrUndef = this.maxLength === -1 ? undefined : this.maxLength;
            const autocapitalizeOrUndef = this.autocapitalize ?
                this.autocapitalize :
                undefined;
            const showValidationMessage = this.validationMessage && !this.isUiValid;
            const ariaLabelledbyOrUndef = !!this.label ? 'label' : undefined;
            const ariaControlsOrUndef = shouldRenderHelperText ? 'helper-text' : undefined;
            const ariaDescribedbyOrUndef = this.focused || this.helperPersistent || showValidationMessage ?
                'helper-text' :
                undefined;
            // TODO: live() directive needs casting for lit-analyzer
            // https://github.com/runem/lit-analyzer/pull/91/files
            // TODO: lit-analyzer labels min/max as (number|string) instead of string
            return p$1 `
      <input
          aria-labelledby=${l$2(ariaLabelledbyOrUndef)}
          aria-controls="${l$2(ariaControlsOrUndef)}"
          aria-describedby="${l$2(ariaDescribedbyOrUndef)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${l$1(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${l$2(minOrUndef)}"
          maxlength="${l$2(maxOrUndef)}"
          pattern="${l$2(this.pattern ? this.pattern : undefined)}"
          min="${l$2(this.min === '' ? undefined : this.min)}"
          max="${l$2(this.max === '' ? undefined : this.max)}"
          step="${l$2(this.step === null ? undefined : this.step)}"
          size="${l$2(this.size === null ? undefined : this.size)}"
          name="${l$2(this.name === '' ? undefined : this.name)}"
          inputmode="${l$2(this.inputMode)}"
          autocapitalize="${l$2(autocapitalizeOrUndef)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
        }
        /** @soyTemplate */
        renderLineRipple() {
            return this.outlined ?
                '' :
                p$1 `
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;
        }
        /** @soyTemplate */
        renderHelperText(shouldRenderHelperText, shouldRenderCharCounter) {
            const showValidationMessage = this.validationMessage && !this.isUiValid;
            /** @classMap */
            const classes = {
                'mdc-text-field-helper-text--persistent': this.helperPersistent,
                'mdc-text-field-helper-text--validation-msg': showValidationMessage,
            };
            const ariaHiddenOrUndef = this.focused || this.helperPersistent || showValidationMessage ?
                undefined :
                'true';
            const helperText = showValidationMessage ? this.validationMessage : this.helper;
            return !shouldRenderHelperText ? '' : p$1 `
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${l$2(ariaHiddenOrUndef)}"
             class="mdc-text-field-helper-text ${o$1(classes)}"
             >${helperText}</div>
        ${this.renderCharCounter(shouldRenderCharCounter)}
      </div>`;
        }
        /** @soyTemplate */
        renderCharCounter(shouldRenderCharCounter) {
            const length = Math.min(this.value.length, this.maxLength);
            return !shouldRenderCharCounter ? '' : p$1 `
      <span class="mdc-text-field-character-counter"
            >${length} / ${this.maxLength}</span>`;
        }
        onInputFocus() {
            this.focused = true;
        }
        onInputBlur() {
            this.focused = false;
            this.reportValidity();
        }
        checkValidity() {
            const isValid = this._checkValidity(this.value);
            if (!isValid) {
                const invalidEvent = new Event('invalid', { bubbles: false, cancelable: true });
                this.dispatchEvent(invalidEvent);
            }
            return isValid;
        }
        reportValidity() {
            const isValid = this.checkValidity();
            this.mdcFoundation.setValid(isValid);
            this.isUiValid = isValid;
            return isValid;
        }
        _checkValidity(value) {
            const nativeValidity = this.formElement.validity;
            let validity = createValidityObj(nativeValidity);
            if (this.validityTransform) {
                const customValidity = this.validityTransform(value, validity);
                validity = Object.assign(Object.assign({}, validity), customValidity);
                this.mdcFoundation.setUseNativeValidation(false);
            }
            else {
                this.mdcFoundation.setUseNativeValidation(true);
            }
            this._validity = validity;
            return this._validity.valid;
        }
        setCustomValidity(message) {
            this.validationMessage = message;
            this.formElement.setCustomValidity(message);
        }
        handleInputChange() {
            this.value = this.formElement.value;
        }
        createAdapter() {
            return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
        }
        getRootAdapterMethods() {
            return Object.assign({ registerTextFieldInteractionHandler: (evtType, handler) => this.addEventListener(evtType, handler), deregisterTextFieldInteractionHandler: (evtType, handler) => this.removeEventListener(evtType, handler), registerValidationAttributeChangeHandler: (handler) => {
                    const getAttributesList = (mutationsList) => {
                        return mutationsList.map((mutation) => mutation.attributeName)
                            .filter((attributeName) => attributeName);
                    };
                    const observer = new MutationObserver((mutationsList) => {
                        handler(getAttributesList(mutationsList));
                    });
                    const config = { attributes: true };
                    observer.observe(this.formElement, config);
                    return observer;
                }, deregisterValidationAttributeChangeHandler: (observer) => observer.disconnect() }, addHasRemoveClass(this.mdcRoot));
        }
        getInputAdapterMethods() {
            return {
                getNativeInput: () => this.formElement,
                // since HelperTextFoundation is not used, aria-describedby a11y logic
                // is implemented in render method instead of these adapter methods
                setInputAttr: () => undefined,
                removeInputAttr: () => undefined,
                isFocused: () => this.shadowRoot ?
                    this.shadowRoot.activeElement === this.formElement :
                    false,
                registerInputInteractionHandler: (evtType, handler) => this.formElement.addEventListener(evtType, handler, { passive: evtType in passiveEvents }),
                deregisterInputInteractionHandler: (evtType, handler) => this.formElement.removeEventListener(evtType, handler),
            };
        }
        getLabelAdapterMethods() {
            return {
                floatLabel: (shouldFloat) => this.labelElement &&
                    this.labelElement.floatingLabelFoundation.float(shouldFloat),
                getLabelWidth: () => {
                    return this.labelElement ?
                        this.labelElement.floatingLabelFoundation.getWidth() :
                        0;
                },
                hasLabel: () => Boolean(this.labelElement),
                shakeLabel: (shouldShake) => this.labelElement &&
                    this.labelElement.floatingLabelFoundation.shake(shouldShake),
                setLabelRequired: (isRequired) => {
                    if (this.labelElement) {
                        this.labelElement.floatingLabelFoundation.setRequired(isRequired);
                    }
                },
            };
        }
        getLineRippleAdapterMethods() {
            return {
                activateLineRipple: () => {
                    if (this.lineRippleElement) {
                        this.lineRippleElement.lineRippleFoundation.activate();
                    }
                },
                deactivateLineRipple: () => {
                    if (this.lineRippleElement) {
                        this.lineRippleElement.lineRippleFoundation.deactivate();
                    }
                },
                setLineRippleTransformOrigin: (normalizedX) => {
                    if (this.lineRippleElement) {
                        this.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
                    }
                },
            };
        }
        // tslint:disable:ban-ts-ignore
        async getUpdateComplete() {
            var _a;
            // @ts-ignore
            const result = await super.getUpdateComplete();
            await ((_a = this.outlineElement) === null || _a === void 0 ? void 0 : _a.updateComplete);
            return result;
        }
        // tslint:enable:ban-ts-ignore
        firstUpdated() {
            var _a;
            super.firstUpdated();
            this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
            if (this.validateOnInitialRender) {
                this.reportValidity();
            }
            // wait for the outline element to render to update the notch width
            (_a = this.outlineElement) === null || _a === void 0 ? void 0 : _a.updateComplete.then(() => {
                var _a;
                // `foundation.notchOutline()` assumes the label isn't floating and
                // multiplies by a constant, but the label is already is floating at this
                // stage, therefore directly set the outline width to the label width
                this.outlineWidth =
                    ((_a = this.labelElement) === null || _a === void 0 ? void 0 : _a.floatingLabelFoundation.getWidth()) || 0;
            });
        }
        getOutlineAdapterMethods() {
            return {
                closeOutline: () => this.outlineElement && (this.outlineOpen = false),
                hasOutline: () => Boolean(this.outlineElement),
                notchOutline: (labelWidth) => {
                    const outlineElement = this.outlineElement;
                    if (outlineElement && !this.outlineOpen) {
                        this.outlineWidth = labelWidth;
                        this.outlineOpen = true;
                    }
                }
            };
        }
        async layout() {
            await this.updateComplete;
            const labelElement = this.labelElement;
            if (!labelElement) {
                this.outlineOpen = false;
                return;
            }
            const shouldFloat = !!this.label && !!this.value;
            labelElement.floatingLabelFoundation.float(shouldFloat);
            if (!this.outlined) {
                return;
            }
            this.outlineOpen = shouldFloat;
            await this.updateComplete;
            /* When the textfield automatically notches due to a value and label
             * being defined, the textfield may be set to `display: none` by the user.
             * this means that the notch is of size 0px. We provide this function so
             * that the user may manually resize the notch to the floated label's
             * width.
             */
            const labelWidth = labelElement.floatingLabelFoundation.getWidth();
            if (this.outlineOpen) {
                this.outlineWidth = labelWidth;
                await this.updateComplete;
            }
        }
    }
    __decorate([
        i$3('.mdc-text-field')
    ], TextFieldBase.prototype, "mdcRoot", void 0);
    __decorate([
        i$3('input')
    ], TextFieldBase.prototype, "formElement", void 0);
    __decorate([
        i$3('.mdc-floating-label')
    ], TextFieldBase.prototype, "labelElement", void 0);
    __decorate([
        i$3('.mdc-line-ripple')
    ], TextFieldBase.prototype, "lineRippleElement", void 0);
    __decorate([
        i$3('mwc-notched-outline')
    ], TextFieldBase.prototype, "outlineElement", void 0);
    __decorate([
        i$3('.mdc-notched-outline__notch')
    ], TextFieldBase.prototype, "notchElement", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "value", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "type", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "placeholder", void 0);
    __decorate([
        e$4({ type: String }),
        observer(function (_newVal, oldVal) {
            if (oldVal !== undefined && this.label !== oldVal) {
                this.layout();
            }
        })
    ], TextFieldBase.prototype, "label", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "icon", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "iconTrailing", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TextFieldBase.prototype, "disabled", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TextFieldBase.prototype, "required", void 0);
    __decorate([
        e$4({ type: Number })
    ], TextFieldBase.prototype, "minLength", void 0);
    __decorate([
        e$4({ type: Number })
    ], TextFieldBase.prototype, "maxLength", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true }),
        observer(function (_newVal, oldVal) {
            if (oldVal !== undefined && this.outlined !== oldVal) {
                this.layout();
            }
        })
    ], TextFieldBase.prototype, "outlined", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "helper", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TextFieldBase.prototype, "validateOnInitialRender", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "validationMessage", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TextFieldBase.prototype, "autoValidate", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "pattern", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "min", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "max", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "step", void 0);
    __decorate([
        e$4({ type: Number })
    ], TextFieldBase.prototype, "size", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TextFieldBase.prototype, "helperPersistent", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TextFieldBase.prototype, "charCounter", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TextFieldBase.prototype, "endAligned", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "prefix", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "suffix", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "name", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "inputMode", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TextFieldBase.prototype, "readOnly", void 0);
    __decorate([
        e$4({ type: String })
    ], TextFieldBase.prototype, "autocapitalize", void 0);
    __decorate([
        t$2()
    ], TextFieldBase.prototype, "outlineOpen", void 0);
    __decorate([
        t$2()
    ], TextFieldBase.prototype, "outlineWidth", void 0);
    __decorate([
        t$2()
    ], TextFieldBase.prototype, "isUiValid", void 0);
    __decorate([
        t$2()
    ], TextFieldBase.prototype, "focused", void 0);
    __decorate([
        e$3({ passive: true })
    ], TextFieldBase.prototype, "handleInputChange", null);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles$3 = r$4 `.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    let TextField = class TextField extends TextFieldBase {
    };
    TextField.styles = [styles$3];
    TextField = __decorate([
        n$1('mwc-textfield')
    ], TextField);

    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var cssClasses = {
        ROOT: 'mdc-form-field',
    };
    var strings = {
        LABEL_SELECTOR: '.mdc-form-field > label',
    };

    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    var MDCFormFieldFoundation = /** @class */ (function (_super) {
        __extends(MDCFormFieldFoundation, _super);
        function MDCFormFieldFoundation(adapter) {
            var _this = _super.call(this, __assign(__assign({}, MDCFormFieldFoundation.defaultAdapter), adapter)) || this;
            _this.click = function () {
                _this.handleClick();
            };
            return _this;
        }
        Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
            get: function () {
                return cssClasses;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCFormFieldFoundation, "strings", {
            get: function () {
                return strings;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
            get: function () {
                return {
                    activateInputRipple: function () { return undefined; },
                    deactivateInputRipple: function () { return undefined; },
                    deregisterInteractionHandler: function () { return undefined; },
                    registerInteractionHandler: function () { return undefined; },
                };
            },
            enumerable: false,
            configurable: true
        });
        MDCFormFieldFoundation.prototype.init = function () {
            this.adapter.registerInteractionHandler('click', this.click);
        };
        MDCFormFieldFoundation.prototype.destroy = function () {
            this.adapter.deregisterInteractionHandler('click', this.click);
        };
        MDCFormFieldFoundation.prototype.handleClick = function () {
            var _this = this;
            this.adapter.activateInputRipple();
            requestAnimationFrame(function () {
                _this.adapter.deactivateInputRipple();
            });
        };
        return MDCFormFieldFoundation;
    }(MDCFoundation));
    // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
    var MDCFormFieldFoundation$1 = MDCFormFieldFoundation;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    class FormfieldBase extends BaseElement {
        constructor() {
            super(...arguments);
            this.alignEnd = false;
            this.spaceBetween = false;
            this.nowrap = false;
            this.label = '';
            this.mdcFoundationClass = MDCFormFieldFoundation$1;
        }
        createAdapter() {
            return {
                registerInteractionHandler: (type, handler) => {
                    this.labelEl.addEventListener(type, handler);
                },
                deregisterInteractionHandler: (type, handler) => {
                    this.labelEl.removeEventListener(type, handler);
                },
                activateInputRipple: async () => {
                    const input = this.input;
                    if (input instanceof FormElement) {
                        const ripple = await input.ripple;
                        if (ripple) {
                            ripple.startPress();
                        }
                    }
                },
                deactivateInputRipple: async () => {
                    const input = this.input;
                    if (input instanceof FormElement) {
                        const ripple = await input.ripple;
                        if (ripple) {
                            ripple.endPress();
                        }
                    }
                },
            };
        }
        get input() {
            var _a, _b;
            return (_b = (_a = this.slottedInputs) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
        }
        render() {
            const classes = {
                'mdc-form-field--align-end': this.alignEnd,
                'mdc-form-field--space-between': this.spaceBetween,
                'mdc-form-field--nowrap': this.nowrap
            };
            return p$1 `
      <div class="mdc-form-field ${o$1(classes)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`;
        }
        click() {
            this._labelClick();
        }
        _labelClick() {
            const input = this.input;
            if (input) {
                input.focus();
                input.click();
            }
        }
    }
    __decorate([
        e$4({ type: Boolean })
    ], FormfieldBase.prototype, "alignEnd", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], FormfieldBase.prototype, "spaceBetween", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], FormfieldBase.prototype, "nowrap", void 0);
    __decorate([
        e$4({ type: String }),
        observer(async function (label) {
            var _a;
            (_a = this.input) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-label', label);
        })
    ], FormfieldBase.prototype, "label", void 0);
    __decorate([
        i$3('.mdc-form-field')
    ], FormfieldBase.prototype, "mdcRoot", void 0);
    __decorate([
        o$2('', true, '*')
    ], FormfieldBase.prototype, "slottedInputs", void 0);
    __decorate([
        i$3('label')
    ], FormfieldBase.prototype, "labelEl", void 0);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles$2 = r$4 `.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    let Formfield = class Formfield extends FormfieldBase {
    };
    Formfield.styles = [styles$2];
    Formfield = __decorate([
        n$1('mwc-formfield')
    ], Formfield);

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    class CheckboxBase extends FormElement {
        constructor() {
            super(...arguments);
            this.checked = false;
            this.indeterminate = false;
            this.disabled = false;
            this.name = '';
            this.value = 'on';
            /**
             * Touch target extends beyond visual boundary of a component by default.
             * Set to `true` to remove touch target added to the component.
             * @see https://material.io/design/usability/accessibility.html
             */
            this.reducedTouchTarget = false;
            this.animationClass = '';
            this.shouldRenderRipple = false;
            this.focused = false;
            // MDC Foundation is unused
            this.mdcFoundationClass = undefined;
            this.mdcFoundation = undefined;
            this.rippleElement = null;
            this.rippleHandlers = new RippleHandlers(() => {
                this.shouldRenderRipple = true;
                this.ripple.then((v) => this.rippleElement = v);
                return this.ripple;
            });
        }
        createAdapter() {
            return {};
        }
        update(changedProperties) {
            const oldIndeterminate = changedProperties.get('indeterminate');
            const oldChecked = changedProperties.get('checked');
            const oldDisabled = changedProperties.get('disabled');
            if (oldIndeterminate !== undefined || oldChecked !== undefined ||
                oldDisabled !== undefined) {
                const oldState = this.calculateAnimationStateName(!!oldChecked, !!oldIndeterminate, !!oldDisabled);
                const newState = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
                this.animationClass = `${oldState}-${newState}`;
            }
            super.update(changedProperties);
        }
        calculateAnimationStateName(checked, indeterminate, disabled) {
            if (disabled) {
                return 'disabled';
            }
            else if (indeterminate) {
                return 'indeterminate';
            }
            else if (checked) {
                return 'checked';
            }
            else {
                return 'unchecked';
            }
        }
        // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
        /** @soyTemplate */
        renderRipple() {
            return this.shouldRenderRipple ? this.renderRippleTemplate() : '';
        }
        /** @soyTemplate */
        renderRippleTemplate() {
            return p$1 `<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`;
        }
        /**
         * @soyTemplate
         * @soyAttributes checkboxAttributes: input
         * @soyClasses checkboxClasses: .mdc-checkbox
         */
        render() {
            const selected = this.indeterminate || this.checked;
            /* eslint-disable eqeqeq */
            // tslint:disable:triple-equals
            /** @classMap */
            const classes = {
                'mdc-checkbox--disabled': this.disabled,
                'mdc-checkbox--selected': selected,
                'mdc-checkbox--touch': !this.reducedTouchTarget,
                'mdc-ripple-upgraded--background-focused': this.focused,
                // transition animiation classes
                'mdc-checkbox--anim-checked-indeterminate': this.animationClass == 'checked-indeterminate',
                'mdc-checkbox--anim-checked-unchecked': this.animationClass == 'checked-unchecked',
                'mdc-checkbox--anim-indeterminate-checked': this.animationClass == 'indeterminate-checked',
                'mdc-checkbox--anim-indeterminate-unchecked': this.animationClass == 'indeterminate-unchecked',
                'mdc-checkbox--anim-unchecked-checked': this.animationClass == 'unchecked-checked',
                'mdc-checkbox--anim-unchecked-indeterminate': this.animationClass == 'unchecked-indeterminate',
            };
            // tslint:enable:triple-equals
            /* eslint-enable eqeqeq */
            const ariaChecked = this.indeterminate ? 'mixed' : undefined;
            return p$1 `
      <div class="mdc-checkbox mdc-checkbox--upgraded ${o$1(classes)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${l$2(this.name)}"
              aria-checked="${l$2(ariaChecked)}"
              aria-label="${l$2(this.ariaLabel)}"
              aria-labelledby="${l$2(this.ariaLabelledBy)}"
              aria-describedby="${l$2(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? 'true' : 'false'}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
        }
        setFormData(formData) {
            if (this.name && this.checked) {
                formData.append(this.name, this.value);
            }
        }
        handleFocus() {
            this.focused = true;
            this.handleRippleFocus();
        }
        handleBlur() {
            this.focused = false;
            this.handleRippleBlur();
        }
        handleRippleMouseDown(event) {
            const onUp = () => {
                window.removeEventListener('mouseup', onUp);
                this.handleRippleDeactivate();
            };
            window.addEventListener('mouseup', onUp);
            this.rippleHandlers.startPress(event);
        }
        handleRippleTouchStart(event) {
            this.rippleHandlers.startPress(event);
        }
        handleRippleDeactivate() {
            this.rippleHandlers.endPress();
        }
        handleRippleMouseEnter() {
            this.rippleHandlers.startHover();
        }
        handleRippleMouseLeave() {
            this.rippleHandlers.endHover();
        }
        handleRippleFocus() {
            this.rippleHandlers.startFocus();
        }
        handleRippleBlur() {
            this.rippleHandlers.endFocus();
        }
        handleChange() {
            this.checked = this.formElement.checked;
            this.indeterminate = this.formElement.indeterminate;
        }
        resetAnimationClass() {
            this.animationClass = '';
        }
        get isRippleActive() {
            var _a;
            return ((_a = this.rippleElement) === null || _a === void 0 ? void 0 : _a.isActive) || false;
        }
    }
    __decorate([
        i$3('.mdc-checkbox')
    ], CheckboxBase.prototype, "mdcRoot", void 0);
    __decorate([
        i$3('input')
    ], CheckboxBase.prototype, "formElement", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], CheckboxBase.prototype, "checked", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], CheckboxBase.prototype, "indeterminate", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], CheckboxBase.prototype, "disabled", void 0);
    __decorate([
        e$4({ type: String, reflect: true })
    ], CheckboxBase.prototype, "name", void 0);
    __decorate([
        e$4({ type: String })
    ], CheckboxBase.prototype, "value", void 0);
    __decorate([
        ariaProperty,
        e$4({ type: String, attribute: 'aria-label' })
    ], CheckboxBase.prototype, "ariaLabel", void 0);
    __decorate([
        ariaProperty,
        e$4({ type: String, attribute: 'aria-labelledby' })
    ], CheckboxBase.prototype, "ariaLabelledBy", void 0);
    __decorate([
        ariaProperty,
        e$4({ type: String, attribute: 'aria-describedby' })
    ], CheckboxBase.prototype, "ariaDescribedBy", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], CheckboxBase.prototype, "reducedTouchTarget", void 0);
    __decorate([
        t$2()
    ], CheckboxBase.prototype, "animationClass", void 0);
    __decorate([
        t$2()
    ], CheckboxBase.prototype, "shouldRenderRipple", void 0);
    __decorate([
        t$2()
    ], CheckboxBase.prototype, "focused", void 0);
    __decorate([
        e$2('mwc-ripple')
    ], CheckboxBase.prototype, "ripple", void 0);
    __decorate([
        e$3({ passive: true })
    ], CheckboxBase.prototype, "handleRippleTouchStart", null);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles$1 = r$4 `.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    let Checkbox = class Checkbox extends CheckboxBase {
    };
    Checkbox.styles = [styles$1];
    Checkbox = __decorate([
        n$1('mwc-checkbox')
    ], Checkbox);

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    class ButtonBase extends s$2 {
        constructor() {
            super(...arguments);
            this.raised = false;
            this.unelevated = false;
            this.outlined = false;
            this.dense = false;
            this.disabled = false;
            this.trailingIcon = false;
            this.fullwidth = false;
            this.icon = '';
            this.label = '';
            this.expandContent = false;
            this.shouldRenderRipple = false;
            this.rippleHandlers = new RippleHandlers(() => {
                this.shouldRenderRipple = true;
                return this.ripple;
            });
        }
        /** @soyTemplate */
        renderOverlay() {
            return p$1 ``;
        }
        /** @soyTemplate */
        renderRipple() {
            const filled = this.raised || this.unelevated;
            return this.shouldRenderRipple ?
                p$1 `<mwc-ripple class="ripple" .primary="${!filled}" .disabled="${this.disabled}"></mwc-ripple>` :
                '';
        }
        focus() {
            const buttonElement = this.buttonElement;
            if (buttonElement) {
                this.rippleHandlers.startFocus();
                buttonElement.focus();
            }
        }
        blur() {
            const buttonElement = this.buttonElement;
            if (buttonElement) {
                this.rippleHandlers.endFocus();
                buttonElement.blur();
            }
        }
        /** @soyTemplate */
        getRenderClasses() {
            return {
                'mdc-button--raised': this.raised,
                'mdc-button--unelevated': this.unelevated,
                'mdc-button--outlined': this.outlined,
                'mdc-button--dense': this.dense,
            };
        }
        /**
         * @soyTemplate
         * @soyAttributes buttonAttributes: #button
         * @soyClasses buttonClasses: #button
         */
        render() {
            return p$1 `
      <button
          id="button"
          class="mdc-button ${o$1(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l$2(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${o$1({
            flex: this.expandContent
        })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
      </button>`;
        }
        /** @soyTemplate */
        renderIcon() {
            return p$1 `
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
        }
        handleRippleActivate(evt) {
            const onUp = () => {
                window.removeEventListener('mouseup', onUp);
                this.handleRippleDeactivate();
            };
            window.addEventListener('mouseup', onUp);
            this.rippleHandlers.startPress(evt);
        }
        handleRippleDeactivate() {
            this.rippleHandlers.endPress();
        }
        handleRippleMouseEnter() {
            this.rippleHandlers.startHover();
        }
        handleRippleMouseLeave() {
            this.rippleHandlers.endHover();
        }
        handleRippleFocus() {
            this.rippleHandlers.startFocus();
        }
        handleRippleBlur() {
            this.rippleHandlers.endFocus();
        }
    }
    ButtonBase.shadowRootOptions = { mode: 'open', delegatesFocus: true };
    __decorate([
        ariaProperty,
        e$4({ type: String, attribute: 'aria-haspopup' })
    ], ButtonBase.prototype, "ariaHasPopup", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], ButtonBase.prototype, "raised", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], ButtonBase.prototype, "unelevated", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], ButtonBase.prototype, "outlined", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], ButtonBase.prototype, "dense", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], ButtonBase.prototype, "disabled", void 0);
    __decorate([
        e$4({ type: Boolean, attribute: 'trailingicon' })
    ], ButtonBase.prototype, "trailingIcon", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], ButtonBase.prototype, "fullwidth", void 0);
    __decorate([
        e$4({ type: String })
    ], ButtonBase.prototype, "icon", void 0);
    __decorate([
        e$4({ type: String })
    ], ButtonBase.prototype, "label", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], ButtonBase.prototype, "expandContent", void 0);
    __decorate([
        i$3('#button')
    ], ButtonBase.prototype, "buttonElement", void 0);
    __decorate([
        e$2('mwc-ripple')
    ], ButtonBase.prototype, "ripple", void 0);
    __decorate([
        t$2()
    ], ButtonBase.prototype, "shouldRenderRipple", void 0);
    __decorate([
        e$3({ passive: true })
    ], ButtonBase.prototype, "handleRippleActivate", null);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-LIcense-Identifier: Apache-2.0
     */
    const styles = r$4 `.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);left:calc(-1 * 1px);border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /** @soyCompatible */
    let Button = class Button extends ButtonBase {
    };
    Button.styles = [styles];
    Button = __decorate([
        n$1('mwc-button')
    ], Button);

    /**
     * Make read-only properties.
     *
     * @param {Object} object
     */
    const namespace = (object) => {
        Object.keys(object).forEach((key) => {
            const prop = object[key];
            const descriptor = Object.getOwnPropertyDescriptor(object, key);

            Object.defineProperty(object, key, {
                enumerable: true,
                configurable: false,
                writable: false,
                value: descriptor.value
            });

            if (prop !== null && typeof prop === 'object' && prop.constructor === Object) {
                namespace(prop);
            }
        });
    };

    let listeners = [];
    let ready = false;
    const elements = document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]');
    const promises = [];

    for (const el of elements) {
        promises.push(window.customElements.whenDefined(el.localName));
    }

    Promise.all(promises).then(() => {
        ready = true;
        listeners.forEach(listener => listener());
        listeners = [];
        document.body.classList.add('layout-ready');
    });

    var layoutReady = (listener) => {
        if (typeof listener === 'function') {
            if (ready) {
                listener();
            } else {
                listeners.push(listener);
            }
        }
    };

    /**
     * DOM event delegator
     *
     * The delegator will listen
     * for events that bubble up
     * to the root node.
     *
     * @constructor
     * @param {Node|string} [root] The root node or a selector string matching the root node
     */
    function Delegate(root) {

    	/**
    	 * Maintain a map of listener
    	 * lists, keyed by event name.
    	 *
    	 * @type Object
    	 */
    	this.listenerMap = [{}, {}];
    	if (root) {
    		this.root(root);
    	}

    	/** @type function() */
    	this.handle = Delegate.prototype.handle.bind(this);

    	// Cache of event listeners removed during an event cycle
    	this._removedListeners = [];
    }

    /**
     * Start listening for events
     * on the provided DOM element
     *
     * @param  {Node|string} [root] The root node or a selector string matching the root node
     * @returns {Delegate} This method is chainable
     */
    Delegate.prototype.root = function (root) {
    	const listenerMap = this.listenerMap;
    	let eventType;

    	// Remove master event listeners
    	if (this.rootElement) {
    		for (eventType in listenerMap[1]) {
    			if (listenerMap[1].hasOwnProperty(eventType)) {
    				this.rootElement.removeEventListener(eventType, this.handle, true);
    			}
    		}
    		for (eventType in listenerMap[0]) {
    			if (listenerMap[0].hasOwnProperty(eventType)) {
    				this.rootElement.removeEventListener(eventType, this.handle, false);
    			}
    		}
    	}

    	// If no root or root is not
    	// a dom node, then remove internal
    	// root reference and exit here
    	if (!root || !root.addEventListener) {
    		if (this.rootElement) {
    			delete this.rootElement;
    		}
    		return this;
    	}

    	/**
    	 * The root node at which
    	 * listeners are attached.
    	 *
    	 * @type Node
    	 */
    	this.rootElement = root;

    	// Set up master event listeners
    	for (eventType in listenerMap[1]) {
    		if (listenerMap[1].hasOwnProperty(eventType)) {
    			this.rootElement.addEventListener(eventType, this.handle, true);
    		}
    	}
    	for (eventType in listenerMap[0]) {
    		if (listenerMap[0].hasOwnProperty(eventType)) {
    			this.rootElement.addEventListener(eventType, this.handle, false);
    		}
    	}

    	return this;
    };

    /**
     * @param {string} eventType
     * @returns boolean
     */
    Delegate.prototype.captureForType = function (eventType) {
    	return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
    };

    /**
     * Attach a handler to one
     * event for all elements
     * that match the selector,
     * now or in the future
     *
     * The handler function receives
     * three arguments: the DOM event
     * object, the node that matched
     * the selector while the event
     * was bubbling and a reference
     * to itself. Within the handler,
     * 'this' is equal to the second
     * argument.
     *
     * The node that actually received
     * the event can be accessed via
     * 'event.target'.
     *
     * @param {string} eventType Listen for these events
     * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
     * @param {function()} handler Handler function - event data passed here will be in event.data
     * @param {boolean} [useCapture] see 'useCapture' in <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>
     * @returns {Delegate} This method is chainable
     */
    Delegate.prototype.on = function (eventType, selector, handler, useCapture) {
    	let root;
    	let listenerMap;
    	let matcher;
    	let matcherParam;

    	if (!eventType) {
    		throw new TypeError('Invalid event type: ' + eventType);
    	}

    	// handler can be passed as
    	// the second or third argument
    	if (typeof selector === 'function') {
    		useCapture = handler;
    		handler = selector;
    		selector = null;
    	}

    	// Fallback to sensible defaults
    	// if useCapture not set
    	if (useCapture === undefined) {
    		useCapture = this.captureForType(eventType);
    	}

    	if (typeof handler !== 'function') {
    		throw new TypeError('Handler must be a type of Function');
    	}

    	root = this.rootElement;
    	listenerMap = this.listenerMap[useCapture ? 1 : 0];

    	// Add master handler for type if not created yet
    	if (!listenerMap[eventType]) {
    		if (root) {
    			root.addEventListener(eventType, this.handle, useCapture);
    		}
    		listenerMap[eventType] = [];
    	}

    	if (!selector) {
    		matcherParam = null;

    		// COMPLEX - matchesRoot needs to have access to
    		// this.rootElement, so bind the function to this.
    		matcher = matchesRoot.bind(this);

    		// Compile a matcher for the given selector
    	} else if (/^[a-z]+$/i.test(selector)) {
    		matcherParam = selector;
    		matcher = matchesTag;
    	} else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
    		matcherParam = selector.slice(1);
    		matcher = matchesId;
    	} else {
    		matcherParam = selector;
    		matcher = Element.prototype.matches;
    	}

    	// Add to the list of listeners
    	listenerMap[eventType].push({
    		selector: selector,
    		handler: handler,
    		matcher: matcher,
    		matcherParam: matcherParam
    	});

    	return this;
    };

    /**
     * Remove an event handler
     * for elements that match
     * the selector, forever
     *
     * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
     * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
     * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
     * @returns {Delegate} This method is chainable
     */
    Delegate.prototype.off = function (eventType, selector, handler, useCapture) {
    	let i;
    	let listener;
    	let listenerMap;
    	let listenerList;
    	let singleEventType;

    	// Handler can be passed as
    	// the second or third argument
    	if (typeof selector === 'function') {
    		useCapture = handler;
    		handler = selector;
    		selector = null;
    	}

    	// If useCapture not set, remove
    	// all event listeners
    	if (useCapture === undefined) {
    		this.off(eventType, selector, handler, true);
    		this.off(eventType, selector, handler, false);
    		return this;
    	}

    	listenerMap = this.listenerMap[useCapture ? 1 : 0];
    	if (!eventType) {
    		for (singleEventType in listenerMap) {
    			if (listenerMap.hasOwnProperty(singleEventType)) {
    				this.off(singleEventType, selector, handler);
    			}
    		}

    		return this;
    	}

    	listenerList = listenerMap[eventType];
    	if (!listenerList || !listenerList.length) {
    		return this;
    	}

    	// Remove only parameter matches
    	// if specified
    	for (i = listenerList.length - 1; i >= 0; i--) {
    		listener = listenerList[i];

    		if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
    			this._removedListeners.push(listener);
    			listenerList.splice(i, 1);
    		}
    	}

    	// All listeners removed
    	if (!listenerList.length) {
    		delete listenerMap[eventType];

    		// Remove the main handler
    		if (this.rootElement) {
    			this.rootElement.removeEventListener(eventType, this.handle, useCapture);
    		}
    	}

    	return this;
    };


    /**
     * Handle an arbitrary event.
     *
     * @param {Event} event
     */
    Delegate.prototype.handle = function (event) {
    	let i;
    	let l;
    	const type = event.type;
    	let root;
    	let phase;
    	let listener;
    	let returned;
    	let listenerList = [];
    	let target;
    	const eventIgnore = 'ftLabsDelegateIgnore';

    	if (event[eventIgnore] === true) {
    		return;
    	}

    	target = event.target;

    	// Hardcode value of Node.TEXT_NODE
    	// as not defined in IE8
    	if (target.nodeType === 3) {
    		target = target.parentNode;
    	}

    	// Handle SVG <use> elements in IE
    	if (target.correspondingUseElement) {
    		target = target.correspondingUseElement;
    	}

    	root = this.rootElement;

    	phase = event.eventPhase || (event.target !== event.currentTarget ? 3 : 2);

    	// eslint-disable-next-line default-case
    	switch (phase) {
    		case 1: //Event.CAPTURING_PHASE:
    			listenerList = this.listenerMap[1][type];
    			break;
    		case 2: //Event.AT_TARGET:
    			if (this.listenerMap[0] && this.listenerMap[0][type]) {
    				listenerList = listenerList.concat(this.listenerMap[0][type]);
    			}
    			if (this.listenerMap[1] && this.listenerMap[1][type]) {
    				listenerList = listenerList.concat(this.listenerMap[1][type]);
    			}
    			break;
    		case 3: //Event.BUBBLING_PHASE:
    			listenerList = this.listenerMap[0][type];
    			break;
    	}

    	let toFire = [];

    	// Need to continuously check
    	// that the specific list is
    	// still populated in case one
    	// of the callbacks actually
    	// causes the list to be destroyed.
    	l = listenerList.length;
    	while (target && l) {
    		for (i = 0; i < l; i++) {
    			listener = listenerList[i];

    			// Bail from this loop if
    			// the length changed and
    			// no more listeners are
    			// defined between i and l.
    			if (!listener) {
    				break;
    			}

    			if (
    				target.tagName &&
    				["button", "input", "select", "textarea"].indexOf(target.tagName.toLowerCase()) > -1 &&
    				target.hasAttribute("disabled")
    			) {
    				// Remove things that have previously fired
    				toFire = [];
    			}
    			// Check for match and fire
    			// the event if there's one
    			//
    			// TODO:MCG:20120117: Need a way
    			// to check if event#stopImmediatePropagation
    			// was called. If so, break both loops.
    			else if (listener.matcher.call(target, listener.matcherParam, target)) {
    				toFire.push([event, target, listener]);
    			}
    		}

    		// TODO:MCG:20120117: Need a way to
    		// check if event#stopPropagation
    		// was called. If so, break looping
    		// through the DOM. Stop if the
    		// delegation root has been reached
    		if (target === root) {
    			break;
    		}

    		l = listenerList.length;

    		// Fall back to parentNode since SVG children have no parentElement in IE
    		target = target.parentElement || target.parentNode;

    		// Do not traverse up to document root when using parentNode, though
    		if (target instanceof HTMLDocument) {
    			break;
    		}
    	}

    	let ret;

    	for (i = 0; i < toFire.length; i++) {
    		// Has it been removed during while the event function was fired
    		if (this._removedListeners.indexOf(toFire[i][2]) > -1) {
    			continue;
    		}
    		returned = this.fire.apply(this, toFire[i]);

    		// Stop propagation to subsequent
    		// callbacks if the callback returned
    		// false
    		if (returned === false) {
    			toFire[i][0][eventIgnore] = true;
    			toFire[i][0].preventDefault();
    			ret = false;
    			break;
    		}
    	}

    	return ret;
    };

    /**
     * Fire a listener on a target.
     *
     * @param {Event} event
     * @param {Node} target
     * @param {Object} listener
     * @returns {boolean}
     */
    Delegate.prototype.fire = function (event, target, listener) {
    	return listener.handler.call(target, event, target);
    };

    /**
     * Check whether an element
     * matches a tag selector.
     *
     * Tags are NOT case-sensitive,
     * except in XML (and XML-based
     * languages such as XHTML).
     *
     * @param {string} tagName The tag name to test against
     * @param {Element} element The element to test with
     * @returns boolean
     */
    function matchesTag(tagName, element) {
    	return tagName.toLowerCase() === element.tagName.toLowerCase();
    }

    /**
     * Check whether an element
     * matches the root.
     *
     * @param {?String} selector In this case this is always passed through as null and not used
     * @param {Element} element The element to test with
     * @returns boolean
     */
    function matchesRoot(selector, element) {
    	if (this.rootElement === window) {
    		return (
    			// Match the outer document (dispatched from document)
    			element === document ||
    			// The <html> element (dispatched from document.body or document.documentElement)
    			element === document.documentElement ||
    			// Or the window itself (dispatched from window)
    			element === window
    		);
    	}
    	return this.rootElement === element;
    }

    /**
     * Check whether the ID of
     * the element in 'this'
     * matches the given ID.
     *
     * IDs are case-sensitive.
     *
     * @param {string} id The ID to test against
     * @param {Element} element The element to test with
     * @returns boolean
     */
    function matchesId(id, element) {
    	return id === element.id;
    }

    /**
     * Short hand for off()
     * and root(), ie both
     * with no parameters
     *
     * @return void
     */
    Delegate.prototype.destroy = function () {
    	this.off();
    	this.root();
    };

    class Behavior {
        /**
         * Event listeners.
         *
         * @return {Object.<String, Function|Object.<String, Function>>}
         */
        get events() {
            return {};
        }

        /**
         * Direct access to Delegate.
         *
         * @return {Delegate}
         */
        get delegate() {
            return this._delegate;
        }

        /**
         * Root element.
         *
         * @return {HTMLElement}
         */
        get root() {
            return this._root;
        }

        /**
         * @param {HTMLElement} htmlElement
         */
        constructor(htmlElement) {
            /** @protected */
            this._root = htmlElement;
            /** @protected */
            this._delegate = new Delegate(htmlElement);
            this._attachListeners(this.events);
        }

        /**
         * Remove all registered listeners and attach them again.
         */
        resetEvents() {
            this._delegate.off();
            this._attachListeners(this.events);
        }

        /**
         * @param {Object.<String, Function|Object.<String, Function>>} listeners
         * @param {String} [selector]
         *
         * @protected
         */
        _attachListeners(listeners, selector = null) {
            for (const eventName in listeners) {
                if (listeners.hasOwnProperty(eventName)) {
                    const listener = listeners[eventName];

                    switch (typeof listener) {
                        case 'function':
                            if (selector === null) {
                                this._delegate.on(eventName, (...args) => {
                                    listener.apply(this._root, args);
                                });
                            } else if (typeof selector === 'string') {
                                this._delegate.on(eventName, selector, (...args) => {
                                    listener.apply(this._root, args);
                                });
                            }

                            break;
                        case 'object':
                            if (selector === null) {
                                this._attachListeners(listener, eventName);
                            }

                            break;
                    }
                }
            }
        }
    }

    class DrawerToggle extends Behavior {
        /**
         * Event listeners.
         *
         * @return {Object.<String, Function|Object.<String, Function>>}
         */
        get events() {
            return {
                click: this._onClick,
            };
        }

        /**
         * @param {Event} event
         * @private
         */
        _onClick(event) {
            const id = event.target.getAttribute('data-drawer-id');

            if (typeof id === 'string' && id.length > 0) {
                const drawer = document.getElementById(id);

                if (drawer !== null) {
                    drawer.open = !drawer.open;
                }
            }
        }
    }

    class AppProgress extends Behavior {
        /**
         * @param {HTMLElement} htmlElement
         * @param {number} defaultProgress
         */
        constructor(htmlElement, defaultProgress = 0) {
            super(htmlElement);

            this._defaultProgress = defaultProgress;
            this.root.classList.add('active');
            this._reset();

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this._afterDomReady();
                });
            } else {
                this._afterDomReady();
            }

            layoutReady(() => {
                this._layoutReady = true;
                this._loadUpdate();
            });

            window.addEventListener('beforeunload', () => {
                this._reset();
                this.root.classList.add('active');
                this.root.progress = this._defaultProgress;
            });
        }

        /**
         * @private
         */
        _reset() {
            this._loaded = false;
            this._docReady = false;
            this._layoutReady = false;
            this.root.progress = this._defaultProgress;
        }

        /**
         * @private
         */
        _loadUpdate() {
            if (this._docReady && this._layoutReady) {
                setTimeout(() => {
                    this.root.progress = 1;
                }, 100);
                setTimeout(() => {
                    this.root.classList.remove('active');
                }, 1000);
                this._loaded = true;
            } else if (this._docReady || this._layoutReady) {
                setTimeout(() => {
                    this.root.progress = 0.4;
                }, 100);
            } else {
                setTimeout(() => {
                    this.root.progress = this._defaultProgress;
                }, 100);
            }
        }

        /**
         * @private
         */
        _afterDomReady() {
            this._docReady = true;
            this._loadUpdate();
        }
    }

    class FormBehavior extends Behavior {
        /**
         * @inheritDoc
         */
        get events() {
            return {
                submit: (event) => this._onSubmit(event),
                formdata: (event) => this._onFormData(event),
                'mwc-textfield, input': {
                    keypress: (event) => this._onKeyPress(event),
                },
                '*[type="submit"]': {
                    click: (event) => this._onButtonSubmit(event)
                }
            };
        }

        /**
         * @param {HTMLFormElement} form
         */
        constructor(form) {
            super(form);
            form.setAttribute('novalidate', 'novalidate');
        }

        /**
         * @param {HTMLFormElement} form
         * @return {FormData}
         */
        static fetchFormData(form) {
            return new FormData(form);
        }

        /**
         * @param {HTMLFormElement} form
         * @return {boolean}
         */
        static isValid(form) {
            const invalidElements = FormBehavior.validate(form);

            return form.reportValidity() && invalidElements.length === 0;
        }

        /**
         * @param {HTMLFormElement} form
         * @return {Array}
         */
        static validate(form) {
            const invalidElements = [];
            const elements = form.querySelectorAll('input, textarea, select, *[name]');

            for (const el of elements) {
                if (typeof el.reportValidity === 'function') {
                    if (!el.reportValidity()) {
                        invalidElements.push(el);
                    }
                }
            }

            if (invalidElements.length > 0 && typeof invalidElements[0].focus === 'function') {
                invalidElements[0].focus();
            }

            return invalidElements;
        }

        /**
         * @return {FormData}
         */
        fetchFormData() {
            return FormBehavior.fetchFormData(this.root);
        }

        /**
         * @return {boolean}
         */
        isValid() {
            return FormBehavior.isValid(this.root);
        }

        /**
         * @return {Array}
         */
        validate() {
            return FormBehavior.validate(this.root);
        }

        /**
         * @param {Event} event
         * @private
         */
        _onKeyPress(event) {
            if (event.keyCode === 13 && this.isValid()) {
                this.root.submit();
            }
        }

        /**
         * @param {Event} event
         * @private
         */
        _onButtonSubmit(event) {
            if (this.isValid()) {
                const name = event.target.getAttribute('name');

                if (name && !event.target.parentElement.querySelector(`input[name="${name}"]`)) {
                    const hidden = document.createElement('input');
                    hidden.hidden = true;
                    hidden.name = event.target.getAttribute('name');
                    hidden.value = '1';
                    event.target.parentElement.appendChild(hidden);
                }

                this.root.submit();
            }
        }

        /**
         * @param {Event} event
         * @private
         */
        _onSubmit(event) {
            event.preventDefault();

            if (this.isValid()) {
                event.target.submit();
            } else {
                event.target.dispatchEvent(new CustomEvent('form-invalid', {bubbles: false}));
            }
        }

        /**
         * @param {Event} event
         * @private
         */
        _onFormData(event) {
            // const formData = event.formData;
            // formData.set('field1', 'value');

            // set the value of field manually if your custom element doesn't work with native form
        }
    }

    var initializeLayout = () => {
        layoutReady(() => {
            const progress = document.querySelector('#app-progress');

            if (progress !== null) {
                new AppProgress(progress);
            }

            for (const el of document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]')) {
                el.classList.add('ready');
            }

            for (const el of document.querySelectorAll('.app-drawer-toggle')) {
                new DrawerToggle(el);
            }

            for (const el of document.querySelectorAll('.form-behavior')) {
                new FormBehavior(el);
            }
        });
    };

    function t(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];throw new Error("number"==typeof t?"[MobX] minified error nr: "+t+(i.length?" "+i.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+t)}function n(){return "undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:Hn}function i(){ti||t("Proxy not available");}function r(t){var n=!1;return function(){if(!n)return n=!0,t.apply(this,arguments)}}function e(t){return "function"==typeof t}function u(t){switch(typeof t){case"string":case"symbol":case"number":return !0}return !1}function o(t){return null!==t&&"object"==typeof t}function s(t){var n;if(!o(t))return !1;var i=Object.getPrototypeOf(t);return null==i||(null==(n=i.constructor)?void 0:n.toString())===ni}function a(t){var n=null==t?void 0:t.constructor;return !!n&&("GeneratorFunction"===n.name||"GeneratorFunction"===n.displayName)}function f(t,n,i){Jn(t,n,{enumerable:!1,writable:!0,configurable:!0,value:i});}function c(t,n,i){Jn(t,n,{enumerable:!1,writable:!1,configurable:!0,value:i});}function h(t,n){var i="isMobX"+t;return n.prototype[i]=!0,function(t){return o(t)&&!0===t[i]}}function v(t){return t instanceof Map}function l(t){return t instanceof Set}function d(t){return null===t?null:"object"==typeof t?""+t:t}function b(t,n){return Yn.hasOwnProperty.call(t,n)}function y(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function p(t,n,i){return n&&y(t.prototype,n),i&&y(t,i),t}function m(){return (m=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);}return t}).apply(this,arguments)}function w(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function A(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t){if(t){if("string"==typeof t)return j(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);return "Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(t,void 0):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return (i=t[Symbol.iterator]()).next.bind(i)}function g(t){return Object.assign((function(n,i){_(n,i,t);}),t)}function _(t,n,i){b(t,oi)||f(t,oi,m({},t[oi])),function(t){return "override"===t.t}(i)||(t[oi][n]=i);}function S(t,n,i){void 0===n&&(n=ii),void 0===i&&(i=ii);var r=new ai(t);return n!==ii&&kt(r,n),i!==ii&&Et(r,i),r}function x(t,n,i){return Yt(t)?t:Array.isArray(t)?ji.array(t,{name:i}):s(t)?ji.object(t,void 0,{name:i}):v(t)?ji.map(t,{name:i}):l(t)?ji.set(t,{name:i}):"function"!=typeof t||Mt(t)||Xt(t)?t:a(t)?ir(t):Yi(i,t)}function M(t){return t}function R(t,n){return {t:t,i:n,u:V,o:N}}function V(t,n,i,r){var e;if(null==(e=this.i)?void 0:e.bound)return null===this.o(t,n,i,!1)?0:1;if(r===t.s)return null===this.o(t,n,i,!1)?0:2;if(Mt(i.value))return 1;var u=k(t,this,n,i,!1);return Jn(r,n,u),2}function N(t,n,i,r){var e=k(t,this,n,i);return t.h(n,e,r)}function k(t,n,i,r,e){var u,o,s,a,f,c,h;void 0===e&&(e=qi.safeDescriptors);var v,l=r.value;return (null==(u=n.i)?void 0:u.bound)&&(l=l.bind(null!=(v=t.v)?v:t.s)),{value:z(null!=(o=null==(s=n.i)?void 0:s.name)?o:i.toString(),l,null!=(a=null==(f=n.i)?void 0:f.autoAction)&&a,(null==(c=n.i)?void 0:c.bound)?null!=(h=t.v)?h:t.s:void 0),configurable:!e||t.l,enumerable:!1,writable:!e}}function E(t,n){return {t:t,i:n,u:C,o:T}}function C(t,n,i,r){var e;if(r===t.s)return null===this.o(t,n,i,!1)?0:2;if((null==(e=this.i)?void 0:e.bound)&&!Xt(t.s[n])&&null===this.o(t,n,i,!1))return 0;if(Xt(i.value))return 1;var u=I(t,0,0,i,!1,!1);return Jn(r,n,u),2}function T(t,n,i,r){var e,u=I(t,0,0,i,null==(e=this.i)?void 0:e.bound);return t.h(n,u,r)}function I(t,n,i,r,e,u){void 0===u&&(u=qi.safeDescriptors);var o,s=r.value;return e&&(s=s.bind(null!=(o=t.v)?o:t.s)),{value:ir(s),configurable:!u||t.l,enumerable:!1,writable:!u}}function K(t,n){return {t:t,i:n,u:L,o:P}}function L(t,n,i){return null===this.o(t,n,i,!1)?0:1}function P(t,n,i,r){return t.p(n,m({},this.i,{get:i.get,set:i.set}),r)}function D(t,n){return {t:t,i:n,u:B,o:G}}function B(t,n,i){return null===this.o(t,n,i,!1)?0:1}function G(t,n,i,r){var e,u;return t.m(n,i.value,null!=(e=null==(u=this.i)?void 0:u.enhancer)?e:x,r)}function q(t){return {t:"true",i:t,u:F,o:X}}function F(t,n,i,r){var e,u,o,s;if(i.get)return _i.u(t,n,i,r);if(i.set){var f=z(n.toString(),i.set);return r===t.s?null===t.h(n,{configurable:!qi.safeDescriptors||t.l,set:f})?0:2:(Jn(r,n,{configurable:!0,set:f}),2)}if(r!==t.s&&"function"==typeof i.value)return a(i.value)?((null==(s=this.i)?void 0:s.autoBind)?ir.bound:ir).u(t,n,i,r):((null==(o=this.i)?void 0:o.autoBind)?Yi.bound:Yi).u(t,n,i,r);var c,h=!1===(null==(e=this.i)?void 0:e.deep)?ji.ref:ji;return "function"==typeof i.value&&(null==(u=this.i)?void 0:u.autoBind)&&(i.value=i.value.bind(null!=(c=t.v)?c:t.s)),h.u(t,n,i,r)}function X(t,n,i,r){var e,u,o;return i.get?_i.o(t,n,i,r):i.set?t.h(n,{configurable:!qi.safeDescriptors||t.l,set:z(n.toString(),i.set)},r):("function"==typeof i.value&&(null==(e=this.i)?void 0:e.autoBind)&&(i.value=i.value.bind(null!=(o=t.v)?o:t.s)),(!1===(null==(u=this.i)?void 0:u.deep)?ji.ref:ji).o(t,n,i,r))}function U(t){return t||li}function W(t){return !0===t.deep?x:!1===t.deep?M:(n=t.defaultDecorator)&&null!=(i=null==(r=n.i)?void 0:r.enhancer)?i:x;var n,i,r;}function H(t,n,i){if(!u(n))return Yt(t)?t:s(t)?ji.object(t,n,i):Array.isArray(t)?ji.array(t,n):v(t)?ji.map(t,n):l(t)?ji.set(t,n):"object"==typeof t&&null!==t?t:ji.box(t,n);_(t,n,di);}function z(t,n,i,r){function e(){return $(0,i,n,r||this,arguments)}return void 0===i&&(i=!1),e.isMobxAction=!0,Ri&&(Vi.value=t,Object.defineProperty(e,"name",Vi)),e}function $(t,n,i,r,e){var u=J(0,n);try{return i.apply(r,e)}catch(t){throw u.O=t,t}finally{Y(u);}}function J(t,n){var i=qi.trackingDerivation,r=!n||!i;pt();var e=qi.allowStateChanges;r&&(st(),e=Z(!0));var u={j:r,A:i,g:e,_:ft(!0),S:!1,M:0,R:Mi++,V:xi};return xi=u.R,u}function Y(n){xi!==n.R&&t(30),xi=n.V,void 0!==n.O&&(qi.suppressReactionErrors=!0),tt(n.g),ct(n._),mt(),n.j&&at(n.A),qi.suppressReactionErrors=!1;}function Z(t){var n=qi.allowStateChanges;return qi.allowStateChanges=t,n}function tt(t){qi.allowStateChanges=t;}function nt(t){return t instanceof Li}function it(t){switch(t.N){case Ci.k:return !1;case Ci.C:case Ci.T:return !0;case Ci.I:for(var n=ft(!0),i=st(),r=t.K,e=r.length,u=0;u<e;u++){var o=r[u];if(Ki(o)){if(qi.disableErrorBoundaries)o.get();else try{o.get();}catch(t){return at(i),ct(n),!0}if(t.N===Ci.T)return at(i),ct(n),!0}}return ht(t),at(i),ct(n),!1}}function et(t,n,i){var r=ft(!0);ht(t),t.L=new Array(t.K.length+100),t.P=0,t.D=++qi.runId;var e,u=qi.trackingDerivation;if(qi.trackingDerivation=t,qi.inBatch++,!0===qi.disableErrorBoundaries)e=n.call(i);else try{e=n.call(i);}catch(t){e=new Li(t);}return qi.inBatch--,qi.trackingDerivation=u,function(t){for(var n=t.K,i=t.K=t.L,r=Ci.k,e=0,u=t.P,o=0;o<u;o++){var s=i[o];0===s.B&&(s.B=1,e!==o&&(i[e]=s),e++),s.N>r&&(r=s.N);}for(i.length=e,t.L=null,u=n.length;u--;){var a=n[u];0===a.B&&bt(a,t),a.B=0;}for(;e--;){var f=i[e];1===f.B&&(f.B=0,dt(f,t));}r!==Ci.k&&(t.N=r,t.G());}(t),ct(r),e}function ut(t){var n=t.K;t.K=[];for(var i=n.length;i--;)bt(n[i],t);t.N=Ci.C;}function ot(t){var n=st();try{return t()}finally{at(n);}}function st(){var t=qi.trackingDerivation;return qi.trackingDerivation=null,t}function at(t){qi.trackingDerivation=t;}function ft(t){var n=qi.allowStateReads;return qi.allowStateReads=t,n}function ct(t){qi.allowStateReads=t;}function ht(t){if(t.N!==Ci.k){t.N=Ci.k;for(var n=t.K,i=n.length;i--;)n[i].q=Ci.k;}}function dt(t,n){t.F.add(n),t.q>n.N&&(t.q=n.N);}function bt(t,n){t.F.delete(n),0===t.F.size&&yt(t);}function yt(t){!1===t.X&&(t.X=!0,qi.pendingUnobservations.push(t));}function pt(){qi.inBatch++;}function mt(){if(0==--qi.inBatch){At();for(var t=qi.pendingUnobservations,n=0;n<t.length;n++){var i=t[n];i.X=!1,0===i.F.size&&(i.U&&(i.U=!1,i.onBUO()),i instanceof Ii&&i.W());}qi.pendingUnobservations=[];}}function wt(t){var n=qi.trackingDerivation;return null!==n?(n.D!==t.H&&(t.H=n.D,n.L[n.P++]=t,!t.U&&qi.trackingContext&&(t.U=!0,t.onBO())),!0):(0===t.F.size&&qi.inBatch>0&&yt(t),!1)}function Ot(t){t.q!==Ci.T&&(t.q=Ci.T,t.F.forEach((function(t){t.N===Ci.k&&t.G(),t.N=Ci.T;})));}function At(){qi.inBatch>0||qi.isRunningReactions||Xi(gt);}function gt(){qi.isRunningReactions=!0;for(var t=qi.pendingReactions,n=0;t.length>0;){100==++n&&(console.error("[mobx] cycle in reaction: "+t[0]),t.splice(0));for(var i=t.splice(0),r=0,e=i.length;r<e;r++)i[r].$();}qi.isRunningReactions=!1;}function _t(){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}function St(t){return function(n,i){return e(n)?z(n.name||"<unnamed action>",n,t):e(i)?z(n,i,t):u(i)?_(n,i,t?zi:Wi):u(n)?g(R(t?"autoAction":"action",{name:n,autoAction:t})):void 0}}function Mt(t){return e(t)&&!0===t.isMobxAction}function Rt(t,n){function i(){t(u);}var r,e;void 0===n&&(n=Zn);var u,o=null!=(r=null==(e=n)?void 0:e.name)?r:"Autorun";if(n.scheduler||n.delay){var s=Vt(n),a=!1;u=new Fi(o,(function(){a||(a=!0,s((function(){a=!1,u.J||u.track(i);})));}),n.onError,n.requiresObservable);}else u=new Fi(o,(function(){this.track(i);}),n.onError,n.requiresObservable);return u.Y(),u.Z()}function Vt(t){return t.scheduler?t.scheduler:t.delay?function(n){return setTimeout(n,t.delay)}:Qi}function kt(t,n,i){return Ct("onBO",t,n,i)}function Et(t,n,i){return Ct("onBUO",t,n,i)}function Ct(t,n,i,r){var u="function"==typeof r?Bn(n,i):Bn(n),o=e(r)?r:i,s=t+"L";return u[s]?u[s].add(o):u[s]=new Set([o]),function(){var t=u[s];t&&(t.delete(o),0===t.size&&delete u[s]);}}function It(t,n,i,r){var e=ui(n),u=Cn(t,r)[si];pt();try{ei(e).forEach((function(t){u.o(t,e[t],!i||!(t in i)||i[t]);}));}finally{mt();}return t}function Bt(){this.message="FLOW_CANCELLED";}function qt(t){e(t.cancel)&&t.cancel();}function Xt(t){return !0===(null==t?void 0:t.isMobXFlow)}function Jt(t,n){return !!t&&(void 0!==n?!!In(t)&&t[si].it.has(n):In(t)||!!t[si]||fi(t)||Ui(t)||Ki(t))}function Yt(t){return Jt(t)}function vn(){t("trace() is not available in production builds");for(var n=!1,i=arguments.length,r=new Array(i),e=0;e<i;e++)r[e]=arguments[e];"boolean"==typeof r[r.length-1]&&(n=r.pop());var u=ln(r);if(!u)return t("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");u.ct===Ti.NONE&&console.log("[mobx.trace] '"+u.tt+"' tracing enabled"),u.ct=n?Ti.BREAK:Ti.LOG;}function ln(t){switch(t.length){case 0:return qi.trackingDerivation;case 1:return Bn(t[0]);case 2:return Bn(t[0],t[1])}}function dn(t,n){void 0===n&&(n=void 0),pt();try{return t.apply(n)}finally{mt();}}function mn(t){return t[si]}function wn(t){return void 0!==t.ht&&t.ht.length>0}function On(t,n){var i=t.ht||(t.ht=[]);return i.push(n),r((function(){var t=i.indexOf(n);-1!==t&&i.splice(t,1);}))}function jn(n,i){var r=st();try{for(var e=[].concat(n.ht||[]),u=0,o=e.length;u<o&&((i=e[u](i))&&!i.type&&t(14),i);u++);return i}finally{at(r);}}function An(t){return void 0!==t.vt&&t.vt.length>0}function gn(t,n){var i=t.vt||(t.vt=[]);return i.push(n),r((function(){var t=i.indexOf(n);-1!==t&&i.splice(t,1);}))}function _n(t,n){var i=st(),r=t.vt;if(r){for(var e=0,u=(r=r.slice()).length;e<u;e++)r[e](n);at(i);}}function xn(t,n,i){if(s(t))return It(t,t,n,i);var r=Cn(t,i)[si];if(!t[er]){var e=Object.getPrototypeOf(t),u=new Set([].concat(ei(t),ei(e)));u.delete("constructor"),u.delete(si),f(e,er,u);}pt();try{t[er].forEach((function(t){return r.u(t,!n||!(t in n)||n[t])}));}finally{mt();}return t}function Mn(t,n,r,e){void 0===r&&(r="ObservableArray"),void 0===e&&(e=!1),i();var u=new sr(r,n,e,!1);c(u.it,si,u);var o=new Proxy(u.it,or);if(u.v=o,t&&t.length){var s=Z(!0);u.lt(0,0,t),tt(s);}return o}function Rn(t,n){"function"==typeof Array.prototype[t]&&(ar[t]=n(t));}function Vn(t){return function(){var n=this[si];n.dt.reportObserved();var i=n.bt(n.it);return i[t].apply(i,arguments)}}function Nn(t){return function(n,i){var r=this,e=this[si];return e.dt.reportObserved(),e.bt(e.it)[t]((function(t,e){return n.call(i,t,e,r)}))}}function kn(t){return function(){var n=this,i=this[si];i.dt.reportObserved();var r=i.bt(i.it),e=arguments[0];return arguments[0]=function(t,i,r){return e(t,i,r,n)},r[t].apply(r,arguments)}}function En(t){return o(t)&&hr(t[si])}function Cn(t,n){var i;if(b(t,si))return t;var r=null!=(i=null==n?void 0:n.name)?i:"ObservableObject",e=new _r(t,new Map,String(r),function(t){var n;return t?null!=(n=t.defaultDecorator)?n:q(t):void 0}(n));return f(t,si,e),t}function Tn(t){return gr[t]||(gr[t]={get:function(){return this[si].yt(t)},set:function(n){return this[si].pt(t,n)}})}function In(t){return !!o(t)&&Sr(t[si])}function Kn(t,n,i){var r;null==(r=t.s[oi])||delete r[i];}function Ln(t){Jn(Rr.prototype,""+t,function(t){return {enumerable:!1,configurable:!0,get:function(){return this[si].st(t)},set:function(n){this[si].et(t,n);}}}(t));}function Pn(t){if(t>xr){for(var n=xr;n<t+100;n++)Ln(n);xr=t;}}function Dn(t,n,i){return new Rr(t,n,i)}function Bn(n,i){if("object"==typeof n&&null!==n){if(En(n))return void 0!==i&&t(23),n[si].dt;if(Ar(n))return n[si];if(pr(n)){if(void 0===i)return n.wt;var r=n.Ot.get(i)||n.jt.get(i);return r||t(25,i,qn(n)),r}if(In(n)){if(!i)return t(26);var u=n[si].it.get(i);return u||t(27,i,qn(n)),u}if(fi(n)||Ki(n)||Ui(n))return n}else if(e(n)&&Ui(n[si]))return n[si];t(28);}function Gn(n,i){return n||t(29),void 0!==i?Gn(Bn(n,i)):fi(n)||Ki(n)||Ui(n)||pr(n)||Ar(n)?n:n[si]?n[si]:void t(24,n)}function qn(t,n){var i;if(void 0!==n)i=Bn(t,n);else {if(Mt(t))return t.name;i=In(t)||pr(t)||Ar(t)?Gn(t):Bn(t);}return i.tt}function Fn(t,n,i){return void 0===i&&(i=-1),function t(n,i,r,u,o){if(n===i)return 0!==n||1/n==1/i;if(null==n||null==i)return !1;if(n!=n)return i!=i;var s=typeof n;if(!e(s)&&"object"!==s&&"object"!=typeof i)return !1;var a=Vr.call(n);if(a!==Vr.call(i))return !1;switch(a){case"[object RegExp]":case"[object String]":return ""+n==""+i;case"[object Number]":return +n!=+n?+i!=+i:0==+n?1/+n==1/i:+n==+i;case"[object Date]":case"[object Boolean]":return +n==+i;case"[object Symbol]":return "undefined"!=typeof Symbol&&Symbol.valueOf.call(n)===Symbol.valueOf.call(i);case"[object Map]":case"[object Set]":r>=0&&r++;}n=Xn(n),i=Xn(i);var f="[object Array]"===a;if(!f){if("object"!=typeof n||"object"!=typeof i)return !1;var c=n.constructor,h=i.constructor;if(c!==h&&!(e(c)&&c instanceof c&&e(h)&&h instanceof h)&&"constructor"in n&&"constructor"in i)return !1}if(0===r)return !1;r<0&&(r=-1),o=o||[];for(var v=(u=u||[]).length;v--;)if(u[v]===n)return o[v]===i;if(u.push(n),o.push(i),f){if((v=n.length)!==i.length)return !1;for(;v--;)if(!t(n[v],i[v],r-1,u,o))return !1}else {var l,d=Object.keys(n);if(v=d.length,Object.keys(i).length!==v)return !1;for(;v--;)if(!b(i,l=d[v])||!t(n[l],i[l],r-1,u,o))return !1}return u.pop(),o.pop(),!0}(t,n,i)}function Xn(t){return En(t)?t.slice():v(t)||pr(t)||l(t)||Ar(t)?Array.from(t.entries()):t}function Un(t){return t[Symbol.iterator]=Wn,t}function Wn(){return this}var Hn={},zn=Object.assign,$n=Object.getOwnPropertyDescriptor,Jn=Object.defineProperty,Yn=Object.prototype,Qn=[];Object.freeze(Qn);var Zn={};Object.freeze(Zn);var ti="undefined"!=typeof Proxy,ni=Object.toString(),ii=function(){},ri=void 0!==Object.getOwnPropertySymbols,ei="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:ri?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,ui=Object.getOwnPropertyDescriptors||function(t){var n={};return ei(t).forEach((function(i){n[i]=$n(t,i);})),n},oi=Symbol("mobx-stored-annotations"),si=Symbol("mobx administration"),ai=function(){function t(t){void 0===t&&(t="Atom"),this.tt=void 0,this.X=!1,this.U=!1,this.F=new Set,this.B=0,this.H=0,this.q=Ci.C,this.onBOL=void 0,this.onBUOL=void 0,this.tt=t;}var n=t.prototype;return n.onBO=function(){this.onBOL&&this.onBOL.forEach((function(t){return t()}));},n.onBUO=function(){this.onBUOL&&this.onBUOL.forEach((function(t){return t()}));},n.reportObserved=function(){return wt(this)},n.reportChanged=function(){pt(),Ot(this),mt();},n.toString=function(){return this.tt},t}(),fi=h("Atom",ai),ci={identity:function(t,n){return t===n},structural:function(t,n){return Fn(t,n)},default:function(t,n){return Object.is?Object.is(t,n):t===n?0!==t||1/t==1/n:t!=t&&n!=n},shallow:function(t,n){return Fn(t,n,1)}};g({t:"override",u:function(){return 0},o:function(){t("'"+this.t+"' can only be used with 'makeObservable'");}});var vi=q(),li={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(li);var di=D("observable"),bi=D("observable.ref",{enhancer:M}),yi=D("observable.shallow",{enhancer:function(t,n,i){return null==t||In(t)||En(t)||pr(t)||Ar(t)?t:Array.isArray(t)?ji.array(t,{name:i,deep:!1}):s(t)?ji.object(t,void 0,{name:i,deep:!1}):v(t)?ji.map(t,{name:i,deep:!1}):l(t)?ji.set(t,{name:i,deep:!1}):void 0}}),pi=D("observable.struct",{enhancer:function(t,n){return Fn(t,n)?n:t}}),mi=g(di);Object.assign(H,mi);var wi,Oi,ji=zn(H,{box:function(t,n){var i=U(n);return new ki(t,W(i),i.name,!0,i.equals)},array:function(t,n){var i=U(n);return (!1===qi.useProxies||!1===i.proxy?Dn:Mn)(t,W(i),i.name)},map:function(t,n){var i=U(n);return new yr(t,W(i),i.name)},set:function(t,n){var i=U(n);return new jr(t,W(i),i.name)},object:function(t,n,r){return It(!1===qi.useProxies||!1===(null==r?void 0:r.proxy)?Cn({},r):function(t,n){var r,e;return i(),null!=(e=(r=(t=Cn(t,n))[si]).v)?e:r.v=new Proxy(t,rr)}({},r),t,n)},ref:g(bi),shallow:g(yi),deep:mi,struct:g(pi)}),Ai=K("computed"),gi=K("computed.struct",{equals:ci.structural}),_i=function(t,n){if(u(n))return _(t,n,Ai);if(s(t))return g(K("computed",t));var i=s(n)?n:{};return i.get=t,i.name||(i.name=t.name||""),new Ii(i)};Object.assign(_i,Ai),_i.struct=g(gi);var Si,xi=0,Mi=1,Ri=null!=(wi=null==(Oi=$n((function(){}),"name"))?void 0:Oi.configurable)&&wi,Vi={value:"action",configurable:!0,writable:!1,enumerable:!1};Si=Symbol.toPrimitive;var Ni,ki=function(t){function n(n,i,r,e,u){var o;return void 0===r&&(r="ObservableValue"),void 0===u&&(u=ci.default),(o=t.call(this,r)||this).enhancer=void 0,o.tt=void 0,o.equals=void 0,o.At=!1,o.ht=void 0,o.vt=void 0,o.gt=void 0,o.dehancer=void 0,o.enhancer=i,o.tt=r,o.equals=u,o.gt=i(n,void 0,r),o}w(n,t);var i=n.prototype;return i.dehanceValue=function(t){return void 0!==this.dehancer?this.dehancer(t):t},i.set=function(t){(t=this._t(t))!==qi.UNCHANGED&&this.St(t);},i._t=function(t){if(wn(this)){var n=jn(this,{object:this,type:ur,newValue:t});if(!n)return qi.UNCHANGED;t=n.newValue;}return t=this.enhancer(t,this.gt,this.tt),this.equals(this.gt,t)?qi.UNCHANGED:t},i.St=function(t){var n=this.gt;this.gt=t,this.reportChanged(),An(this)&&_n(this,{type:ur,object:this,newValue:t,oldValue:n});},i.get=function(){return this.reportObserved(),this.dehanceValue(this.gt)},i.nt=function(t){return On(this,t)},i.ft=function(t,n){return n&&t({observableKind:"value",debugObjectName:this.tt,object:this,type:ur,newValue:this.gt,oldValue:void 0}),gn(this,t)},i.raw=function(){return this.gt},i.toJSON=function(){return this.get()},i.toString=function(){return this.tt+"["+this.gt+"]"},i.valueOf=function(){return d(this.get())},i[Si]=function(){return this.valueOf()},n}(ai);h("ObservableValue",ki);Ni=Symbol.toPrimitive;var Ci,Ti,Ii=function(){function n(n){this.N=Ci.C,this.K=[],this.L=null,this.U=!1,this.X=!1,this.F=new Set,this.B=0,this.D=0,this.H=0,this.q=Ci.k,this.P=0,this.gt=new Li(null),this.tt=void 0,this.xt=void 0,this.Mt=!1,this.Rt=!1,this.derivation=void 0,this.Vt=void 0,this.ct=Ti.NONE,this.Nt=void 0,this.kt=void 0,this.Et=void 0,this.Ct=void 0,this.onBOL=void 0,this.onBUOL=void 0,n.get||t(31),this.derivation=n.get,this.tt=n.name||"ComputedValue",n.set&&(this.Vt=z("ComputedValue-setter",n.set)),this.kt=n.equals||(n.compareStructural||n.struct?ci.structural:ci.default),this.Nt=n.context,this.Et=!!n.requiresReaction,this.Ct=!!n.keepAlive;}var i=n.prototype;return i.G=function(){!function(t){t.q===Ci.k&&(t.q=Ci.I,t.F.forEach((function(t){t.N===Ci.k&&(t.N=Ci.I,t.G());})));}(this);},i.onBO=function(){this.onBOL&&this.onBOL.forEach((function(t){return t()}));},i.onBUO=function(){this.onBUOL&&this.onBUOL.forEach((function(t){return t()}));},i.get=function(){if(this.Mt&&t(32,this.tt,this.derivation),0!==qi.inBatch||0!==this.F.size||this.Ct){if(wt(this),it(this)){var n=qi.trackingContext;this.Ct&&!n&&(qi.trackingContext=this),this.trackAndCompute()&&function(t){t.q!==Ci.T&&(t.q=Ci.T,t.F.forEach((function(n){n.N===Ci.I?n.N=Ci.T:n.N===Ci.k&&(t.q=Ci.k);})));}(this),qi.trackingContext=n;}}else it(this)&&(this.Tt(),pt(),this.gt=this.It(!1),mt());var i=this.gt;if(nt(i))throw i.cause;return i},i.set=function(n){if(this.Vt){this.Rt&&t(33,this.tt),this.Rt=!0;try{this.Vt.call(this.Nt,n);}finally{this.Rt=!1;}}else t(34,this.tt);},i.trackAndCompute=function(){var t=this.gt,n=this.N===Ci.C,i=this.It(!0),r=n||nt(t)||nt(i)||!this.kt(t,i);return r&&(this.gt=i),r},i.It=function(t){this.Mt=!0;var n,i=Z(!1);if(t)n=et(this,this.derivation,this.Nt);else if(!0===qi.disableErrorBoundaries)n=this.derivation.call(this.Nt);else try{n=this.derivation.call(this.Nt);}catch(t){n=new Li(t);}return tt(i),this.Mt=!1,n},i.W=function(){this.Ct||(ut(this),this.gt=void 0);},i.ft=function(t,n){var i=this,r=!0,e=void 0;return Rt((function(){var u=i.get();if(!r||n){var o=st();t({observableKind:"computed",debugObjectName:i.tt,type:ur,object:i,newValue:u,oldValue:e}),at(o);}r=!1,e=u;}))},i.Tt=function(){},i.toString=function(){return this.tt+"["+this.derivation.toString()+"]"},i.valueOf=function(){return d(this.get())},i[Ni]=function(){return this.valueOf()},n}(),Ki=h("ComputedValue",Ii);!function(t){t[t.C=-1]="NOT_TRACKING_",t[t.k=0]="UP_TO_DATE_",t[t.I=1]="POSSIBLY_STALE_",t[t.T=2]="STALE_";}(Ci||(Ci={})),function(t){t[t.NONE=0]="NONE",t[t.LOG=1]="LOG",t[t.BREAK=2]="BREAK";}(Ti||(Ti={}));var Li=function(t){this.cause=void 0,this.cause=t;},Di=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0;},Bi=!0,qi=function(){var i=n();return i.__mobxInstanceCount>0&&!i.__mobxGlobals&&(Bi=!1),i.__mobxGlobals&&i.__mobxGlobals.version!==(new Di).version&&(Bi=!1),Bi?i.__mobxGlobals?(i.__mobxInstanceCount+=1,i.__mobxGlobals.UNCHANGED||(i.__mobxGlobals.UNCHANGED={}),i.__mobxGlobals):(i.__mobxInstanceCount=1,i.__mobxGlobals=new Di):(setTimeout((function(){t(35);}),1),new Di)}(),Fi=function(){function t(t,n,i,r){void 0===t&&(t="Reaction"),void 0===r&&(r=!1),this.tt=void 0,this.Kt=void 0,this.Lt=void 0,this.Pt=void 0,this.K=[],this.L=[],this.N=Ci.C,this.B=0,this.D=0,this.P=0,this.J=!1,this.Dt=!1,this.Bt=!1,this.Gt=!1,this.ct=Ti.NONE,this.tt=t,this.Kt=n,this.Lt=i,this.Pt=r;}var n=t.prototype;return n.G=function(){this.Y();},n.Y=function(){this.Dt||(this.Dt=!0,qi.pendingReactions.push(this),At());},n.isScheduled=function(){return this.Dt},n.$=function(){if(!this.J){pt(),this.Dt=!1;var t=qi.trackingContext;if(qi.trackingContext=this,it(this)){this.Bt=!0;try{this.Kt();}catch(t){this.qt(t);}}qi.trackingContext=t,mt();}},n.track=function(t){if(!this.J){pt(),this.Gt=!0;var n=qi.trackingContext;qi.trackingContext=this;var i=et(this,t,void 0);qi.trackingContext=n,this.Gt=!1,this.Bt=!1,this.J&&ut(this),nt(i)&&this.qt(i.cause),mt();}},n.qt=function(t){var n=this;if(this.Lt)this.Lt(t,this);else {if(qi.disableErrorBoundaries)throw t;qi.suppressReactionErrors||console.error("[mobx] uncaught error in '"+this+"'",t),qi.globalReactionErrorHandlers.forEach((function(i){return i(t,n)}));}},n.dispose=function(){this.J||(this.J=!0,this.Gt||(pt(),ut(this),mt()));},n.Z=function(){var t=this.dispose.bind(this);return t[si]=this,t},n.toString=function(){return "Reaction["+this.tt+"]"},n.trace=function(t){void 0===t&&(t=!1),vn(this,t);},t}(),Xi=function(t){return t()},Ui=h("Reaction",Fi),Wi=R("action"),Hi=R("action.bound",{bound:!0}),zi=R("autoAction",{autoAction:!0}),$i=R("autoAction.bound",{autoAction:!0,bound:!0}),Ji=St(!1);Object.assign(Ji,Wi);var Yi=St(!0);Object.assign(Yi,zi),Ji.bound=g(Hi),Yi.bound=g($i);var Qi=function(t){return t()},Zi=0;Bt.prototype=Object.create(Error.prototype);var tr=E("flow"),nr=E("flow.bound",{bound:!0}),ir=Object.assign((function(t,n){if(u(n))return _(t,n,tr);var i=t,r=i.name||"<unnamed flow>",o=function(){var t,n=this,u=arguments,o=++Zi,s=Ji(r+" - runid: "+o+" - init",i).apply(n,u),a=void 0,f=new Promise((function(n,i){function u(t){var n;a=void 0;try{n=Ji(r+" - runid: "+o+" - yield "+h++,s.next).call(s,t);}catch(t){return i(t)}c(n);}function f(t){var n;a=void 0;try{n=Ji(r+" - runid: "+o+" - yield "+h++,s.throw).call(s,t);}catch(t){return i(t)}c(n);}function c(t){if(!e(null==t?void 0:t.then))return t.done?n(t.value):(a=Promise.resolve(t.value)).then(u,f);t.then(c,i);}var h=0;t=i,u(void 0);}));return f.cancel=Ji(r+" - runid: "+o+" - cancel",(function(){try{a&&qt(a);var n=s.return(void 0),i=Promise.resolve(n.value);i.then(ii,ii),qt(i),t(new Bt);}catch(n){t(n);}})),f};return o.isMobXFlow=!0,o}),tr);ir.bound=g(nr);var rr={has:function(t,n){return mn(t).ot(n)},get:function(t,n){return mn(t).st(n)},set:function(t,n,i){var r;return !!u(n)&&(null==(r=mn(t).et(n,i,!0))||r)},deleteProperty:function(t,n){var i;return !!u(n)&&(null==(i=mn(t).ut(n,!0))||i)},defineProperty:function(t,n,i){var r;return null==(r=mn(t).h(n,i))||r},ownKeys:function(t){return mn(t).at()},preventExtensions:function(){t(13);}},er=Symbol("mobx-keys"),ur="update",or={get:function(t,n){var i=t[si];return n===si?i:"length"===n?i.Ft():"string"!=typeof n||isNaN(n)?b(ar,n)?ar[n]:t[n]:i.st(parseInt(n))},set:function(t,n,i){var r=t[si];return "length"===n&&r.Xt(i),"symbol"==typeof n||isNaN(n)?t[n]=i:r.et(parseInt(n),i),!0},preventExtensions:function(){t(15);}},sr=function(){function n(t,n,i,r){void 0===t&&(t="ObservableArray"),this.Ut=void 0,this.Wt=void 0,this.dt=void 0,this.it=[],this.ht=void 0,this.vt=void 0,this.Ht=void 0,this.dehancer=void 0,this.v=void 0,this.zt=0,this.Ut=i,this.Wt=r,this.dt=new ai(t),this.Ht=function(t,i){return n(t,i,"ObservableArray[..]")};}var i=n.prototype;return i.$t=function(t){return void 0!==this.dehancer?this.dehancer(t):t},i.bt=function(t){return void 0!==this.dehancer&&t.length>0?t.map(this.dehancer):t},i.nt=function(t){return On(this,t)},i.ft=function(t,n){return void 0===n&&(n=!1),n&&t({observableKind:"array",object:this.v,debugObjectName:this.dt.tt,type:"splice",index:0,added:this.it.slice(),addedCount:this.it.length,removed:[],removedCount:0}),gn(this,t)},i.Ft=function(){return this.dt.reportObserved(),this.it.length},i.Xt=function(n){("number"!=typeof n||isNaN(n)||n<0)&&t("Out of range: "+n);var i=this.it.length;if(n!==i)if(n>i){for(var r=new Array(n-i),e=0;e<n-i;e++)r[e]=void 0;this.lt(i,0,r);}else this.lt(n,i-n);},i.Jt=function(n,i){n!==this.zt&&t(16),this.zt+=i,this.Wt&&i>0&&Pn(n+i+1);},i.lt=function(t,n,i){var r=this,e=this.it.length;if(void 0===t?t=0:t>e?t=e:t<0&&(t=Math.max(0,e+t)),n=1===arguments.length?e-t:null==n?0:Math.max(0,Math.min(n,e-t)),void 0===i&&(i=Qn),wn(this)){var u=jn(this,{object:this.v,type:"splice",index:t,removedCount:n,added:i});if(!u)return Qn;n=u.removedCount,i=u.added;}if(i=0===i.length?i:i.map((function(t){return r.Ht(t,void 0)})),this.Wt){var o=i.length-n;this.Jt(e,o);}var s=this.Yt(t,n,i);return 0===n&&0===i.length||this.Qt(t,i,s),this.bt(s)},i.Yt=function(t,n,i){var r;if(i.length<1e4)return (r=this.it).splice.apply(r,[t,n].concat(i));var e=this.it.slice(t,t+n),u=this.it.slice(t+n);this.it.length=t+i.length-n;for(var o=0;o<i.length;o++)this.it[t+o]=i[o];for(var s=0;s<u.length;s++)this.it[t+i.length+s]=u[s];return e},i.Zt=function(t,n,i){var r=!this.Ut&&!1,e=An(this),u=e||r?{observableKind:"array",object:this.v,type:ur,debugObjectName:this.dt.tt,index:t,newValue:n,oldValue:i}:null;this.dt.reportChanged(),e&&_n(this,u);},i.Qt=function(t,n,i){var r=!this.Ut&&!1,e=An(this),u=e||r?{observableKind:"array",object:this.v,debugObjectName:this.dt.tt,type:"splice",index:t,removed:i,added:n,removedCount:i.length,addedCount:n.length}:null;this.dt.reportChanged(),e&&_n(this,u);},i.st=function(t){if(t<this.it.length)return this.dt.reportObserved(),this.$t(this.it[t]);console.warn("[mobx.array] Attempt to read an array index ("+t+") that is out of bounds ("+this.it.length+"). Please check length first. Out of bound indices will not be tracked by MobX");},i.et=function(n,i){var r=this.it;if(n<r.length){var e=r[n];if(wn(this)){var u=jn(this,{type:ur,object:this.v,index:n,newValue:i});if(!u)return;i=u.newValue;}(i=this.Ht(i,e))!==e&&(r[n]=i,this.Zt(n,i,e));}else n===r.length?this.lt(n,0,[i]):t(17,n,r.length);},n}(),ar={clear:function(){return this.splice(0)},replace:function(t){var n=this[si];return n.lt(0,n.it.length,t)},toJSON:function(){return this.slice()},splice:function(t,n){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var u=this[si];switch(arguments.length){case 0:return [];case 1:return u.lt(t);case 2:return u.lt(t,n)}return u.lt(t,n,r)},spliceWithArray:function(t,n,i){return this[si].lt(t,n,i)},push:function(){for(var t=this[si],n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t.lt(t.it.length,0,i),t.it.length},pop:function(){return this.splice(Math.max(this[si].it.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var t=this[si],n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t.lt(0,0,i),t.it.length},reverse:function(){return qi.trackingDerivation&&t(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){qi.trackingDerivation&&t(37,"sort");var n=this.slice();return n.sort.apply(n,arguments),this.replace(n),this},remove:function(t){var n=this[si],i=n.bt(n.it).indexOf(t);return i>-1&&(this.splice(i,1),!0)}};Rn("concat",Vn),Rn("flat",Vn),Rn("includes",Vn),Rn("indexOf",Vn),Rn("join",Vn),Rn("lastIndexOf",Vn),Rn("slice",Vn),Rn("toString",Vn),Rn("toLocaleString",Vn),Rn("every",Nn),Rn("filter",Nn),Rn("find",Nn),Rn("findIndex",Nn),Rn("flatMap",Nn),Rn("forEach",Nn),Rn("map",Nn),Rn("some",Nn),Rn("reduce",kn),Rn("reduceRight",kn);var fr,cr,hr=h("ObservableArrayAdministration",sr),vr={},lr="add";fr=Symbol.iterator,cr=Symbol.toStringTag;var dr,br,yr=function(){function n(n,i,r){void 0===i&&(i=x),void 0===r&&(r="ObservableMap"),this.Ht=void 0,this.tt=void 0,this[si]=vr,this.Ot=void 0,this.jt=void 0,this.wt=void 0,this.ht=void 0,this.vt=void 0,this.dehancer=void 0,this.Ht=i,this.tt=r,e(Map)||t(18),this.wt=S("ObservableMap.keys()"),this.Ot=new Map,this.jt=new Map,this.merge(n);}var i=n.prototype;return i.ot=function(t){return this.Ot.has(t)},i.has=function(t){var n=this;if(!qi.trackingDerivation)return this.ot(t);var i=this.jt.get(t);if(!i){var r=i=new ki(this.ot(t),M,"ObservableMap.key?",!1);this.jt.set(t,r),Et(r,(function(){return n.jt.delete(t)}));}return i.get()},i.set=function(t,n){var i=this.ot(t);if(wn(this)){var r=jn(this,{type:i?ur:lr,object:this,newValue:n,name:t});if(!r)return this;n=r.newValue;}return i?this.tn(t,n):this.nn(t,n),this},i.delete=function(t){var n=this;if(wn(this)&&!jn(this,{type:"delete",object:this,name:t}))return !1;if(this.ot(t)){var i=An(this),r=i?{observableKind:"map",debugObjectName:this.tt,type:"delete",object:this,oldValue:this.Ot.get(t).gt,name:t}:null;return dn((function(){var i;n.wt.reportChanged(),null==(i=n.jt.get(t))||i.St(!1),n.Ot.get(t).St(void 0),n.Ot.delete(t);})),i&&_n(this,r),!0}return !1},i.tn=function(t,n){var i=this.Ot.get(t);if((n=i._t(n))!==qi.UNCHANGED){var r=An(this),e=r?{observableKind:"map",debugObjectName:this.tt,type:ur,object:this,oldValue:i.gt,name:t,newValue:n}:null;i.St(n),r&&_n(this,e);}},i.nn=function(t,n){var i=this;dn((function(){var r,e=new ki(n,i.Ht,"ObservableMap.key",!1);i.Ot.set(t,e),n=e.gt,null==(r=i.jt.get(t))||r.St(!0),i.wt.reportChanged();}));var r=An(this);r&&_n(this,r?{observableKind:"map",debugObjectName:this.tt,type:lr,object:this,name:t,newValue:n}:null);},i.get=function(t){return this.has(t)?this.$t(this.Ot.get(t).get()):this.$t(void 0)},i.$t=function(t){return void 0!==this.dehancer?this.dehancer(t):t},i.keys=function(){return this.wt.reportObserved(),this.Ot.keys()},i.values=function(){var t=this,n=this.keys();return Un({next:function(){var i=n.next(),r=i.done;return {done:r,value:r?void 0:t.get(i.value)}}})},i.entries=function(){var t=this,n=this.keys();return Un({next:function(){var i=n.next(),r=i.done,e=i.value;return {done:r,value:r?void 0:[e,t.get(e)]}}})},i[fr]=function(){return this.entries()},i.forEach=function(t,n){for(var i,r=A(this);!(i=r()).done;){var e=i.value;t.call(n,e[1],e[0],this);}},i.merge=function(n){var i=this;return pr(n)&&(n=new Map(n)),dn((function(){s(n)?function(t){var n=Object.keys(t);if(!ri)return n;var i=Object.getOwnPropertySymbols(t);return i.length?[].concat(n,i.filter((function(n){return Yn.propertyIsEnumerable.call(t,n)}))):n}(n).forEach((function(t){return i.set(t,n[t])})):Array.isArray(n)?n.forEach((function(t){return i.set(t[0],t[1])})):v(n)?(n.constructor!==Map&&t(19,n),n.forEach((function(t,n){return i.set(n,t)}))):null!=n&&t(20,n);})),this},i.clear=function(){var t=this;dn((function(){ot((function(){for(var n,i=A(t.keys());!(n=i()).done;)t.delete(n.value);}));}));},i.replace=function(n){var i=this;return dn((function(){for(var r,e=function(n){if(v(n)||pr(n))return n;if(Array.isArray(n))return new Map(n);if(s(n)){var i=new Map;for(var r in n)i.set(r,n[r]);return i}return t(21,n)}(n),u=new Map,o=!1,a=A(i.Ot.keys());!(r=a()).done;){var f=r.value;if(!e.has(f))if(i.delete(f))o=!0;else {var c=i.Ot.get(f);u.set(f,c);}}for(var h,l=A(e.entries());!(h=l()).done;){var d=h.value,b=d[0],y=d[1],p=i.Ot.has(b);if(i.set(b,y),i.Ot.has(b)){var m=i.Ot.get(b);u.set(b,m),p||(o=!0);}}if(!o)if(i.Ot.size!==u.size)i.wt.reportChanged();else for(var w=i.Ot.keys(),O=u.keys(),j=w.next(),g=O.next();!j.done;){if(j.value!==g.value){i.wt.reportChanged();break}j=w.next(),g=O.next();}i.Ot=u;})),this},i.toString=function(){return "[object ObservableMap]"},i.toJSON=function(){return Array.from(this)},i.ft=function(t){return gn(this,t)},i.nt=function(t){return On(this,t)},p(n,[{key:"size",get:function(){return this.wt.reportObserved(),this.Ot.size}},{key:cr,get:function(){return "Map"}}]),n}(),pr=h("ObservableMap",yr),mr={};dr=Symbol.iterator,br=Symbol.toStringTag;var wr,Or,jr=function(){function n(n,i,r){void 0===i&&(i=x),void 0===r&&(r="ObservableSet"),this.tt=void 0,this[si]=mr,this.Ot=new Set,this.dt=void 0,this.vt=void 0,this.ht=void 0,this.dehancer=void 0,this.Ht=void 0,this.tt=r,e(Set)||t(22),this.dt=S(this.tt),this.Ht=function(t,n){return i(t,n,r)},n&&this.replace(n);}var i=n.prototype;return i.$t=function(t){return void 0!==this.dehancer?this.dehancer(t):t},i.clear=function(){var t=this;dn((function(){ot((function(){for(var n,i=A(t.Ot.values());!(n=i()).done;)t.delete(n.value);}));}));},i.forEach=function(t,n){for(var i,r=A(this);!(i=r()).done;){var e=i.value;t.call(n,e,e,this);}},i.add=function(t){var n=this;if(wn(this)&&!jn(this,{type:lr,object:this,newValue:t}))return this;if(!this.has(t)){dn((function(){n.Ot.add(n.Ht(t,void 0)),n.dt.reportChanged();}));var i=An(this);i&&_n(this,i?{observableKind:"set",debugObjectName:this.tt,type:lr,object:this,newValue:t}:null);}return this},i.delete=function(t){var n=this;if(wn(this)&&!jn(this,{type:"delete",object:this,oldValue:t}))return !1;if(this.has(t)){var i=An(this),r=i?{observableKind:"set",debugObjectName:this.tt,type:"delete",object:this,oldValue:t}:null;return dn((function(){n.dt.reportChanged(),n.Ot.delete(t);})),i&&_n(this,r),!0}return !1},i.has=function(t){return this.dt.reportObserved(),this.Ot.has(this.$t(t))},i.entries=function(){var t=0,n=Array.from(this.keys()),i=Array.from(this.values());return Un({next:function(){var r=t;return t+=1,r<i.length?{value:[n[r],i[r]],done:!1}:{done:!0}}})},i.keys=function(){return this.values()},i.values=function(){this.dt.reportObserved();var t=this,n=0,i=Array.from(this.Ot.values());return Un({next:function(){return n<i.length?{value:t.$t(i[n++]),done:!1}:{done:!0}}})},i.replace=function(n){var i=this;return Ar(n)&&(n=new Set(n)),dn((function(){Array.isArray(n)||l(n)?(i.clear(),n.forEach((function(t){return i.add(t)}))):null!=n&&t("Cannot initialize set from "+n);})),this},i.ft=function(t){return gn(this,t)},i.nt=function(t){return On(this,t)},i.toJSON=function(){return Array.from(this)},i.toString=function(){return "[object ObservableSet]"},i[dr]=function(){return this.values()},p(n,[{key:"size",get:function(){return this.dt.reportObserved(),this.Ot.size}},{key:br,get:function(){return "Set"}}]),n}(),Ar=h("ObservableSet",jr),gr=Object.create(null),_r=function(){function n(t,n,i,r){void 0===n&&(n=new Map),void 0===r&&(r=vi),this.s=void 0,this.it=void 0,this.tt=void 0,this.in=void 0,this.wt=void 0,this.vt=void 0,this.ht=void 0,this.v=void 0,this.l=void 0,this.rn=void 0,this.en=void 0,this.s=t,this.it=n,this.tt=i,this.in=r,this.wt=new ai("ObservableObject.keys"),this.l=s(this.s);}var i=n.prototype;return i.yt=function(t){return this.it.get(t).get()},i.pt=function(t,n){var i=this.it.get(t);if(i instanceof Ii)return i.set(n),!0;if(wn(this)){var r=jn(this,{type:ur,object:this.v||this.s,name:t,newValue:n});if(!r)return null;n=r.newValue;}if((n=i._t(n))!==qi.UNCHANGED){var e=An(this),u=e?{type:ur,observableKind:"object",debugObjectName:this.tt,object:this.v||this.s,oldValue:i.gt,name:t,newValue:n}:null;i.St(n),e&&_n(this,u);}return !0},i.st=function(t){return qi.trackingDerivation&&!b(this.s,t)&&this.ot(t),this.s[t]},i.et=function(t,n,i){return void 0===i&&(i=!1),b(this.s,t)?this.it.has(t)?this.pt(t,n):i?Reflect.set(this.s,t,n):(this.s[t]=n,!0):this.o(t,{value:n,enumerable:!0,writable:!0,configurable:!0},this.in,i)},i.ot=function(t){if(!qi.trackingDerivation)return t in this.s;this.en||(this.en=new Map);var n=this.en.get(t);return n||(n=new ki(t in this.s,M,"ObservableObject.key?",!1),this.en.set(t,n)),n.get()},i.u=function(n,i){if(!0===i&&(i=this.in),!1!==i){if(!(n in this.s)){var r;if(null==(r=this.s[oi])?void 0:r[n])return;t(1,i.t,this.tt+"."+n.toString());}for(var e=this.s;e&&e!==Yn;){var u=$n(e,n);if(u){var o=i.u(this,n,u,e);if(0===o)return;if(1===o)break}e=Object.getPrototypeOf(e);}Kn(this,0,n);}},i.o=function(t,n,i,r){if(void 0===r&&(r=!1),!0===i&&(i=this.in),!1===i)return this.h(t,n,r);var e=i.o(this,t,n,r);return e&&Kn(this,0,t),e},i.h=function(t,n,i){void 0===i&&(i=!1);try{pt();var r=this.ut(t);if(!r)return r;if(wn(this)){var e=jn(this,{object:this.v||this.s,name:t,type:lr,newValue:n.value});if(!e)return null;var u=e.newValue;n.value!==u&&(n=m({},n,{value:u}));}if(i){if(!Reflect.defineProperty(this.s,t,n))return !1}else Jn(this.s,t,n);this.un(t,n.value);}finally{mt();}return !0},i.m=function(t,n,i,r){void 0===r&&(r=!1);try{pt();var e=this.ut(t);if(!e)return e;if(wn(this)){var u=jn(this,{object:this.v||this.s,name:t,type:lr,newValue:n});if(!u)return null;n=u.newValue;}var o=Tn(t),s={configurable:!qi.safeDescriptors||this.l,enumerable:!0,get:o.get,set:o.set};if(r){if(!Reflect.defineProperty(this.s,t,s))return !1}else Jn(this.s,t,s);var a=new ki(n,i,"ObservableObject.key",!1);this.it.set(t,a),this.un(t,a.gt);}finally{mt();}return !0},i.p=function(t,n,i){void 0===i&&(i=!1);try{pt();var r=this.ut(t);if(!r)return r;if(wn(this)&&!jn(this,{object:this.v||this.s,name:t,type:lr,newValue:void 0}))return null;n.name||(n.name="ObservableObject.key"),n.context=this.v||this.s;var e=Tn(t),u={configurable:!qi.safeDescriptors||this.l,enumerable:!1,get:e.get,set:e.set};if(i){if(!Reflect.defineProperty(this.s,t,u))return !1}else Jn(this.s,t,u);this.it.set(t,new Ii(n)),this.un(t,void 0);}finally{mt();}return !0},i.ut=function(t,n){if(void 0===n&&(n=!1),!b(this.s,t))return !0;if(wn(this)&&!jn(this,{object:this.v||this.s,name:t,type:"remove"}))return null;try{var i,r;pt();var e,u=An(this),o=this.it.get(t),s=void 0;if(!o&&u&&(s=null==(e=$n(this.s,t))?void 0:e.value),n){if(!Reflect.deleteProperty(this.s,t))return !1}else delete this.s[t];o&&(this.it.delete(t),o instanceof ki&&(s=o.gt),Ot(o)),this.wt.reportChanged(),null==(i=this.en)||null==(r=i.get(t))||r.set(t in this.s),u&&u&&_n(this,{type:"remove",observableKind:"object",object:this.v||this.s,debugObjectName:this.tt,oldValue:s,name:t});}finally{mt();}return !0},i.ft=function(t){return gn(this,t)},i.nt=function(t){return On(this,t)},i.un=function(t,n){var i,r,e=An(this);e&&e&&_n(this,e?{type:lr,observableKind:"object",debugObjectName:this.tt,object:this.v||this.s,name:t,newValue:n}:null),null==(i=this.en)||null==(r=i.get(t))||r.set(!0),this.wt.reportChanged();},i.at=function(){return this.wt.reportObserved(),ei(this.s)},i.rt=function(){return this.wt.reportObserved(),Object.keys(this.s)},n}(),Sr=h("ObservableObjectAdministration",_r),xr=0,Mr=function(){};wr=Mr,Or=Array.prototype,Object.setPrototypeOf?Object.setPrototypeOf(wr.prototype,Or):void 0!==wr.prototype.__proto__?wr.prototype.__proto__=Or:wr.prototype=Or;var Rr=function(t){function n(n,i,r,e){var u;void 0===r&&(r="ObservableArray"),void 0===e&&(e=!1),u=t.call(this)||this;var o=new sr(r,i,e,!0);if(o.v=O(u),c(O(u),si,o),n&&n.length){var s=Z(!0);u.spliceWithArray(0,0,n),tt(s);}return u}w(n,t);var i=n.prototype;return i.concat=function(){this[si].dt.reportObserved();for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return Array.prototype.concat.apply(this.slice(),n.map((function(t){return En(t)?t.slice():t})))},i[Symbol.iterator]=function(){var t=this,n=0;return Un({next:function(){return n<t.length?{value:t[n++],done:!1}:{done:!0,value:void 0}}})},p(n,[{key:"length",get:function(){return this[si].Ft()},set:function(t){this[si].Xt(t);}},{key:Symbol.toStringTag,get:function(){return "Array"}}]),n}(Mr);Object.entries(ar).forEach((function(t){var n=t[0];"concat"!==n&&f(Rr.prototype,n,t[1]);})),Pn(1e3);var Vr=Yn.toString;["Symbol","Map","Set"].forEach((function(i){void 0===n()[i]&&t("MobX requires global '"+i+"' to be available or polyfilled");})),"object"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:_t,extras:{getDebugName:qn},$mobx:si});

    const makeAutoObservable = xn;

    class State {
        username;
        constructor() {
            this.username = 'Guest';
            makeAutoObservable(this);
        }
    }

    var state = new State();

    // components bundles

    initializeLayout();

    window.App = {
        name: 'Lit-Boilerplate',
        state,
        Behavior,
        FormBehavior
        // export to global scope
    };

    namespace(window.App);

})();
//# sourceMappingURL=app.js.map
