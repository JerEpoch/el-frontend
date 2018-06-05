import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import auth from './modules/auth'
import createTournament from './modules/createTournament'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    auth,
    createTournament
  }
})
