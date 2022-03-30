import { LitElement, html, css } from '../../lit.js';

class SidebarHome extends LitElement {
	static styles = [
		css`
			:host,
			div {
				display: inline-flex;
				align-items: center;
				gap: 12px;
				padding: 12px;
				border-radius: 50px;
				font-size: 20px;
				font-style: normal;
				font-weight: var(--regular-weight);
				line-height: 20px;
				letter-spacing: 0px;
			}

			/* Default Styles */

			:host(.default) svg path {
				fill: var(--secondary-15);
			}

			:host(.default) {
				background-color: var(--gray-100);
				color: var(--secondary-15);
			}

			:host(.default:hover) {
				background-color: var(--primary-98);
			}

			:host(.default.active) {
				background-color: var(--primary-90);
			}

			/* Dark Styles */

			:host(.dark) svg path {
				fill: var(--gray-100);
			}

			:host(.dark) {
				background-color: var(--transparent-0);
				color: var(--gray-100);
			}

			:host(.dark:hover) {
				background-color: var(--transparent-10);
			}

			:host(.dark.active) {
				background-color: var(--transparent-25);
			}
		`,
	];

	render () {
		return html`
    <div>
     <p>Home</p>
     <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
     >
      <path
       d='M22.46 7.56999L12.357 2.11499C12.134 1.99499 11.867 1.99499 11.644 2.11499L1.54299 7.56999C1.17899 7.76699 1.04299 8.22199 1.23999 8.58699C1.37499 8.83699 1.63399 8.97999 1.89999 8.97999C2.01999 8.97999 2.14299 8.94999 2.25599 8.88999L3.07099 8.44999L4.69999 19.963C4.91399 21.178 6.00799 22.025 7.35799 22.025H16.64C17.992 22.025 19.085 21.177 19.303 19.938L20.929 8.44799L21.747 8.88999C22.111 9.08299 22.567 8.95 22.764 8.586C22.96 8.22299 22.824 7.76799 22.46 7.56999ZM17.822 19.703C17.715 20.309 17.119 20.525 16.642 20.525H7.35999C6.87999 20.525 6.28499 20.309 6.18199 19.727L4.47999 7.68999L12 3.62799L19.522 7.68799L17.822 19.703ZM8.21999 12.184C8.21999 14.268 9.91499 15.964 12 15.964C14.085 15.964 15.78 14.268 15.78 12.184C15.78 10.1 14.085 8.40399 12 8.40399C9.91499 8.40399 8.21999 10.1 8.21999 12.184ZM14.28 12.184C14.28 13.442 13.258 14.464 12 14.464C10.742 14.464 9.71999 13.442 9.71999 12.184C9.71999 10.926 10.742 9.904 12 9.904C13.258 9.904 14.28 10.926 14.28 12.184Z'
       fill='#172936'
      />
     </svg>
    </div>
    `;
	}
}

customElements.define('sidebar-home', SidebarHome);
