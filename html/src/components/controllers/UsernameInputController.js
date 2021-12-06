import state from '../../core/state.js';
import {autorun} from '../../core/mobx.js';

export default class {
    #host;
    username;

    constructor(host) {
        (this.#host = host).addController(this);
    }

    hostConnected() {
        this.#host.addEventListener('username-change', (event) => {
            state.username = event.detail.value;
        })

        autorun(() => {
            this.username = state.username;
            this.#host.requestUpdate();
        });
    }
}
