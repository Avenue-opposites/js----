import Avatar from './modules/Avatar.js'
import CommentCard from './modules/CommentCard.js'

customElements.define('custom-avatar', Avatar)
customElements.define('comment-card', CommentCard)


const commentCard = document.querySelectorAll('comment-card')
const openBtn = document.querySelector('.open')

openBtn.addEventListener('click', () => {
  commentCard.forEach(item => {
    item.open()
  })
})

