import { LitElement, html } from '../../lit.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class RetweetIcon extends LitElement {
	static styles = [ SidebarButtonStyles, SuccessStyles ];

	render () {
		return html`
    <div>
     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.8275 11.7525C17.6085 11.5327 17.2522 11.5327 17.0325 11.7525L15.3675 13.4175V5.7375C15.3675 4.1865 14.1052 2.925 12.555 2.925H8.16748C7.85698 2.925 7.60498 3.177 7.60498 3.4875C7.60498 3.798 7.85698 4.05 8.16748 4.05H12.555C13.485 4.05 14.2425 4.8075 14.2425 5.7375V13.4175L12.5775 11.7525C12.3577 11.5327 12.0015 11.5327 11.7825 11.7525C11.5635 11.9722 11.562 12.3285 11.7825 12.5475L14.4075 15.1725C14.5162 15.2827 14.6602 15.3375 14.805 15.3375C14.9497 15.3375 15.0922 15.2835 15.2025 15.1725L17.8275 12.5475C18.048 12.3285 18.048 11.9722 17.8275 11.7525ZM9.83398 14.2125H5.44498C4.51498 14.2125 3.75748 13.455 3.75748 12.525V4.845L5.42248 6.51C5.53348 6.62025 5.67748 6.675 5.82148 6.675C5.96548 6.675 6.10948 6.62025 6.21898 6.51C6.43873 6.29025 6.43873 5.934 6.21898 5.715L3.59398 3.09C3.37423 2.8695 3.01798 2.8695 2.79898 3.09L0.173981 5.715C-0.046519 5.934 -0.046519 6.29025 0.173981 6.51C0.394481 6.72975 0.749231 6.72975 0.968981 6.51L2.63398 4.845V12.525C2.63398 14.076 3.89623 15.3375 5.44648 15.3375H9.83398C10.1445 15.3375 10.3965 15.0855 10.3965 14.775C10.3965 14.4645 10.1437 14.2125 9.83398 14.2125Z" fill="#666666"/>
    </svg>
    </div>
    `;
	}
}
customElements.define('retweet-icon', RetweetIcon);
