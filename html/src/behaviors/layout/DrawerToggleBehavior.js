import Behavior from '../Behavior.js';

export default class DrawerToggleBehavior extends Behavior {
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
