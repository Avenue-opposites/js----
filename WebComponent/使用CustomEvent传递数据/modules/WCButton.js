class WCButton extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  static roundMap = {
    small: '5px',
    medium: '10px',
    large: '20px',
    full: '50%'
  }
  connectedCallback() {
    this.render()
  }
  render() {
    const {
      round = 'small' // small, medium, large, full
    } = this.dataset
    const type = this.getAttribute('type') || 'button'
    const disabled = this.hasAttribute('disabled') ? 'disabled' : ''
    const roundSize = WCButton.roundMap[round] || '5px'
    const text = this.firstChild?.textContent.trim() || ''

    this.shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
        }
        button {
          padding: 8px 16px;
          border-radius: ${roundSize};
          border: var(--wc-button-border);
          background: var(--wc-button-bg);
          color: var(--wc-button-color);
          font-size: var(--wc-button-font-size);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all .3s;
        }
        button:hover {
          background: var(--wc-button-hover-bg);
          color: var(--wc-button-hover-color);
          border-color: var(--wc-button-hover-border);
        }
        button:disabled {
          opacity: .5;
          cursor: not-allowed;
        }
      </style>
      <button 
        type="${type}" 
        ${disabled}
      >
        ${text}
      </button>
    `
  }
}

export default WCButton