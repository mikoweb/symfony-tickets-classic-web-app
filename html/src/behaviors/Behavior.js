import Delegate from 'ftdomdelegate/main.js';

export default class Behavior {
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
                    default:
                }
            }
        }
    }
}
