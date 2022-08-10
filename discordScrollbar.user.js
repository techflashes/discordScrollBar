// ==UserScript==
// @name         Discord Scrollbar
// @namespace    https://techflashes.pythonanywhere.com/
// @version      0.2
// @description  Creates a scrollbar for the server list
// @author       TechFlashes
// @match        *://discord.com/channels/*
// @downloadURL  https://github.com/techflashes/discordScrollBar/raw/master/discordScrollbar.user.js
// @grant        none
// ==/UserScript==


(function() {
  
const cssTemplateString = `
.fixedScrollbar::-webkit-scrollbar {
    width: 8px !important;
}
.fixedScrollbar::-webkit-scrollbar-corner {
    background-color: transparent;
}
.fixedScrollbar::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: var(--background-primary);
    min-height: 80px;
}
.fixedScrollbar::-webkit-scrollbar-track {
    border-color: transparent;
    background-color: transparent;
    border: 2px solid transparent;
}
`;
const styleTag = document.createElement("style");
styleTag.innerHTML = cssTemplateString;
document.head.insertAdjacentElement('beforeend', styleTag);

let recheckElement = setInterval(() => {
    let serverList = document.querySelector("[aria-label='Servers']");
    if (serverList && serverList.parentElement && !serverList.parentElement.classList.contains("fixedScrollbar")) {
        serverList.parentElement.classList.add("fixedScrollbar");
    }
}, 300);

})();
