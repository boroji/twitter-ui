import { css } from '../../lit.js';

const SidebarButtonStyles = css`
	:host,
	div {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		padding: 12px;
		border-radius: 50px;
		cursor: pointer;
		transition: all 100ms ease-out;
	}
`;

export default SidebarButtonStyles;
