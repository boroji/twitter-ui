import { LitElement, html, css } from '../../lit.js';

class TypeStyle extends LitElement {
	static properties = {
		textValue : { type: String, attribute: 'label' },
	};

	constructor () {
		super();
		this.textValue = 'Default Value';
	}

	static styles = [
		css`
			:host,
			p {
				padding: 0;
				margin: 0;
				font-style: normal;
				text-decoration: none;
			}

			:host(.default) {
				color: var(--secondary-15);
			}

			:host(.dark) {
				color: var(--gray-100);
			}

			:host(.gray) {
				color: var(--gray-40);
			}

			:host(.success) {
				color: var(--success-35);
			}

			:host(.successDark) {
				color: var(--success-60);
			}

			:host(.alert) {
				color: var(--alert-50);
			}

			:host(.alertDark) {
				color: var(--alert-70);
			}

			:host(.primary) {
				color: var(--primary-50);
			}

			:host(.primaryDark) {
				color: var(--primary-70);
			}

			:host(.regular) {
				font-weight: var(--regular-weight);
			}

			:host(.bold) {
				font-weight: var(--bold-weight);
			}

			:host(.size-20px) {
				font-size: 20px;
				line-height: 20px;
				letter-spacing: 0;
			}

			:host(.size-16px) {
				font-size: 16px;
				line-height: 16px;
				letter-spacing: 0.25px;
			}

			:host(.size-14px) {
				font-size: 14px;
				line-height: 14px;
				letter-spacing: 0.25px;
			}

			:host(.size-16px-body) {
				font-size: 16px;
				line-height: 20px;
				letter-spacing: 0.25px;
			}

			:host(.size-14px-body) {
				font-size: 14px;
				line-height: 16px;
				letter-spacing: 0.25px;
			}
		`,
	];

	render () {
		return html`
     <p label=${this.textValue}>
					<slot>${this.textValue}</slot>
     </p>
     `;
	}
}
customElements.define('type-style', TypeStyle);
