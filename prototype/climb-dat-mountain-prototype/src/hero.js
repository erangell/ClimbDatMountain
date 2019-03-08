import { LitElement, html } from '/vendor/polymer/lit-element.bundled.js'

class Hero extends LitElement {
   // Declare properties
 static get properties() {
  return { pageTitle : String
         , pageDesc : String
   }
}
 
  // Define a template
  render() {
    return html`
    <style>
        .hero { background: #ccc; padding: 20px; margin-bottom: 10px; }
        h1 { margin: 0; }
    </style>
    <div class="hero">
        <h1>${this.pageTitle}</h1>
        <p>${this.pageDesc}</p>
    </div>
    `
  }
}
// Register the element with the browser
customElements.define('x-hero', Hero);
