// your web components here
(() => {
  const template = document.createElement("template");
  template.innerHTML = `
<style>
  :host {
    display: block;
    background: #fff;
    margin-bottom: 1em;
  } 

  :host([hidden]) { display: none }

  :host pre {
    font-family: "Courier 10 Pitch", Courier, monospace;
    font-size: 95%;
    line-height: 140%;
    // white-space: pre;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    padding: 1em;
    background: #faf8f0;
  }
  
  :host code {
    font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
    font-size: 95%;
    line-height: 140%;
    // white-space: pre;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
  }
</style>
<pre>
  <code>
<slot></slot>
  </code>
</pre>
`;

  class CodeBlock extends HTMLElement {
    constructor() {
      // always call super() first
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // connectedCallback() {
    //   console.log("connected!");
    // }

    // disconnectedCallback() {
    //   console.log("disconnected!");
    // }

    // attributeChangedCallback(name, oldVal, newVal) {
    //   console.log(`Attribute: ${name} changed!`);
    // }

    // adoptedCallback() {
    //   console.log("adopted!");
    // }
  }
  // Define the new element
  window.customElements.define("code-block", CodeBlock);
})();
