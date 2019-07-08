// ==UserScript==
// @name         SSL Redirect
// @version      1.0
// @description  Redirect from HTTP to HTTPS
// @author       hemlok89
// @match        http://*/*
// @exclude      http://192.168.0.1/*
// @grant        none
// ==/UserScript==

window.location.protocol = 'https:';
