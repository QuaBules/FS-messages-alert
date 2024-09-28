// ==UserScript==
// @name        Fallen Sword Message Alert
// @namespace   https://github.com/QuaBules/FS-messages-alert
// @match     https://fallensword.com/*
// @match     https://www.fallensword.com/*
// @description an attempt to alert the player to a new message
// @author      QuaBules
// @version     1.1
// @grant       none
// ==/UserScript==

if(!document.getElementById("nav-character-messages").innerHTML.includes("(0)")) {//          if the number of messages is not zero,
  document.getElementById("nav-character-messages").style.color="gold";//                     change color to yellow,
  document.getElementById("nav-box-character").style.color="black";//                         then change text color in character tab
  document.getElementById("nav-box-character").style.background="gold";//                     and add yellow background
}
var msg=document.getElementById("nav-character-messages").innerHTML.replace("Messages",""); //take the number of messages
var chr=document.getElementById("nav-character");
chr.innerHTML=chr.innerHTML.replace("Character","Character"+msg);//                           and add it to character tab
