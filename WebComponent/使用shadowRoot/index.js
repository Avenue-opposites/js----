class CommentCard extends HTMLElement {
  template = document.createElement('template')

  styled = document.createElement('style')

  constructor() {
    super()
    /*
      使用shadowDOM可以封装元素和样式
      关于shadowRoot的模式，有open和closed两种模式
      open表示可以通过element.shadowRoot获取到shadowRoot
      closed表示无法通过element.shadowRoot获取到shadowRoot,
      但是可以通过element.attachShadow({ mode: 'closed' })在添加时获取到shadowRoot
    */
    this.attachShadow({ mode: 'open' })
    this.#initHTML()
    this.#initStyle()
  }
  #initHTML() {
    const { content, name, avatar, career } = this.dataset

    // console.log(content, name, avatar, career);

    this.template.innerHTML = `
      <p class="comment">
        ${content}
      </p>
      <div class="comment-card-footer">
        <div class="comment-card-avatar">
          <img src="${avatar}" alt="avatar">
        </div>
        <div class="comment-card-info">
          <h3 class="comment-card-info-name">${name}</h3>
          <p class="comment-card-career">${career}</p>
        </div>
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
        width: 80%;
        margin: 10px auto;
        padding: 20px;
        border-radius: 10px;
        background: var(--comment-card-bg, #333);
        color: #fff;
        box-shadow: 0 0 10px #333;
        font-family: '宋体', sans-serif;
        min-width: 300px;
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
      :host .comment-card-avatar {
        user-select: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff;
      }
      :host .comment-card-avatar img {
        user-drag: none;
        -webkit-user-drag: none;
        width: 100%;
        object-fit: cover;
      }
      :host .comment-card-info {
        margin-left: 20px;
      }
      :host .comment-card-info-name {
        font-size: 18px;
        margin-bottom: 5px;
      }
      :host .comment-card-career {
        font-size: 14px;
      }
    `
  }
  connectedCallback() {
    this.shadowRoot.appendChild(this.styled)
    this.shadowRoot.appendChild(this.template.content)
  }
}

customElements.define('comment-card', CommentCard);