import Behavior from '../Behavior.js';

export default class AppDrawerBehavior extends Behavior {
    /**
     * @param {Drawer} drawer
     */
    constructor(drawer) {
        super(drawer);
        window.addEventListener('resize', () => this.#onWindowResize());
        this.#onWindowResize();
    }

    get topBarContentElement() {
        return this.root.querySelector('.app-top-bar__content');
    }

    get topBarElement() {
        return this.root.querySelector('.app-top-bar');
    }

    #onWindowResize() {
        const topBarWidth = this.topBarElement.offsetWidth;
        let topBarContentWidth;

        if (window.innerWidth > 992) {
            this.root.removeAttribute('type');
            topBarContentWidth = topBarWidth - 40;
        } else {
            this.root.setAttribute('type', 'modal');
            topBarContentWidth = window.innerWidth > 576 ? topBarWidth - 95 : topBarWidth - 70;
        }

        this.topBarContentElement.style.width = topBarContentWidth + 'px';
    }
}
