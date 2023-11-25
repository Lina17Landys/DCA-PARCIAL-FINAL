import { colorLetter } from "../components/inputs";


export default class dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot!.innerHTML = `
        <colorLetter></colorLetter>
        `
    }
}

customElements.define('dashboard-container', dashboard)