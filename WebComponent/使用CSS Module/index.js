import sheet from './style.css' assert { type: 'css' }

class CustomH1 extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.render()
  }
  render() {
    const text = this.firstChild?.textContent || 'Hello World'
    // 透過 adoptedStyleSheets 屬性將 CSS Module 的樣式表掛載到 shadow DOM 上
    this.shadowRoot.adoptedStyleSheets = [sheet]

    this.shadowRoot.innerHTML = `
      <h1>${text}</h1>
    `
  }
}

customElements.define('custom-h1', CustomH1)