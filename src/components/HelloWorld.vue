<template>
  <div class="hello">
    <h1>EL Bracket Site</h1>
    <button @click="getApi">Get api</button>
    <button @click="getApiTwo">Get api two</button>
    <h3>{{ msg }}</h3>
    <h3>wtf</h3>
  </div>
</template>

<script>
  import axios from 'axios'
  //const BASE_URL = 'http://127.0.0.1:5000'
  //const PROD_BASE_URL = 'http://104.236.24.149'
  export default {
    name: 'app',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      getApi() {
        axios.get('/api')
          .then(response => {
            console.log(response.data.msg)
            this.msg = response.data.msg
      })
      .catch(e => {
        console.log(e.response)
      })
    },
    getApiTwo() {
      axios.get('/api/two')
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
</style>
