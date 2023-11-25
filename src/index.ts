import "./components/export"
import "./screens/exports"
import "./screens/login"
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
        <login-form></login-form>
        `

       // switch (key) {
       //     case value:
                
      //          break;
        
     //       default:
      //          break;
      //  }
    }
}

customElements.define('app-container', AppContainer)