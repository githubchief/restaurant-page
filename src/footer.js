const footer = (contentDiv) => {

    let footerContainer = document.createElement("div");
    footerContainer.classList = "footerContainer";
    contentDiv.appendChild(footerContainer);
    footerContainer.innerHTML = "Author: Hege Refsnes";
    

};

export { footer };


