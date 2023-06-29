//定义一个web component组件
class Card extends HTMLElement {
    // 创建一个模板元素
    template = document.createElement('template')
    // 创建样式
    style = document.createElement('style')

    constructor() {
        //调用超类构造器
        super();
        this.#initHTML()
        this.#initStyle()
    }

    #initHTML() {
        const { title, content } = this.dataset
        const style = this.getAttribute('style')
        const className = this.getAttribute('class')

        const getStyle = () => style ? `style="${style}"` : ''
        const getClassName = () => `class="card ${className || ''}"`
        // 清除默认样式
        this.#cleanDefaultStyle()

        // 设置内容
        this.template.innerHTML = `
            <div ${getStyle()} ${getClassName()}>
                <h1>${title}</h1>
                <p>${content}</p>
            </div>
        `
    }

    #initStyle() {
        this.style.innerHTML = `
            .card {
                margin: 20px auto;
                font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                box-sizing: border-box;
                width: 300px;
                height: 400px;
                background: #333;
                padding: 20px;
                color: white;
                overflow: hidden;
                border-radius: 20px;
                transition: all .3s;
            }
            .card:hover {
                box-shadow: 0 0 10px rgba(0,0,0,.5);
                filter: brightness(0.8);
            }
            .card h1 {
                margin: 0;
                height-line: 1.5;
            }
        `
    }
    #cleanDefaultStyle() {
        const defaults = ['style', 'class']
        defaults.forEach(attr => {
            this.removeAttribute(attr)
        })
    }
    connectedCallback() {
        console.log('挂载到DOM树');
        // 添加到组件中
        this.appendChild(this.template.content)
        this.insertBefore(this.style, this.firstChild)
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('属性变化', name, oldValue, newValue);
    }
    // // 监听属性
    static get observedAttributes() {
        return ['style', 'class', , 'data-title', 'data-content']
    }
}

//注册组件
customElements.define('details-card', Card)