import AbstractElement from '../AbstractElement.js';
import {html} from 'lit';
import {styles} from './styles.js';
import fileSize from 'filesize';
import '@material/mwc-button/mwc-button.js';
import '@material/mwc-icon-button/mwc-icon-button.js';

class AppFileInputElement extends AbstractElement {
    #defaultFileText = 'Nie wybrano pliku.';

    static styles = [styles];
    static properties = {
        label: {type: String},
        icon: {type: String},
        fileText: {type: String, attribute: false},
    };

    constructor() {
        super();
        this.clear();
        this.fileInput.addEventListener('change', (event) => this.#onFileChange(event));
    }

    get fileInput() {
        return this.querySelector('input[type="file"]');
    }

    render() {
        return html`
            <div class="app-file-input">
                <div class="app-file-input__native">
                    <slot></slot>
                </div>
                <div class="app-file-input__field">
                    <mwc-button
                            @click=${this.#onButtonClick}
                            raised 
                            label=${this.label}
                            icon=${this.icon}
                            class="app-file-input__button">
                    </mwc-button>
                    <mwc-icon-button
                            @click=${this.#onClearClick}
                            icon="clear"
                            class="app-file-input__clear">
                    </mwc-icon-button>
                    <span class="app-file-input__file-text">${this.fileText}</span>
                </div>
            </div>
        `;
    }

    openFileDialog() {
        this.fileInput.click();
    }

    clear() {
        this.fileInput.value = null;
        this.fileText = this.#defaultFileText;
    }

    /**
     * @param {File} file
     */
    #updateFileText(file) {
        this.fileText = `${file.name} [${fileSize(file.size)}]`;
    }

    #onButtonClick() {
        this.openFileDialog();
    }

    #onFileChange(event) {
        const input = event.target;
        const files = input.files;

        if (files.length > 0) {
            this.#updateFileText(files[0]);
            this.dispatchEvent(new CustomEvent('file-choice'));
        }
    }

    #onClearClick() {
        this.clear();
    }
}

customElements.define('app-file-input', AppFileInputElement);
