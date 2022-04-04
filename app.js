import './Components/Sidebar/SidebarHome.js';
import './Components/Sidebar/SidebarExplore.js';
import './Components/Sidebar/SidebarNotification.js';
import './Components/Sidebar/SidebarBookmark.js';
import './Components/Sidebar/SidebarList.js';
import './Components/Sidebar/SidebarMore.js';
import './Components/Sidebar/SidebarProfile.js';
import './Components/Sidebar/SidebarMoon.js';
import './Components/Sidebar/SidebarLogo.js';
import './Components/Sidebar/SidebarUsername.js';
import './Components/Button/PrimaryButton.js';
import './Components/Dropdown/DropdownTopic.js';
import './Components/Dropdown/DropdownNews.js';
import './Components/Dropdown/DropdownSpaces.js';
import './Components/Dropdown/DropdownAds.js';
import './Components/Dropdown/DropdownAnalytics.js';
import './Components/Dropdown/DropdownSettings.js';
import './Components/Dropdown/DropdownHelp.js';
import './Components/Dropdown/DropdownDisplay.js';
import './Components/Dropdown/DropdownShortcuts.js';
import './Components/Dropdown/DropdownUsername.js';
import './Components/Dropdown/DropdownText.js';
import './Components/Styles/BorderStyle.js';

const switchTheme = document.querySelectorAll('.default');
const sidebarMoon = document.querySelector('sidebar-moon');

sidebarMoon.addEventListener('click', () => {
	document.body.classList.toggle('light-theme');
	document.body.classList.toggle('dark-theme');

	switchTheme.forEach(singleElements => {
		singleElements.classList.toggle('default');
		singleElements.classList.toggle('dark');
	});
});
