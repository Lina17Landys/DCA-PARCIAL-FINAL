export class colorLetter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
       this.shadowRoot!.innerHTML = `
       <h1> Pick a color</h1>
       <input type="color"/>

       <input type="text"/>
       `
    }
}

customElements.define('colorLetter', colorLetter);
