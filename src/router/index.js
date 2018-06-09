import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import Admin from '@/components/admin/Admin'
import CurrentTournament from '@/components/tournament/CurrentTournament'
import CreateTournament from '@/components/tournament/CreateTournament'
import Tournament from '@/components/tournament/Tournament'
// import store from '@/store'
import store from '../store/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/getapi',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: Admin,
      beforeEnter(to, from, next) {
        console.log('user admin: ' + store.getters.isAdmin)
        if (!store.getters.isAuthenticated){
          console.log("first one")
          next('/login')
        } else if(!store.getters.isAdmin) {
          console.log("admin one")
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/current_tournament',
      name: 'CurrentTournament',
      component: CurrentTournament
    },
    {
      path: '/new_tournament',
      name: 'CreateTournament',
      component: CreateTournament
    },
    {
      path: '/tournament/:id',
      name: 'Tournament',
      component: Tournament
    }

  ]
})
