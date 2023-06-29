class WCModel extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  deleteRepoHandler = e => {
    const { repo } = e.detail
    console.log('delete repo', repo);
    this.show()
  }
  connectedCallback() {
    this.render()
    window.addEventListener('delete-repo', this.deleteRepoHandler)
  }
  disconnectedCallback() {
    window.removeEventListener('delete-repo', this.deleteRepoHandler)
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          transition: all 0.3s ease-in-out;
        }
        :host(.hide) {
          opacity: 0;
          pointer-events: none;
          visibility: hidden;
        }
      </style>
      <slot name="model">slot</slot>
    `
  }
  hide() {
    this.classList.add('hide')
  }
  show() {
    this.classList.remove('hide')
  }
}

export default WCModel