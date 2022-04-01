import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from '../Styles/SidebarButtonStyles.js';
import '../Styles/TypeStyle.js';

class SidebarNotification extends LitElement {
	static styles = [ SidebarButtonStyles, DarkStyles, DefaultStyles ];

	static properties = {
		toggle : { type: Boolean },
	};

	constructor () {
		super();
		this.toggle = true;
	}

	svgOutline () {
		return html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.90599 18.782 5.65599 17.247 4.10299C15.872 2.70999 14.01 1.93999 12.005 1.92999H11.992C9.98804 1.93999 8.12604 2.70999 6.75004 4.10399C5.21604 5.65699 4.38204 7.90599 4.40404 10.438C4.44104 14.768 2.38404 16.405 2.30204 16.468C2.04204 16.661 1.93604 16.998 2.03704 17.306C2.13904 17.614 2.42704 17.821 2.74904 17.821H7.66904C7.77104 20.131 9.66604 21.981 11.999 21.981C14.332 21.981 16.225 20.131 16.326 17.821H21.248C21.57 17.821 21.858 17.615 21.958 17.307C22.061 17 21.955 16.662 21.695 16.469L21.697 16.468ZM12 20.478C10.495 20.478 9.27004 19.301 9.17204 17.82H14.828C14.728 19.3 13.505 20.48 12 20.48V20.478ZM4.38004 16.32C5.12004 15.188 5.92804 13.292 5.90404 10.424C5.88604 8.26399 6.54804 6.44199 7.81704 5.15699C8.91004 4.04999 10.397 3.43699 12 3.42999C13.603 3.43799 15.087 4.04999 16.18 5.15799C17.45 6.44299 18.113 8.26399 18.095 10.425C18.071 13.293 18.88 15.19 19.62 16.321H4.38004V16.32Z" fill="black"/>
					</svg>`;
	}

	svgFilled () {
		return html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.90501 18.782 5.65601 17.247 4.10401C15.872 2.71101 14.01 1.94001 12.005 1.93201H11.992C9.98804 1.94001 8.12604 2.71201 6.75004 4.10401C5.21604 5.65701 4.38304 7.90601 4.40404 10.437C4.44104 14.769 2.38404 16.404 2.30204 16.467C2.04204 16.661 1.93604 16.997 2.03704 17.305C2.13804 17.613 2.42704 17.82 2.75004 17.82H7.24404C7.34404 20.364 9.43204 22.407 12 22.407C14.568 22.407 16.655 20.364 16.756 17.82H21.25C21.574 17.82 21.86 17.612 21.962 17.305C22.064 16.998 21.957 16.661 21.697 16.468ZM12 20.408C10.534 20.408 9.34304 19.261 9.24404 17.82H14.756C14.656 19.26 13.466 20.407 12 20.407V20.408Z" fill="black"/>
					</svg>`;
	}

	render () {
		return html`
    <div @click=${this.switchToggle}>
     ${this.toggle ? this.svgOutline() : this.svgFilled()}
     <type-style class="size-20px regular">Notification</type-style>
    </div>
    `;
	}

	switchToggle () {
		this.toggle = !this.toggle;
	}
}

customElements.define('sidebar-notification', SidebarNotification);
