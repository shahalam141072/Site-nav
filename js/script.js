$(function(){
// humburger js code:
var ham = document.querySelector('.navbar_hamburger');
var nav_menu = document.querySelector('#nav_menu');
var nav_close_btn = document.querySelector('.nav_close_btn');

ham.addEventListener("click",function(){
    nav_menu.style.visibility ="visible";
    nav_menu.style.opacity = "1";
    nav_menu.style.left = "0";
});


nav_close_btn.addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.style.opacity = "0";
    nav_menu.style.left = "100%";
});







});