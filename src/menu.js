const menu = (contentDiv, container) => {

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.innerHTML="Menu";
    contentDiv.appendChild(container);

};

export { menu };