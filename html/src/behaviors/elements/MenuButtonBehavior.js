import Behavior from '../Behavior.js';

export default class MenuButtonBehavior extends Behavior {
    #menu;
    #button;

    /**
     * Event listeners.
     *
     * @return {Object.<String, Function|Object.<String, Function>>}
     */
    get events() {
        return {
            '.menu-button__button': {
                click: () => this.#onClick(),
            }
        };
    }

    /**
     * @param {HTMLElement} htmlElement
     */
    constructor(htmlElement) {
        super(htmlElement);
        this.#menu = htmlElement.querySelector('.menu-button__menu');
        this.#button = htmlElement.querySelector('.menu-button__button');
        this.#menu.anchor = this.#button;
    }

    #onClick() {
        this.#menu.show();
    }
}
