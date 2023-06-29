import ProjectRepo from './modules/ProjectRepo.js'
import WCButton from './modules/WCButton.js'
import WCModel from './modules/Model.js'

customElements.define('project-repo', ProjectRepo)
customElements.define('wc-button', WCButton)
customElements.define('wc-model', WCModel)

window.addEventListener('delete-repo', (e) => {
  console.log('delete repo', e.detail.repo);
})

