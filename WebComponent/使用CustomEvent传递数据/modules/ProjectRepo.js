class ProjectRepo extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  static languageMap = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#2c3e50',
    'JSX': '#61DAFB',
    'Shell': '#89e051',
    'Python': '#3572A5',
    'C': '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    'Go': '#00ADD8',
    'Java': '#b07219',
    'Kotlin': '#F18E33',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'Rust': '#dea584',
    'Scala': '#c22d40',
    'Swift': '#ffac45',
    'Dart': '#00B4AB',
    'Elixir': '#6e4a7e',
    'Erlang': '#B83998',
    'Haskell': '#5e5086',
    'Lua': '#000080',
    'Perl': '#0298c3',
    'PowerShell': '#012456',
    'R': '#198ce7',
    'Racket': '#3c5caa',
    'Sass': '#a53b70',
    'TeX': '#3D6117',
    'Vim script': '#199f4b',
    'Dockerfile': '#384d54',
    'Makefile': '#427819',
    'unknown': '#ccc'
  }
  connectedCallback() {
    this.render()
    this.shadowRoot.querySelector('wc-button')
      .addEventListener('click', () => {
        // 通过dispatchEvent触发自定义事件
        window.dispatchEvent(new CustomEvent('delete-repo', {
          bubbles: true,
          detail: {
            repo: this.dataset.repo
          }
        }))
      })
  }
  render() {
    const {
      repo = 'unknown',
      language = 'unknown'
    } = this.dataset
    const languageColor = ProjectRepo.languageMap[language] || ProjectRepo.languageMap['unknown']

    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box; 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        :host {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;
          width: 300px;
          height: 60px;
          border-radius: 5px;
          border: 2px solid #e1e4e8;
          transition: background .3s;
        }
        :host(:hover) {
          background: #f6f8fa;
        }
        :host .repo-name {
          display: flex;
          align-items: center;
          font-size: 20px;
        }
        :host .repo-name span {
          margin-left: 10px;
        }
        :host .repo-desc .repo-language {
          position: relative;
        }
        :host .repo-desc .repo-language::before {
          position: absolute;
          content: '';
          top: 0;
          left: -20px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: ${languageColor};
        }
        :host .repo-desc {
          display: flex;
          justify-content: space-between;
          align-items: end;
          padding-left: 25px;
          font-size: 14px;
        }
      </style>
      <div class="repo-name">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273c.112-.576.584-.717.988-.727H21V4a2 2 0 0 0-2-2zm0 9l-2-1l-2 1V4h4v7z"/></svg>
        <span>${repo.toLowerCase()}</span>
      </div>
      <div class="repo-desc">
        <div class="repo-language">
          ${language}
        </div>
        <wc-button
          style="
            --wc-button-font-size: 16px;
            --wc-button-color: red;
            --wc-button-border: 1px solid red;
            --wc-button-hover-bg: red;
            --wc-button-hover-color: white;
          "
        >Delete</wc-button>
      </div>
    `
  }
}

export default ProjectRepo