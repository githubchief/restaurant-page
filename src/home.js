const home = (contentDiv, container) => {
    
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
        container.innerHTML="HOME";
        contentDiv.appendChild(container);
    


};

export { home };