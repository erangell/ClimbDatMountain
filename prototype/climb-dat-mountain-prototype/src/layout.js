import { LitElement, html } from '/vendor/polymer/lit-element.bundled.js'

class Layout extends LitElement {
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
        
        <style>
          .layout { display: flex;  margin: 0 auto; }
          .layout > * { border: 1px solid #eee }
          .left, .right { flex: 0 0 150px; }
          .center { flex: 1; padding: 10px;}
        </style>

          <div class="layout">
            <div class="left"><slot name="left"></slot></div>
            <div class="center"><slot name="center"></slot></div>
            <div class="right"><slot name="right"></slot></div>
          </div>
         
        </div>`
  }
}
// Register the element with the browser
customElements.define('x-layout', Layout);
