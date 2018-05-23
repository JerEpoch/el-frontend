<template>
  <div class="col-md-6 offset-md-3 col-lg-3" >
      <h1>EL Bracket Site</h1>
      <button @click="getApi">Get api</button>
      <button @click="getApiTwo">Get api two</button>
      <button @click="jwtprot">Test jwt prot</button>
      <h3>{{ msg }}</h3>
      <p>This is for testing only. Doesn't do anything exciting.</p>
      <p>User: {{ userState }}</p>
      <p>Register Errors: {{ errorMessages }} </p>
      <p>Has Reg Error: {{ hasRegErr }}</p>
      <p>Token: {{ token }}</p>
      <p>authenticated: {{ authenticated }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex'
  //const BASE_URL = 'http://127.0.0.1:5000'
  
  export default {
    name: 'app',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      getApi() {
        axios.get('/bracket-api/api')
          .then(response => {
            console.log(response.data.msg)
            this.msg = response.data.msg
      })
      .catch(e => {
        console.log(e.response)
      })
    },
    getApiTwo() {
      axios.get('/bracket-api/api/two')
        .then(response => {
          //console.log(response.body.msg)
          this.msg = response.data.msg
          console.log(response.data)
      })
      .catch(e => {
        console.log(e.response)
      })
    },
    getApiThree() {
      axios.get('/api/two')
        .then(response => {
          //console.log(response.body.msg)
          this.msg = response.data.msg
      })
      .catch(e => {
        console.log(e.response)
      })
    },
    getCreate() {
      axios.get('/bracket-api/users')
        .then(response => {
          this.msg = response.data.msg
        })
    },
    logoutUser() {
      this.$store.dispatch('logout')
    },
    jwtprot() {
      console.log("Testing jwt protected route...")
      //console.log(localStorage.getItem('access_token'))
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
      return axios.get('/bracket-api/testjwt')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  computed: {
    ...mapGetters({
      userState: 'user',
      errorMessages: 'registerErrorMsg',
      hasRegErr: 'hasReigsterError',
      token: 'getToken',
      authenticated: 'isAuthenticated'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .centered-items {
    justify-content: center;
    flex-direction: column
  }

</style>
