// ==UserScript==
// @name        Fallen Sword Message Alert
// @namespace   https://github.com/QuaBules/FS-messages-alert
// @include     https://fallensword.com/*
// @description an attempt to alert the player to a new message
// @author      QuaBules
// @version     1
// @grant       none
// ==/UserScript==

if(!document.getElementById("nav-character-messages").innerHTML.includes("(0)")) {
  document.getElementById("nav-character-messages").style.color="gold";
  document.getElementById("nav-box-character").style.color="black";
  document.getElementById("nav-box-character").style.background="gold";
}
var msg=document.getElementById("nav-character-messages").innerHTML.replace("Messages","");
var chr=document.getElementById("nav-character");
chr.innerHTML=chr.innerHTML.replace("Character","Character"+msg);
