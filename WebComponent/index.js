// const template = `
//     <template id="web_component">
//         <h1>主标题</h1>
//         <slot></slot>
//     </template>
// `;
// document.getElementById("#template").innerHTML = template;
//定义一个web component组件
class WebComponent extends HTMLElement {
    constructor() {
        //调用超类构造器
        super();
        //获取template标签,该标签的内容不会被渲染,而是会作为文档碎片保存
        const template = document.querySelector("#web_component");
        //获取模板中的内容并且进行深拷贝,这样在多处使用的话,就不会互相影响了
        const content = template.content.cloneNode(true);
        //创建影dom这样就不可以从外部修改组件了,因为它不是真实的dom
        const shadowRoot = this.attachShadow({ mode: "open" });
        //将模板的内容挂载到影dom中
        shadowRoot.appendChild(content);
    };
};
//注册组件
customElements.define("web-component", WebComponent);