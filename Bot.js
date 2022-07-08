// ==UserScript==
// @name         Google-Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  For google
// @author       Sergey Chizhikov
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @match        https://kiteuniverse.ru/*
// @match        https://motoreforma.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let sites = {
  "napli.ru":["10 самых популярных шрифтов от Google", "вывод произвольных полей wordpress", "Отключение редакций и ревизий в Wordpress",],
  "kiteuniverse.ru":["Шоу воздушных змеев", "Kite Universe", "красота, грация, интеллект"],
  "motoreforma.com":["мотореформа", "прошивки для CAN-AM", "тюнинг Maverick X3"]
}

let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
let keywords = sites[site];
let keyword = keywords[getRandom(0, keywords.length)];

let links = document.links;
let googleInput = document.getElementsByName("q")[0];
let btnK = document.getElementsByName("btnK")[0];

if (btnK !== undefined) {
  document.cookie = `site=${site}`;
}else if (location.hostname == "www.google.com"){
  site = getCookie("site");
} else {
  site = location.hostname;
}


if (btnK !== undefined) {
  let i = 0;
  let timerId = setInterval(() => {
    googleInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      btnK.click();
    }
  }, 700);
} else if (location.hostname == site) {
  //console.log("Мы на napli.ru");
  setInterval(() => {
    let index = getRandom(0, links.length);

    if (getRandom(0, 101) >= 70) {
      location.href = "https://www.google.com/";
    } else if (links[index].href.indexOf(site) !== -1){
      //console.log(links);
      links[index].click();}
  }, getRandom(2000, 5000));
} else {
  let nextGooglePage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes(site)) {
      let link = links[i];
      nextGooglePage = false;
      console.log("Нашел строку " + links[i]);
      setTimeout(() => {
        link.click();
      }, getRandom(2000, 5000));

      break;
    }
  }
  if (document.querySelector(".YyVfkd").innerText == "5") {
    nextGooglePage = false;
    location.href = "https://www.google.com/";
  }
  if (nextGooglePage) {
    setTimeout(() => {
      pnnext.click();
    }, getRandom(3000, 7000));
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
