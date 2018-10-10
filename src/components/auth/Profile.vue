<template>
  <div>
    <b-container class="justify-content-center">
      <h1>Your Profile</h1>

      <b-form @submit="onSubmit">
        <b-form-group label="Email:">
          <b-form-input type="email"  :value="user.email" placeholder="Email" v-model="email" class="input-box-width">
          </b-form-input>
        </b-form-group>

        <b-form-group label="New Password:">
          <b-form-input type="password" placeholder="New Password" v-model="newPassword" class="input-box-width"></b-form-input>
        </b-form-group>

        <b-form-group label="Confirm Password:">
          <b-form-input type="password" placeholder="Confirm New Password" v-model="confirmPassword" class="input-box-width"></b-form-input>
        </b-form-group>

        <b-form-group label="Extra Life Donation Page:">
          <b-form-input type="text" :value="user.elPage" placeholder="Extra Life Donation Page" v-model="elPage" class="input-box-width"></b-form-input>
        </b-form-group>

        <b-form-group label="TwitchTV:">
          <b-form-input type="text" :value="user.twitch" placeholder="TwitchTV" v-model="twitch" class="input-box-width"></b-form-input>
        </b-form-group>

        <b-form-group label="Twitter:">
          <b-form-input type="text" placeholder="Twitter" v-model="twitter" class="input-box-width"></b-form-input>
        </b-form-group>

        <b-form-group label="Current Password:">
          <b-form-input type="password" required placeholder="Current Password" v-model="password" class="input-box-width"></b-form-input>
        </b-form-group>

        <b-button type="submit">Save Changes</b-button>
      </b-form>
    </b-container>
  </div>
</template>


<script>
  import {isValidToken, setUser} from '@/utils'
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: '',
        newPassword: '',
        confirmPassword: '',
        elPage: '',
        twitch: '', 
        twitter: '',
        userData: {}
      }
    },
    methods: {
      onSubmit(e){
        e.preventDefault()
    
        if(this.newPassword) {
          if(this.newPassword != this.confirmPassword) {
            console.log("Password dont match")
          }
        }
        // const userData = {
        //   email: this.email,
        //   password: this.password,
        //   newPassword: this.newPassword,
        //   elPage: this.elPage,
        //   twitch: this.twitch,
        //   twitter: this.twitter
        // }
        //this.userData.email = "test email"
        this.checkIfChange()
        this.userData.password = this.password
        console.log(this.userData)
        this.$store.dispatch('sendUserProfile', this.userData)
      },
      checkIfChange() {
        // this looks for changes in the values since vue can't detect them if preset
        // maybe an easier way but this quick and dirty for now
        if(this.email){
          this.userData.email = this.email
        }
        if(this.twitch){
          this.userData.twitch = this.twitch
        }
        if(this.newPassword) {
          this.userData.newPassword = this.newPassword
        }
        if(this.twitter) {
          this.userData.twitter = this.twitter
        }
        if(this.elPage){
          this.userData.elPage = this.elPage
        }
      }
    },
    created() {
      
      //setUser()
     this.$store.dispatch('getUserInfo')
    },
    beforeCreate() {
      setUser()
      //console.log('test before')
    },
    computed: {
      ...mapGetters({
        user: 'getEditUserInfo'
      })
    }
  }

</script>

<style>
  .input-box-width {
    width: 55%;
  }
  .error {
    color: red
  }
</style>