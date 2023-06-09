import Found from './pages/404.js'
import Home from './pages/home.js'
import About from './pages/about.js'
import Contact from './pages/contact.js'
import Services from './pages/services.js'

const links = document.querySelector('.route-links').children
const view = document.querySelector('#route-view')

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '*',
        component: Found
    }
]

init()

function init() {
    bindLinks(links)
    window.onpopstate = () => {
        navigate(window.location.pathname)
    }
    navigate()
}

function navigate(path = '/') {
    if (path[0] !== '/')
        throw new Error('Path must start with /')
    history.pushState({}, '', path)
    const pathname = window.location.pathname;
    const route = routes.find(route => route.path === pathname) || routes.find(route => route.path === '*')
    view.innerHTML = route.component.template
}

function bindLinks(links) {
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e = e || window.event
            e.preventDefault()
            const path = this.getAttribute('href')
            navigate(path)
        })
    }
}