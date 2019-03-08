import { LitElement, html } from '/vendor/polymer/lit-element.bundled.js'
import { FeedModel } from './model/feed.js'
//import globals from './model/globals.js'

import './layout.js'
import './nav.js'
import './avatar.js'
import './hero.js'
import './feed.js'
import './links.js'

class Homepage extends LitElement {
  // Declare properties
  static get properties() {
    return {
      posts: Array
    }
  }

  // Initialize properties
  constructor() {
    super()
    this.feedModel = new FeedModel()
    this.posts = []
    this.load()
  }

  async load() {
    //this.posts = await this.feedModel.list({feedDir: "data/lesson1", reverse: false})
    //console.log("loaded posts: ", this.posts)
  }

  // Define a template
  render() {
    return html`<div>
    <x-layout>

        <x-avatar slot="left" imgFile="pigeonFlyRight.png"></x-avatar>
        <x-nav slot="left"></x-nav>
        <x-avatar slot="left" imgFile="pigeonRight.png"></x-avatar>
        

         <x-hero slot="center" 
          pageTitle="Under Construction"
          pageDesc="Do you want to help build this page?  Contact @erangell on Mattermost."></x-hero>

<!--
        <x-feed slot="center" posts="${JSON.stringify(this.posts)}"></x-feed>
-->
        <!-- Test missing property: imgFile 
        <x-avatar slot="right" ></x-avatar>
        -->

        <x-avatar slot="right" imgFile="pigeonFlyLeft.png"></x-avatar>
        <x-links slot="right"></x-links>
        <x-avatar slot="right" imgFile="pigeonLeft.png"></x-avatar>
        <br>Think of the pigeons as navigation buttons.
        
    </x-layout>
    </div>`
  }
}
// Register the element with the browser
customElements.define('x-homepage', Homepage);
