class IntroCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  render() {
    const { title, content } = this.dataset
    this.shadowRoot.innerHTML = `
      <h1 class="intro-card-title">${title}</h1>
      <p class="intro-card-content">${content}</p>
      <style>
        :host * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          width: 400px;
          margin: 20px auto;
          font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
          background: conic-gradient(#149eca 60deg,#42b883 180deg,#ffca28 240deg,#149eca 360deg);
          border-radius: 10px;
          overflow: hidden;
          padding: 20px;
          color: #fff;
        }
        .intro-card-title {
          margin-bottom: 10px;
          border-bottom: 4px solid #fff;
        }
        .intro-card-content {
          height-line: 1.5;
        }
      </style>
    `
  }
  connectedCallback() {
    this.render()
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case 'data-title':
          console.log(name, oldValue, newValue);
          this.shadowRoot.querySelector('.intro-card-title').textContent = newValue
          break;
        case 'data-content':
          this.shadowRoot.querySelector('.intro-card-content').textContent = newValue
        default:
          this.render()
          break;
      }
    }
  }
  static get observedAttributes() {
    return ['data-title', 'data-content']
  }
}

customElements.define('intro-card', IntroCard)
