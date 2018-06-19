import Vue from 'vue'
import axios from 'axios'

const state = {
  matchWinners: [],
  winnersArray: null
}

const getters = {
  winners(state) {
    return state.matchWinners
  },
  winnersLength(state) {
    //return state.matchWinners.length
    // this checks if all the indexes in the array have a value.
    if(state.matchWinners.length > state.winnersArray - 1) {
      for(let i=0; i < state.matchWinners.length; i++){
        if(typeof state.matchWinners[i] === 'undefined' || state.matchWinners[i] === null){
          return false
        }
      }
      return true
    }
  }
}

const actions = {
  addPlayer({commit}, data) {
    console.log("adding player " + data.player + " index is " + data.index)
    var player = data.player
    var index = data.index
    commit('ADD_PLAYER', {player, index})
  },
  submitMatchWinners({commit, dispatch}, data) {
    console.log("submitting winners" + data.roundNumber)

    // if there's odd number of players. add a BYE
    if(state.matchWinners.length % 2 != 0 ){
        var index = state.matchWinners.length
        var player = "BYE"
        commit('ADD_PLAYER', {player, index })
      }
    
    // create a dict object for backend
    var newBracket = []
    for(let i = 0; i <= state.matchWinners.length - 1; i+=2) {
      newBracket.push({
        playerOne: state.matchWinners[i],
        playerTwo: state.matchWinners[i+1]
      })
    }

   
    console.log(newBracket)

    axios.post('/bracket-api/tournament', {
      tournamentId: data.matchId,
      players: state.matchWinners,
      round: data.roundNumber
    })
    .then(res => console.log(res))
  },
  setWinnersArr({commit}, arrSize) {
    commit('SET_WINNERS_SIZE', arrSize)
  }
}

const mutations = {
  'ADD_PLAYER'(state, {player, index}){
    // state.matchWinners.splice(index,1)
    // state.matchWinners.splice(index, 0, player)
    Vue.set(state.matchWinners, index, player)
  },
  'SET_WINNERS_SIZE'(state, arrSize) {
    state.winnersArray = arrSize
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}