import { LitElement, html } from '../../lit.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class AnalyticsIcon extends LitElement {
	static styles = [ SidebarButtonStyles, PrimaryStyles ];

	render () {
		return html`
    <div>
     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1672 6.87H14.166C14.1773 6.8025 14.187 6.7335 14.187 6.66225V4.9275C14.187 4.1925 13.5893 3.59475 12.8535 3.59475H2.625V2.5185C2.625 2.208 2.373 1.956 2.0625 1.956C1.752 1.956 1.5 2.208 1.5 2.5185V15.6225C1.5 15.9338 1.752 16.185 2.0625 16.185C2.373 16.185 2.625 15.9338 2.625 15.6225V14.547H10.542C11.277 14.547 11.8755 13.9493 11.8755 13.2143V11.4795C11.8755 11.4083 11.865 11.3393 11.8545 11.271H15.1672C15.9022 11.271 16.5007 10.6725 16.5007 9.9375V8.205C16.5007 7.46775 15.903 6.87 15.1672 6.87ZM12.855 4.71975C12.969 4.71975 13.0627 4.81275 13.0627 4.9275V6.66C13.0627 6.7755 12.969 6.87 12.8542 6.87H2.625V4.7175H12.855V4.71975ZM10.7498 11.4803V13.2143C10.7498 13.329 10.656 13.422 10.5413 13.422H2.625V11.271H10.542C10.6567 11.271 10.7498 11.3655 10.7498 11.481V11.4803ZM15.375 9.9375C15.375 10.0523 15.2813 10.1453 15.1665 10.1453H2.625V7.995H15.1665C15.2813 7.995 15.375 8.088 15.375 8.20275V9.9375Z" fill="#1D98F0"/>
      </svg>
    </div>
    `;
	}
}
customElements.define('analytics-icon', AnalyticsIcon);
