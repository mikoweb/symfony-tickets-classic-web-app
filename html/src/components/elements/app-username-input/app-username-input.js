import AbstractElement from '../AbstractElement.js';
import {html} from 'lit';
import {styles} from './styles.js';
import {sharedStyles} from '../../style-modules/shared-styles.js';
import '@material/mwc-textfield/mwc-textfield.js';
import UsernameInputController from '../../controllers/UsernameInputController.js';

class AppUsernameInputElement extends AbstractElement {
    static styles = [sharedStyles, styles];
    usernameDisplay = new UsernameInputController(this);

    render() {
        return html`
            <div class="app-username-input">
                <mwc-textfield label="Username" 
                               .value=${this.usernameDisplay.username} 
                               @input=${this.#onInput}></mwc-textfield>
            </div>
        `;
    }

    /**
     * @param {Event} event
     * @protected
     */
    #onInput(event) {
        this.dispatchEvent(new CustomEvent('username-change', {
            detail: {value: event.target.value},
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('app-username-input', AppUsernameInputElement);
