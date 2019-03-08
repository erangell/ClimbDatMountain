import { LitElement, html } from '/vendor/polymer/lit-element.bundled.js'
//import globals from './model/globals.js'


const JsonType = {
  fromAttribute: (attr) => { return JSON.parse(attr) },
  toAttribute:   (prop) => { return JSON.stringify(prop) }
}

class Feed extends LitElement {
  // Declare properties
  static get properties() {
    return {
      posts: {type: JsonType}
    }
  }
  // Initialize properties
  constructor() {
    super()
    this.posts = []
  }

  // Define a template
  render() {
    console.log('rendering posts:', this.posts)
    return html`
      <div>
        ${this.posts.map( post => html`
          <x-feed-item 
            filename="${post.filename}"
            text="${post.text}" 
            leftlink = "${post.leftlink}"
            lefttext = "${post.lefttext}"
            lefttarget = "${post.lefttarget}"
            righttext = "${post.righttext}"
            rightlink = "${post.rightlink}"
            righttarget = "${post.righttarget}"
            >
          </x-feed-item>
        `)}
      </div>
    `
  }
}

class FeedItem extends LitElement {
  static get properties () {
    return {
        filename    : String
      , text        : String
      , leftlink    : String
      , lefttarget  : String
      , lefttext  : String
      , rightlink   : String
      , righttarget : String
      , righttext : String
    }
  }
  
  render() {
    return html`
      <style>
        .item {
          border: 1px solid #ccc;
          border-radius: 2px;
          margin: 0 0 10px; 
          padding: 10px;
        }
        .heading {font-size: 70%; }
      </style>
      <div class="item">
        <div class="heading">${this.filename}</div>
        <div class="body">

          <a href="${this.leftlink}" target="${this.lefttarget}">${this.lefttext}</a>
            ${this.text}
          <a href="${this.rightlink}" target="${this.righttarget}">${this.righttext}</a>
        </div>
        
      <div>`
  }
}


// Register the element with the browser
customElements.define('x-feed', Feed);
customElements.define('x-feed-item', FeedItem)
