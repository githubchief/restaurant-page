
import { header } from './header';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';
import { footer } from './footer'; 

import './style.css';


//content div to add contents for the page
let contentDiv = document.getElementById("content");
let container = document.createElement("div");
container.className = "container";
header(contentDiv);

let buttons=document.querySelectorAll("button");
home(contentDiv, container);

buttons.forEach( (element )=> {
    
    if(element.textContent == " HOME "){
        element.addEventListener("click", () => {
            home(contentDiv, container);
            //footer(contentDiv);
    });}
    if(element.textContent == " MENU "){
        element.addEventListener("click", () => {
            menu(contentDiv, container);
            //footer(contentDiv);
    });}
    if(element.textContent == " CONTACT "){
        element.addEventListener("click", () => {
            contact(contentDiv, container);
            //footer(contentDiv);
    });}

});

footer(contentDiv);