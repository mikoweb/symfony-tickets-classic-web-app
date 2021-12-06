import AbstractElement from '../AbstractElement.js';
import {html} from 'lit';
import {styles} from './styles.js';
import {sharedStyles} from '../../style-modules/shared-styles.js';
import UsernameDisplayController from '../../controllers/UsernameDisplayController.js';

class AppUsernameDisplayElement extends AbstractElement {
    static styles = [sharedStyles, styles];
    usernameDisplay = new UsernameDisplayController(this);

    render() {
        return html`
            <span class="app-username-display">
                Hello ${this.usernameDisplay.username}!
            </span>
        `;
    }
}

customElements.define('app-username-display', AppUsernameDisplayElement);
