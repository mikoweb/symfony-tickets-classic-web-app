import Behavior from './Behavior';

export default class FormBehavior extends Behavior {
    /**
     * @inheritDoc
     */
    get events() {
        return {
            submit: (event) => this._onSubmit(event),
            formdata: (event) => this._onFormData(event),
            'mwc-textfield, input': {
                keypress: (event) => this._onKeyPress(event),
            },
            '*[type="submit"]': {
                click: (event) => this._onButtonSubmit(event)
            }
        };
    }

    /**
     * @param {HTMLFormElement} form
     */
    constructor(form) {
        super(form);
        form.setAttribute('novalidate', 'novalidate');

        for (const el of form.querySelectorAll('*[invalid]')) {
            if (typeof el.reportValidity === 'function') {
                el.reportValidity();
            }
        }
    }

    /**
     * @param {HTMLFormElement} form
     * @return {FormData}
     */
    static fetchFormData(form) {
        return new FormData(form);
    }

    /**
     * @param {HTMLFormElement} form
     * @return {boolean}
     */
    static isValid(form) {
        const invalidElements = FormBehavior.validate(form);

        return form.reportValidity() && invalidElements.length === 0;
    }

    /**
     * @param {HTMLFormElement} form
     * @return {Array}
     */
    static validate(form) {
        const invalidElements = [];
        const elements = form.querySelectorAll('input, textarea, select, *[name]');

        for (const el of elements) {
            if (typeof el.reportValidity === 'function') {
                if (!el.reportValidity()) {
                    invalidElements.push(el);
                }
            }
        }

        if (invalidElements.length > 0 && typeof invalidElements[0].focus === 'function') {
            invalidElements[0].focus();
        }

        return invalidElements;
    }

    /**
     * @return {FormData}
     */
    fetchFormData() {
        return FormBehavior.fetchFormData(this.root);
    }

    /**
     * @return {boolean}
     */
    isValid() {
        return FormBehavior.isValid(this.root);
    }

    /**
     * @return {Array}
     */
    validate() {
        return FormBehavior.validate(this.root);
    }

    /**
     * @param {Event} event
     * @private
     */
    _onKeyPress(event) {
        if (event.keyCode === 13 && this.isValid()) {
            this.root.submit();
        }
    }

    /**
     * @param {Event} event
     * @private
     */
    _onButtonSubmit(event) {
        if (this.isValid()) {
            const name = event.target.getAttribute('name');

            if (name && !event.target.parentElement.querySelector(`input[name="${name}"]`)) {
                const hidden = document.createElement('input');
                hidden.hidden = true;
                hidden.name = event.target.getAttribute('name');
                hidden.value = '1';
                event.target.parentElement.appendChild(hidden);
            }

            this.root.submit();
        }
    }

    /**
     * @param {Event} event
     * @private
     */
    _onSubmit(event) {
        event.preventDefault();

        if (this.isValid()) {
            event.target.submit();
        } else {
            event.target.dispatchEvent(new CustomEvent('form-invalid', {bubbles: false}));
        }
    }

    /**
     * @param {Event} event
     * @private
     */
    _onFormData(event) {
        // const formData = event.formData;
        // formData.set('field1', 'value');

        // set the value of field manually if your custom element doesn't work with native form
    }
}
