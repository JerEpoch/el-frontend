import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import auth from './modules/auth'
import createTournament from './modules/createTournament'
import matchWinners from './modules/matchWinners'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    auth,
    matchWinners,
    createTournament
  }
})
