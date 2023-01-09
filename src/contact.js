const contact = (contentDiv, container) => {
   
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    container.innerHTML="Contact";
    contentDiv.appendChild(container);

};

export { contact };