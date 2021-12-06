import {expect} from '@esm-bundle/chai';
import {html} from 'lit';
import {fixture} from '@open-wc/testing';
import AbstractElement from '../src/components/elements/AbstractElement';

describe('Lit Element Test', () => {
    it('Define new element, create and check content', () => {
        return new Promise(async (resolve, reject) => {
            class TestLitElement extends AbstractElement {
                render() {
                    return html`
                        <p class="paragraph">Lorem Ipsum</p>
                    `;
                }
            }

            customElements.define('test-lit-element', TestLitElement);

            try {
                const el = await fixture(html`<test-lit-element></test-lit-element>`);
                expect(el.shadowRoot.querySelector('.paragraph').textContent).to.equal('Lorem Ipsum');
                resolve();
            } catch (error) {
                reject(error)
            }
        });
    });
});
