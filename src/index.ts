import "./components/export"
import "./screens/exports"
class AppContainer extends HTMLElement {
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
        <dashboard-container></dashboard-container>

       <h1>Welcome, pick a color and letter<h1>
       <input type="color"/>

       <input type="text"/>

       <button>Next</button>
        `
    }
}

customElements.define('app-container', AppContainer)