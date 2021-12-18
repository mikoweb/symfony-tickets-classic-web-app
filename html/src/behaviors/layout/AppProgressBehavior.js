import layoutReady from '../layoutReady.js';
import Behavior from '../Behavior.js';

export default class AppProgressBehavior extends Behavior {
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
