import { LitElement, html } from '/vendor/polymer/lit-element.bundled.js'

class Avatar extends LitElement {
 // Declare properties
 static get properties() {
  return { imgFile: String }
}
// Initialize properties
constructor() {
  super()
  this.imgFile="Missing Property imgFile"
}

  // Define a template
  render() {
    return html`
    <style>
        img { max-width: 100px; border-radius: 10px; }
    </style>

    <img src="/img/${this.imgFile}">

    `
  }
}
// Register the element with the browser
customElements.define('x-avatar', Avatar);
