// fetch("/apps/vanilla-js/js/webcomponents/nav/template.html")

// const url = "./template.html";
const url = "./js/webcomponents/nav/template.html";

fetch(url, {
    mode: "no-cors"
})
    .then(stream => stream.text())
    // .then(stream => {debugger; return stream.text()})
    // .then(text => {debugger;})
    // .then(text => console.log('text', text))
    // .then(text => {debugger; return define(text)});

    .then(text => define(text));

function define(html) {
    class NavigationComponent extends HTMLElement {
        constructor() {
            super();
            // debugger;
            // const template = document.getElementById(
            //     "nav-template",
            // ).content;
            // const shadowRoot = this.attachShadow({ mode: "open" });
            // shadowRoot.appendChild(template.cloneNode(true));

            const shadowRoot = this.attachShadow({ mode: "open" });
            // shadowRoot.appendChild(html);
            // debugger;
            shadowRoot.innerHTML =  html;
        }

        connectedCallback() {
            console.log('im connected');

        }
    }

    window.customElements.define('nav-component', NavigationComponent);
}