import axios from 'axios'
import store from '../store/store'


export function isValidToken(token) {
  // if no token or invalid return false
  if(!token || token.split('.').length < 3) {
    return false
  }
  // splits the token to grab the issued expire time.
  // if the token is not expire return true else false
  const data = JSON.parse(atob(token.split('.')[1]))
  //console.log(data)
  const exp = new Date(data.exp * 1000)
  const now = new Date()
  return now < exp
}

export function setUser() {
  if(isValidToken(localStorage.getItem('access_token'))) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
    return axios.get('/bracket-api/users/user')
      .then(res => {
      //console.log(res.data.logged_in_as)
      
      console.log(res.data)
  
      store.commit('SET_USER', res.data.logged_in_as)
      store.dispatch('setAccess', res.data.user_access)
    })
    .catch(err => {
      console.log("error getting user")
    })
  }

}

// checks if user is the creator of the tournament and returns true
// export function checkTournAdmin(token, id) {
//   // if(!isValidToken(token)) {
//   //   return false
//   // }

//   // finish backend here
//   axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
//   return axios.get(`/bracket-api/tournament/tournadmin/${id}`, {
//   })
//   .then(res => {
//     //console.log("Data from checkTournAdmin function")
//     console.log(res.data)
//     var isAdmin = res.data.data
//     console.log(isAdmin)
//     if (!isAdmin) {
//       return false
//     }
//     else {
//       return true
//     }
//   })
//   //return true
// }