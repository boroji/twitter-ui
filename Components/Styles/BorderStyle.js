import { LitElement, html, css } from '../../lit.js';

class BorderStyle extends LitElement {
	static styles = [
		css`
			:host(.dark) svg rect {
				fill: var(--secondary-25);
			}

			:host(.default) svg rect {
				fill: var(--gray-95);
			}
		`,
	];

	render () {
		return html`
    <svg width="320" height="1" viewBox="0 0 320 1" fill="none" xmlns="http://www.w3.org/2000/svg">
     <rect width="320" height="1" fill="#F2F2F2"/>
    </svg>

    `;
	}
}

customElements.define('border-style', BorderStyle);
