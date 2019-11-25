(() => {
  const template = document.createElement("template");
  template.innerHTML = `
<style>
  :host {
    display: block;
  }
  :host([hidden]) { display: none }

  :host .body {
    margin: 1em;
    padding: 1em;
    border: 1px solid #ddd;
    background: #eee;
  }
  :host h3 {
    width: 100%;
    color: #333;
    padding: .5em;
    margin: 0;
  }
  :host([collapsed]) h3 {
    background: #eee;
  }
  :host h3:after {
    content: '\u25BC';
    position: absolute;
    right: 1em;
  }
  :host([collapsed]) h3:after {
    content: '\u25B2'; 
  }

  :host([collapsed]) .body {
    visibility: hidden;
    height: 0; 
    margin: 0;
    padding: 0;
  }
</style>
<h3><slot name="header">&nbsp;</slot></h3>
<div class="body">
  <slot></slot>
</div>
`;
  class GroupContainer extends HTMLElement {
    private _headerSlot;
    private _header: string = "";

    get collapsed() {
      return this.hasAttribute("collapsed");
    }

    set collapsed(val) {
      // Reflect the value of the open property as an HTML attribute.
      if (val) {
        this.setAttribute("collapsed", "");
      } else {
        this.removeAttribute("collapsed");
      }
      this.toggleGroup();
    }

    get header() {
      // return this.getAttribute("header");
      return this._header;
    }

    set header(val) {
      this._header = val;
      this._headerSlot.innerHTML = this._header;
    }

    constructor() {
      // Always call super first in constructor
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this._headerSlot = this.shadowRoot.querySelector("slot[name=header]");
    }

    connectedCallback() {
      // Setup a click listener on <app-drawer> itself.
      this.addEventListener("click", this.toggleGroup);
      this.collapsed = false;
    }

    disconnectedCallback() {
      this.removeEventListener("click", this.toggleGroup);
    }

    toggleGroup() {
      this.toggleAttribute("collapsed");
    }
  }
  // Define the new element
  customElements.define("group-container", GroupContainer);
})();
