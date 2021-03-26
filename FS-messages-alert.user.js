// ==UserScript==
// @name        Fallen Sword Message Alert
// @namespace   Fallen Sword Message Alert
// @include     https://fallensword.com/*
// @author      QuaBules
// @version     1
// @grant       none
// ==/UserScript==

if(!document.getElementById("nav-character-messages").innerHTML.includes("(0)")) {
  document.getElementById("nav-character-messages").style.color="gold";
  document.getElementById("nav-box-character").style.color="black";
  document.getElementById("nav-box-character").style.background="gold";
}
msg=document.getElementById("nav-character-messages").innerHTML.replace("Messages","");
chr=document.getElementById("nav-character");
chr.innerHTML=chr.innerHTML.replace("Character","Character"+msg);
