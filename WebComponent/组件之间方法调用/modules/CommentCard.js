class CommentCard extends HTMLElement {
  template = document.createElement('template')
  styled = document.createElement('style')

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.#initHTML()
    this.#initStyle()
  }
  #initHTML() {
    const { name, content, avatar, career } = this.dataset
    const filterFake = value => value || ''

    this.template.innerHTML = `
      <p class="comment">
        ${filterFake(content)}
      </p>
      <div class="comment-card-footer">
        <custom-avatar 
          style="--avatar-ring-color: #fff;"
          ring 
          data-avatar="${filterFake(avatar)}"
        ></custom-avatar>
        <div class="comment-card-info">
          <h3 class="comment-card-info-name">${filterFake(name)}</h3>
          <p class="comment-card-career">${filterFake(career)}</p>
        </div>
      </div>
      <div class="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>
      </div>
    `
  }
  #initStyle() {
    this.styled.innerHTML = `
      :host * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        position: relative;
        width: 80%;
        margin: 10px auto;
        padding: 20px;
        border-radius: 10px;
        background: var(--comment-card-bg, #333);
        color: #fff;
        box-shadow: 0 0 10px #333;
        font-family: '宋体', sans-serif;
        overflow: hidden;
        transition: all .3s;
      }
      :host .close {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 10px 0 10px;
      }
      :host .comment {
        font-size: 24px;
        line-height: 1.5;
        margin-bottom: 10px;
      }
      :host .comment-card-footer {
        display: flex;
        align-items: center;
      }
      :host .comment-card-info {
        margin-left: 20px;
      }
      :host .comment-card-info-name {
        font-size: 18px;
        margin-bottom: 5px;
        border-bottom: 2px solid #fff;
        padding-bottom: 5px;
      }
      :host .comment-card-career {
        font-size: 14px;
      }
      :host(.hide) {
        display: none;
      }
    `
  }
  connectedCallback() {
    this.shadowRoot.appendChild(this.styled)
    this.shadowRoot.appendChild(this.template.content)

    const close = this.shadowRoot.querySelector('.close')

    close.addEventListener('click', () => {
      this.close()
    })

  }
  close() {
    this.classList.add('hide')
  }
  open() {
    this.classList.remove('hide')
  }
}

export default CommentCard