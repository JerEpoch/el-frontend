import axios from 'axios'

const state = {
  editUser: {}
}

const mutations = {
  'SET_USER_EDIT'(state, user) {
    state.editUser = user
  }
}

const actions = {
  getUserInfo({commit}) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
    return axios.get('/bracket-api/users/edit/user', {
      
    })
    .then(res => {
      console.log(res.data)
      const user = res.data
      commit('SET_USER_EDIT', user)
    })
  },
  sendUserProfile({}, userData) {
    
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
    return axios.post('/bracket-api/users/edit/user', {
      email: userData.email,
      password: userData.password,
      elPage: userData.elPage,
      twitch: userData.twitch,
      twitter: userData.twitter
    })
    .then(res => {
      console.log(res.data)
    })
  }
}

const getters = {
  getEditUserInfo(state) {
    return state.editUser
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}