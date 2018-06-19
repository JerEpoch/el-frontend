import axios from 'axios'
import router from '../../router'
import {isValidToken} from '@/utils'



const state = {
  regErrors: '',
  hasRegError: false,
  user: '',
  message: '',
  access_token: '',
  user_access: ''
}

const mutations =  {
  'SET_ERRORS'(state, msg) {
    state.regErrors = msg
    state.hasRegError = true
  },
  setMessage(state, msg) {
    console.log(msg)
    state.message = msg
  },
  'SET_USER'(state, user) {
    state.user = user
  },
  'RESET_ERROR_STATE'(state) {
    state.hasRegError = false
  },
  'SET_USER_TOKEN'(state, token) {
    //localStorage.token = token
    localStorage.setItem('access_token', token.access_token)
    //localStorage.setItem('refresh_token', token.refresh_token)
    state.access_token = token.access_token
    //state.refresh_token = token.refresh_token
  },
  'LOGOUT_USER'(state) {
    localStorage.removeItem('access_token')
    state.user = ''
    state.user_access = ''
  },
  'SET_ACCESS'(state, access) {
    state.user_access = access
  }
}

const actions = {
  signup ({commit, dispatch}, authData) {
    commit('RESET_ERROR_STATE')
    return axios.post('/bracket-api/users/create', {
      email: authData.email,
      username: authData.username,
      password: authData.password
    })
      .then(res => {
        //console.log(res)
        commit('SET_USER', authData.username)
        commit('SET_USER_TOKEN', res.data[1])
        router.push('/')
      })
      .catch(error => {
        console.log('Error registering: ', error.response.data.errorMsg)
        commit('SET_ERRORS', error.response.data.errorMsg)
      })
  },
  login({commit}, authData) {
    //console.log(authData)
    return axios.post('/bracket-api/users/login', {
      email: authData.email,
      password: authData.password
    })
      .then(res => {
        console.log(res.data)
        commit('SET_USER_TOKEN', res.data)
        router.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  },
  logout({commit}) {
    commit('LOGOUT_USER')
    router.push('/login')
  },
  setAccess({commit}, access) {
    commit('SET_ACCESS', access)
  }
}

const getters = {
  registerErrorMsg(state) {
    return state.regErrors
  },
  hasReigsterError(state) {
    return state.hasRegError
  },
  user(state) {
    return state.user
  },
  getToken(state) {
    //console.log('getting token: ' + localStorage.getItem('access_token'))
    return state.access_token
  },
  isAuthenticated(state) {
    //console.log('is auth token: ' + state.token)
    return true
  },
  isAdmin(state) {
    return state.user_access === 'admin'
  },
  isStreamer(state) {
    return state.user_access === 'streamer'
  }
}


  // const store = new Vuex.Store({
  //   state,
  //   actions,
  //   mutations,
  //   getters
  // })

  export default {
    state,
    getters,
    actions,
    mutations
  }