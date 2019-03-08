import { LitElement, html } from '/vendor/polymer/lit-element.bundled.js'

class Links extends LitElement {
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
    return html`<div>
Learning Paths Go Here:
<li><a href="lesson1.html">Visual</a>
<li><a href="lesson1.html">Auditory</a>

    </div>`
  }
}
// Register the element with the browser
customElements.define('x-links', Links);
