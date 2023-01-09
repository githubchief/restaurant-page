//HTML element where all other elements are appended by js
const header = (contentDiv) => {
    
    let headerContainer = document.createElement("div");
    contentDiv.appendChild(headerContainer);
    headerContainer.classList = "headerContainer";

    //appending logo to contentDiv as child
    let headerLogo = document.createElement("div");
    headerLogo.innerHTML = "<h1> Thalapakatti </h1>";    
    headerContainer.appendChild(headerLogo);


    //container to hold buttons
    let headerNavContainer = document.createElement("div");
    headerNavContainer.classList = "headerNavContainer";
    //home, menu and contact buttons
    headerNavContainer.innerHTML = "<button> HOME </button>";
    headerNavContainer.innerHTML += "<button> MENU </button>";
    headerNavContainer.innerHTML += "<button> CONTACT </button>";
    headerContainer.appendChild(headerNavContainer);
    

};

export {header};
