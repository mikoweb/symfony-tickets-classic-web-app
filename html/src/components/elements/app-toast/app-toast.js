import AbstractElement from '../AbstractElement.js';
import {Notyf} from 'notyf';

class AppToastElement extends AbstractElement {
    static properties = {
        duration: {type: Number},
        positionX: {type: String, attribute: 'position-x'},
        positionY: {type: String, attribute: 'position-y'},
        dismissible: {type: Boolean},
        message: {type: String},
        type: {type: String},
    };

    static notyf = new Notyf({
        types: [
            {
                type: 'warning',
                className: 'toast-warning',
                background: 'var(--toast-background)',
            },
            {
                type: 'message',
                className: 'toast-message',
                background: 'var(--toast-background)',
            },
            {
                type: 'info',
                className: 'toast-info',
                background: 'var(--toast-background)',
            },
            {
                type: 'error',
                className: 'toast-error',
                background: 'var(--toast-background)',
            },
            {
                type: 'success',
                className: 'toast-success',
                background: 'var(--toast-background)',
            }
        ]
    });

    constructor() {
        super();
        this.duration = 5000;
        this.positionX = 'right';
        this.positionY = 'bottom';
        this.dismissible = false;
        this.type = 'message';
    }

    update(changed) {
        super.update(changed);

        AppToastElement.notyf.open({
            duration: this.duration,
            position: {x: this.positionX, y: this.positionY},
            dismissible: this.dismissible,
            type: this.type,
            message: this.message,
        });
    }
}

customElements.define('app-toast', AppToastElement);
