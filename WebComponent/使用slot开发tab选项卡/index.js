class CustomTabs extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.render()
    this.active = this.panels[0]
    this.active.classList.add('active')
    this.shadowRoot.querySelector('.tabs')
      .addEventListener('click', e => {
        const target = e.target
        const index = target.getAttribute('tab-index')
        if (index >= 0 && target != this.active) {
          this.active.classList.remove('active')
          this.active = this.panels[index]
          this.active.classList.add('active')
        }
      })
  }
  render() {
    this.shadowRoot.innerHTML = `${CustomTabs.css()} ${CustomTabs.html()}`
    this.tabs = this.shadowRoot.querySelector('slot[name="tab"]')
      .assignedElements({ flatten: false })
    this.panels = this.shadowRoot.querySelector('slot[name="panel"]')
      .assignedElements({ flatten: false })
    this.tabs.forEach((tab, index) => {
      tab.setAttribute('tab-index', index)
    })
  }
  static html() {
    return `
      <div class="tabs">
        <slot name="tab">default tab</slot>
      </div>
      <div class="panels">
        <slot name="panel">default panel</slot>
      </div>
    `
  }
  static css() {
    return `
      <style>
        :host * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 80%;
          height: 50vh;
        }
        :host .tabs {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        :host .panels {
        }
        :host .tabs ::slotted([slot="tab"]) {
          border: 2px solid #333;
          border-radius: 100px;
          width: 250px;
          height: 50px;
          font-weight: bold;
          background: #fff;
        }
        :host .panels ::slotted([slot="panel"]) {
          display: none;
         
        }
        :host .panels ::slotted(.active) {
          display: block;
        }
      </style>
    `
  }
}

customElements.define('custom-tabs', CustomTabs)