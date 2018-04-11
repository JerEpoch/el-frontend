<template>
  <div class="col-md-6 offset-md-3 col-lg-3" >
      <h1>EL Bracket Site</h1>
      <button @click="getApi">Get api</button>
      <button @click="getApiTwo">Get api two</button>
      <h3>{{ msg }}</h3>
  </div>
</template>

<script>
  import axios from 'axios'
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
    }
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
