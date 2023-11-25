import styles from "./styles.css"

export class grid extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``
    
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    
        this.shadowRoot!.innerHTML += `
       <div id="container">
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
     </div>
       `
        }
    }
}

customElements.define('grid-container', grid);
