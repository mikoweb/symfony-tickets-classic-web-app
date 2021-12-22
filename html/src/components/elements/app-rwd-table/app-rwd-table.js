import AbstractElement from '../AbstractElement.js';
import BasicTable from '../../../lib/basictable.js';
import {html} from 'lit';

class AppRWDTableElement extends AbstractElement {
    constructor() {
        super();
        new BasicTable(this.querySelectorAll('table'), {
            breakpoint: 768,
        });
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}

customElements.define('app-rwd-table', AppRWDTableElement);
