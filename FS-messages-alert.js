// ==UserScript==
// @name        FS
// @namespace   FS
// @include     https://fallensword.com/*
// @version     1
// @grant       none
// ==/UserScript==

if(!document.getElementById("nav-character-messages");.innerHTML.includes("(0)")) {
  document.getElementById("nav-character-messages");.style.color="gold";
  document.getElementById("nav-box-character").style.color="black";
  document.getElementById("nav-box-character").style.background="gold";
}
