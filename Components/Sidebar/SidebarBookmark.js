import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from '../Styles/SidebarButtonStyles.js';

class SidebarBookmark extends LitElement {
	static styles = [ SidebarButtonStyles, DarkStyles, DefaultStyles ];

	static properties = {
		toggle : { type: Boolean },
	};

	constructor () {
		super();
		this.toggle = true;
	}

	render () {
		// SVG Render with Outline Icon
		return this.toggle
			? html`
    <div @click=${this.switchToggle}>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M19.9 23.5C19.743 23.5 19.588 23.45 19.458 23.356L12 17.928L4.54198 23.358C4.31398 23.522 4.01198 23.548 3.75998 23.418C3.50998 23.291 3.34998 23.033 3.34998 22.751V5.60001C3.34998 4.36001 4.35998 3.35001 5.59998 3.35001H18.398C19.638 3.35001 20.648 4.36001 20.648 5.60001V22.75C20.648 23.032 20.49 23.29 20.238 23.418C20.132 23.473 20.015 23.5 19.898 23.5H19.9ZM12 16.25C12.155 16.25 12.31 16.298 12.44 16.394L19.15 21.277V5.60001C19.15 5.18801 18.813 4.85001 18.4 4.85001H5.59998C5.18698 4.85001 4.84998 5.18801 4.84998 5.60001V21.277L11.56 16.394C11.69 16.298 11.845 16.25 12 16.25Z" fill="black"/>
					</svg>
     <p>Bookmark</p>
    </div>
    `
			: // SVG Render with Filled Icon
				html`
    <div @click=${this.switchToggle}>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M19.9 23.5C19.7 23.5 19.6 23.5 19.5 23.4L12 17.9L4.49999 23.3C4.29999 23.5 3.99999 23.5 3.69999 23.4C3.49999 23.3 3.29999 23 3.29999 22.7V5.59999C3.29999 4.39999 4.29999 3.39999 5.49999 3.39999H18.3C19.5 3.39999 20.5 4.39999 20.5 5.59999V22.7C20.5 23 20.3 23.2 20.1 23.4C20.1 23.5 20 23.5 19.9 23.5Z" fill="black"/>
					</svg>
     <p>Bookmark</p>
    </div>
    `;
	}

	switchToggle () {
		this.toggle = !this.toggle;
	}
}

customElements.define('sidebar-bookmark', SidebarBookmark);
