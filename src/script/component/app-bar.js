class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `
        <style>
            #textLogo {
                font-family: Poppins;
                font-weight: 600;
                color: #2487ceff;
                font-size: 30px;
                margin-left: 25px;
            }
        </style>
        <a 
            href="#"
            id="textLogo"
            class="navbar-brand mb-01 h1">
            The Meals
        </a>`
        ;
    };
};

customElements.define('app-bar', AppBar);