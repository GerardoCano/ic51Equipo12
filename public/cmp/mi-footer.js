class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `<b>Grupo IC-51M Equipo 12</b>`;
    }
}
customElements.define("mi-footer", MiFooter);