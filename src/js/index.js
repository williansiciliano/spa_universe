//função de retirar o padrão de redirecionar quando clicar no link dentro
import { Router } from './router.js'

const appRouter = new Router()
appRouter.add("/", "/pages/home.html")
appRouter.add("/universe", "/pages/universe.html")
appRouter.add("/exploration", "/pages/exploration.html")
appRouter.add(404, "/pages/404.html")

appRouter.handle() //fazer aparecer de primeira o conteúdo da home ao carregá-la
window.onpopstate = () => appRouter.handle() // voltar página no browser
window.route = () => appRouter.route() //permitindo que seja chamada diretamente no HTML com 'onclick'


// interações no nav-menu ao clicar em um link (mudar a cor do item selecionado)
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink){
	navLink.addEventListener('click', function(){
		navLinks.forEach(function (navLink){
			navLink.classList.remove('selected');
		})
		navLink.classList.add('selected');
	})
})

