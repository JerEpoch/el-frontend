<template>
  <div class="hello">
    <h1>EL Bracket Site</h1>
    <button @click="getApi">Get api</button>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
  const BASE_URL = 'http://localhost:5000'
  export default {
    name: 'app',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      getApi() {
        this.$http.get(BASE_URL + '/api')
          .then(response => {
            console.log(response.body.msg)
            this.msg = response.body.msg
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
