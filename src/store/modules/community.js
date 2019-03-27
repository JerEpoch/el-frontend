import axios from 'axios'
import router from '../../router'

const state = {
  communityMembers: '',
  communityErrors: '',
  communityIsLoading: true
}

const mutations = {
  'SET_COMMUNITY_MEMBERS'(state, members) {
    state.communityMembers = members
  },
  'SET_COMMUNITY_ERRORS'(state, error) {
    state.communityErrors = error
  },
  'SET_COMMUNITY_IS_LOADING'(state, payload) {
    state.communityIsLoading = payload
  }
}

const getters = {
  getCommunityMembers(state) {
    return state.communityMembers
  },
  getCommunityLoading(state) {
    return state.communityIsLoading
  }
}

const actions = {
  getCommunityList({commit}) {
    commit('SET_COMMUNITY_IS_LOADING', true)
    return axios.get('/bracket-api/users/community')
    .then(res => {
      //console.log(res.data.members)
      commit('SET_COMMUNITY_MEMBERS', res.data.members)
      commit('SET_COMMUNITY_IS_LOADING', false)
    })
    .catch(err => {
      console.log(err)
    })
  },
  submitNewsPost({}, postData) {
    console.log("sending " + postData.postBody + " " + postData.postTitle)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
    return axios.post('/bracket-api/communitynews/newpost', {
      news_title: postData.postTitle,
      news_post: postData.postBody
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err.response.data.error)
    })
  }
}



export default {
  actions,
  state,
  mutations,
  getters
}