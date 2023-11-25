import {grid} from "../components/grid"
class dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);



        this.shadowRoot!.innerHTML = `
        <grid-container></grid-container>
        `
    }
}

customElements.define('dashboard-container', dashboard)