
import { header } from './header';
import { footer } from './footer';
import './style.css';


//content div to add contents for the page
let contentDiv = document.getElementById("content");

header(contentDiv);

let buttons=document.querySelectorAll("button");

buttons.forEach( (element )=> {

    if(element.textContent == "HOME"){
        home(contentDiv);
    }
    if(element.textContent == "MENU"){
        menu(contentDiv);
    }
    if(element.textContent == "CONTACT"){
        contact(contentDiv);
    }

});

footer(contentDiv);