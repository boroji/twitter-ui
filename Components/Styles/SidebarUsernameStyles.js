import { css } from '../../lit.js';

const SidebarUsernameStyles = css`
	:host,
	div {
		display: inline-flex;
		gap: 16px;
		padding: 16px;
		align-items: center;
		border-radius: 100px;
	}

	:host img {
		width: 40px;
		height: 40px;
	}

	:host section {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	:host section p {
		margin: 0;
		padding: 0;
	}

	:host(.default) section p:first-child,
	:host(.dark) section p:first-child {
		font-size: 16px;
		font-weight: var(--bold-weight);
		line-height: 16px;
		letter-spacing: 0.25px;
	}

	:host(.default) section p:last-child,
	:host(.dark) section p:last-child {
		font-size: 14px;
		font-weight: var(--regular-weight);
		line-height: 14px;
		letter-spacing: 0px;
	}

	:host(.default) section p:first-child {
		color: var(--secondary-25);
	}

	:host(.default) section p:last-child {
		color: var(--secondary-40);
	}

	:host(.dark) section p:first-child,
	:host(.dark) section p:last-child {
		color: var(--gray-100);
	}
`;

export default SidebarUsernameStyles;
