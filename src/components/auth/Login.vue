<template>
<div>
  <b-container class="justify-content-center w-50">
    <h1>Login</h1>
        <b-form @submit="onSubmit">
        <b-form-group label="email:">
          <b-form-input type="text" required placeholder="email" v-model="email" class="input-box-width">
          </b-form-input>
        </b-form-group>
        <b-form-group label="Password:">
          <b-form-input type="password" required placeholder="Password" v-model="password" class="input-box-width">
          </b-form-input>
        </b-form-group>
        <b-button type="submit">Submit</b-button>
      </b-form>
  </b-container>
</div>
  
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault()
        const formData = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('login', formData)
        .then(() => {

        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>


<style>
  .input-box-width {
    width: 600px;
  }
</style>