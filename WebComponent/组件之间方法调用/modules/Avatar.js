class Avatar extends HTMLElement {
  template = document.createElement('template')
  styled = document.createElement('style')

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.#initHTML()
    this.#initStyle()
  }
  #initHTML() {
    const { avatar } = this.dataset

    this.template.innerHTML = `
      <img src="${avatar}" alt="">
    `
  }
  #initStyle() {
    this.styled.innerHTML = `
      :host {
        user-select: none;
        width: var(--avatar-size, 50px);
        height: var(--avatar-size, 50px);
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
      }
      :host img {
        user-drag: none;
        -webkit-user-drag: none;
        width: 100%;
        object-fit: cover;
      }
      :host([ring]) {
        border: 2px solid var(--avatar-ring-color, transparent);
      }
    `
  }
  connectedCallback() {
    this.shadowRoot.appendChild(this.styled)
    this.shadowRoot.appendChild(this.template.content)

  }

}

export default Avatar