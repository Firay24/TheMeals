class AppFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `
        <style>
            footer {
                height: 80px;
            }
        </style>
        
        <a 
            href="#"
            id="textLogo"
            class="navbar-brand mb-01 h1">
            The Meals
        </a>
        <p>© 2022 All Rights Reserved. The Meals</a></p>
        `;
    };
};

customElements.define('app-footer', AppFooter);