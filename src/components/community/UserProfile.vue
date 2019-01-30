<template>
  <div>
    <b-container class="justify-content-center">
      <h1>{{ user.username }}'s profile</h1>
      
    </b-container>
  </div>
</template>


<script>
import axios from 'axios'

  export default {
    data() {
      return {
        user: {}
      }
    },
    mounted() {
      this.getUserProfile()
    },
    methods: {
      getUserProfile() {
        const userID = parseInt(this.$route.params.id)
        console.log("User id is " + userID)
        return axios.get(`/bracket-api/users/community/user/${userID}`)
        .then(res => {
          this.user = res.data.msg
          console.log(res.data.msg)
      })
  }
    },
    computed: {
      // user() {
      //   const id = parseInt(this.$route.params.id)
      //   console.log(id)
      //   //return this.$store.getters.getCommunityMembers
      //   //this.$store.dispatch('getUserProfile', id)
      // }
    }
  }
</script>

