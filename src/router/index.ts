import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import InicioPage from '../views/InicioPage.vue'
import IniciarSesionPage from '../views/IniciarSesionPage.vue'
import RegistrarsePage from '../views/RegistrarsePage.vue'
import RecuperarPage from '../views/RecuperarPage.vue'
import RecuperarCodigoPage from '../views/RecuperarCodigoPage.vue'
import MenuPage from '../views/MenuPage.vue'
import MapaPage from '../views/MapaPage.vue'
import ChatPage from '../views/ChatPage.vue'
import ChatDetailPage from '../views/ChatDetailPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: InicioPage
  },
  {
    path: '/iniciar-sesion',
    name: 'IniciarSesion',
    component: IniciarSesionPage
  },
  {
    path: '/registrarse',
    name: 'Registrarse',
    component: RegistrarsePage
  },
  {
    path: '/recuperar',
    name: 'Recuperar',
    component: RecuperarPage
  },
  {
    path: '/recuperar-codigo',
    name: 'RecuperarCodigo',
    component: RecuperarCodigoPage
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage
  },
  {
    path: '/mapa',
    name: 'Mapa',
    component: MapaPage
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatPage
  },
  {
    path: '/chat/:id',
    name: 'ChatDetail',
    component: ChatDetailPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
