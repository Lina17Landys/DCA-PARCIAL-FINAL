import { colorLetter } from "../components/inputs";
import styles from "./styles.css"

export default class login extends HTMLElement {
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
       
        <h1>Welcome, pick a color and letter!<h1>
        <input type="color"/>
 
        <input type="text" id="letter"/>
 
     <button>Next</button>
        `
    }
}
}

customElements.define('login-form', login)