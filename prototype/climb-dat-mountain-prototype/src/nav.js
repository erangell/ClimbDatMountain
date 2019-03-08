import { LitElement, html } from '/vendor/polymer/lit-element.bundled.js'

class Nav extends LitElement {
  // Declare properties
  static get properties() {
    return {
    }
  }
  // Initialize properties
  constructor() {
    super()
  }
  // Define a template
  render() {
    return html`<div>Breadcrumbs go here</div>`
  }
}
// Register the element with the browser
customElements.define('x-nav', Nav);
