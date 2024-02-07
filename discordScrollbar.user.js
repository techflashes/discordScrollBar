// ==UserScript==
// @name         Discord Scrollbar
// @namespace    https://techflashes.pythonanywhere.com/
// @version      1.0
// @description  Creates a scrollbar for the server list
// @author       TechFlashes
// @match        *://discord.com/channels/*
// @downloadURL  https://github.com/techflashes/discordScrollBar/raw/master/discordScrollbar.user.js
// @updateURL  https://github.com/techflashes/discordScrollBar/raw/master/discordScrollbar.user.js
// @grant        none
// ==/UserScript==

(function() {
	const cssTemplateString = `
	div[class*='none_']{
		scrollbar-width: thin !important;
		scrollbar-color: var(--bg-overlay-3,var(--background-secondary))var(--scrollbar-thin-track);
	}
	div[class*='none_']::-webkit-scrollbar {
		width: 8px !important;
	}
	div[class*='none_']::-webkit-scrollbar-corner {
		background-color: transparent !important;
	}
	div[class*='none_']::-webkit-scrollbar-thumb {
		background-clip: padding-box !important;
		border: 2px solid transparent !important;
		border-radius: 4px !important;
		background-color: var(--scrollbar-thin-thumb) !important;
		min-height: 40px !important;
	}
	div[class*='none_']::-webkit-scrollbar-track {
		visibility: hidden !important;
	}
	`;
	const styleTag = document.createElement("style");
	styleTag.innerHTML = cssTemplateString;
	document.head.insertAdjacentElement('beforeend', styleTag);
})();
