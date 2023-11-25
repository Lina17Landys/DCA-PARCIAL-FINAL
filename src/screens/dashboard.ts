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
        `
    }
}

customElements.define('dashboard-container', dashboard)