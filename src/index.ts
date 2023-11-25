import "./components/export"
import "./screens/exports"
import "./screens/login"
import "./screens/dashboard"
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
        <dashboard-container></dashboard-container>
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