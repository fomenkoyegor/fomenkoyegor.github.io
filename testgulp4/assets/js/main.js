"use strict";var log=function(t){return console.log(t)},links=document.querySelectorAll("header nav ul li a"),main=document.querySelector("main"),url="https://fomenkoyegor.github.io/testgulp4/static/pages/",getContent=function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"main";links.forEach(function(t,e){t.classList.remove("active"),t.dataset.src==n&&t.classList.add("active")}),main.classList.remove("show"),fetch(url+n+".html").then(function(t){return t.text()}).then(function(t){main.innerHTML="",main.innerHTML=t,main.classList.add("show")})};getContent(),links.forEach(function(t,e){return t.addEventListener("click",function(t){t.preventDefault(),getContent(t.target.dataset.src)})});var items=document.querySelectorAll(".item"),random=function(t,e){return Math.round(Math.random()*(e-t)+t)},setActiveItem=function(){items.forEach(function(t,e){t.classList.remove("show"),e==random(0,items.length-1)&&t.classList.add("show")})};setInterval(function(){return setActiveItem()},1e3);
