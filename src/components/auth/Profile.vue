<template>
  <div>
    <b-container class="justify-content-center">
      <h1 v-if="isLoading">Hang on while we fetch your profile.</h1>
      

      <div v-if="!isLoading">
      <h1>Your Profile</h1>
      <!-- <h2 v-if="user">{{ $store.getters.getEditUserInfo.email }} - {{ isLoading }}</h2> -->
      
    
      <!-- <h3>{{ user.email }}</h3> -->
      <!-- <b-alert id="errorAlert" variant="danger" dismissible :show="editErrors" >{{ editErrors }}</b-alert> -->
      <b-form @submit="onSubmit">
        <!-- <div class="input" :class="{invalid: $v.email.$error}">
          <b-form-group label="Email:" >
            <b-form-input type="email" @blur.native="$v.email.$touch()" :value="user.email" placeholder="Email" v-model="email" class="input-box-width" >
            </b-form-input>
            <div v-if="$v.email.$dirty">
              <p v-if="!$v.email.email">Must provide a valid email address.</p>
            </div>
          </b-form-group> -->
        <div class="input" >
          <b-form-group label="Email:" >
            <b-form-input type="text"   placeholder="Email" v-model="email" class="input-box-width" :class="{ invalid: errors.has('email')}" v-validate.disable="'required|email'" name='email' >
            </b-form-input>

            <!-- <b-form-input v-model="testEmail" class="input-box-width"></b-form-input> -->

          <span v-show="errors.has('email') " class="error">{{ errors.first('email')  }}</span>
            <!-- <div v-if="$v.email.$dirty">
              <p v-if="!$v.email.email">Must provide a valid email address.</p>
            </div> -->
          </b-form-group>
        </div>

        <b-form-group label="New Password:">
          <b-form-input type="password" placeholder="New Password" v-model="newPassword" class="input-box-width" ></b-form-input>
        </b-form-group>

        <div class="input">
          <b-form-group label="Confirm Password:">
            <b-form-input type="password" placeholder="Confirm New Password" v-model="confirmPassword" class="input-box-width" name='password_confirmation' v-validate="'confirmed:newPassword'"></b-form-input>

            <span v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</span>
          </b-form-group>
        </div>

        <!-- <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <b-form-group label="Confirm Password:">
            <b-form-input type="password" @blur.native="$v.confirmPassword.$touch()" placeholder="Confirm New Password" v-model="confirmPassword" class="input-box-width"></b-form-input>
            <div v-if="$v.confirmPassword.$dirty">
              <p v-if="!$v.confirmPassword.sameAsPassword">
                Your new password must match.
              </p>
            </div>
          </b-form-group>
        </div> -->

        <b-form-group label="Extra Life Donation Page:">
          <b-form-input type="text" v-model="elPage" placeholder="Extra Life Donation Page"  class="input-box-width"></b-form-input>
        </b-form-group>

        <b-form-group label="TwitchTV:">
          <b-form-input type="text"  placeholder="twitch.tv/YOURUSERNAME" v-model="twitch" class="input-box-width" v-validate="'url'" name='twitch' :class="{ invalid: errors.has('twitch')}"></b-form-input>
          <span v-show="errors.has('twitch')">{{ errors.first('twitch') }} (Must be in format twitch.tv/USER)</span>
        </b-form-group>

        <b-form-group label="Twitter:">
          <b-form-input type="text"  placeholder="Twitter" v-model="twitter" class="input-box-width"></b-form-input>
        </b-form-group>

          <b-form-group label="Current Password:">
            <b-form-input type="password" required placeholder="Current Password" v-model="password" class="input-box-width"></b-form-input>
          </b-form-group>
  
        <b-button type="submit">Save Changes</b-button>
      </b-form>

      <p v-if="editErrors">{{ editErrors }}</p>
      </div>
    </b-container>
  </div>
</template>


<script>
  import {isValidToken, setUser} from '@/utils'
  import { mapGetters } from 'vuex';
  // vuelidate

  // import {required, email, sameAs} from 'vuelidate/lib/validators'

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
        hasError: false,
        errorMessage: '',
        userData: {}
      }
    },
    // vuelidate
    // validations: {
    //   email: {
    //     required,
    //     email
    //   },
    //   confirmPassword: {
    //     asmeAsPassword: sameAs('newPassword')
    //   },
    //   password: {
    //     required
    //   }
    // },
    methods: {
      onSubmit(e){
        e.preventDefault()
        // this.$v.$touch()
        // isauth from store
        if(this.$store.getters.isAuthenticated) {
          
          this.$validator.validateAll().then(() => {
            if(!this.errors.any()) {
              console.log("NO ERRORS BROOOOO")
            }
            else {
              console.log("Something went wrong.")
            }
          })
    
        }
        else {
          console.log("hello   sdfsdf")
        }

        // if(this.newPassword) {
        //   if(this.newPassword != this.confirmPassword) {
        //     console.log("Password dont match")
        //   }
        // }

        this.checkIfChange()
        this.userData.password = this.password
        console.log("user data being updated:")
        console.log(this.userData)
        //this.$store.dispatch('sendUserProfile', this.userData)
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
      },
      initUserProfile() {
        this.email = this.$store.getters.getEditUserInfo.email
        this.elPage = this.$store.getters.getEditUserInfo.elPage
        this.twitch = this.$store.getters.getEditUserInfo.twitch
        this.twitter =  this.$store.getters.getEditUserInfo.twitter
      }
    },
    created() {
      return this.$store.dispatch('getUserInfo').then(() => {
        this.initUserProfile()
      })
    },
    beforeCreate() {
      
      setUser()

      
      
      //console.log("email in created hook  " + this.$store.getters.getEditUserInfo.email)
    
    },
    mounted() {
      //console.log("email in mounted hook  " + this.$store.getters.getEditUserInfo.email)
      
      //this.email = this.$store.getters.getEditUserInfo.email
    },
    computed: {
      ...mapGetters({
        editUser: 'getEditUserInfo',
        editErrors: 'getEditErrors',
        isLoading: 'editUserLoading'
      }),
      testEmail: {
        get() {
          return this.$store.getters.getEditUserInfo.email
        },
        set() {}
      }
    }
  }

</script>

<style>
  .input-box-width {
    width: 55%;
  }
  .error {
    color: red;
  }

  .has-error {
    border: 1px solid red;
  }

  .input-box-width.invalid {
    border: 2px solid red;
  }

  .input.invalid input {
    border: 1px solid red;
  }
</style>