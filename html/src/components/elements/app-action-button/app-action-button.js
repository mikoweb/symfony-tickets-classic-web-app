import AbstractElement from '../AbstractElement.js';
import {html} from 'lit';
import {styles} from './styles.js';
import '@material/mwc-ripple/mwc-ripple.js';
import '@material/mwc-icon/mwc-icon.js';
import RippleBehavior from '../../../behaviors/elements/RippleBehavior.js';

class AppActionButtonElement extends AbstractElement {
    static styles = [styles];
    static properties = {
        icon: {type: String},
    };

    render() {
        return html`
            <button class="app-action-button">
                <mwc-ripple primary></mwc-ripple>
                ${this.icon
                    ? html`
                        <mwc-icon class="app-action-button__icon">
                            ${this.icon}
                        </mwc-icon>`
                    : html``
                }
                <span class="app-action-button__label">
                    <slot></slot>
                </span>
            </button>
        `;
    }

    update(changed) {
        super.update(changed);
        new RippleBehavior(this.shadowRoot.querySelector('mwc-ripple'));
    }
}

customElements.define('app-action-button', AppActionButtonElement);
