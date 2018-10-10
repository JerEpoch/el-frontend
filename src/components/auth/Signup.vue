<template>
	<div>
		<b-container class="justify-content-center w-50">
			<b-form @submit="onSubmit">
				<h1>Sign Up</h1>
					<b-form-group label="Email:">
						<b-form-input type="email" required placeholder="Email" v-model="email" class="input-box-width">
						</b-form-input>
					</b-form-group>
					<b-form-group label="Username:">
						<b-form-input type="text" required placeholder="Username" v-model="username" class="input-box-width">
						</b-form-input>
					</b-form-group>
					<b-form-group label="Password:">
						<b-form-input type="password" required placeholder="Password" v-model="password" class="input-box-width">
						</b-form-input>
					</b-form-group>
					<b-form-group label="Confirm Password:">
						<b-form-input type="password" required placeholder="Retype Password" v-model="confirmPassword" class="input-box-width">
						</b-form-input>
					</b-form-group>
					<b-button type="submit">Submit</b-button>
				</b-form>
				<b-alert id="errorAlert" variant="danger" dismissible :show="hasRegErr" @dismissed="hasRegErr=false">{{ errorMessages }}</b-alert>
				<!-- <p>Has errors {{ hasRegErr }} </p> -->	
			</b-container>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		data() {
			return {
				email: '',
				username: '',
				password: '',
				confirmPassword:'',
				errors: '',
				hasErrors: false
			}
		},
		computed: {
			...mapGetters({
				userState: 'user',
				errorMessages: 'registerErrorMsg',
				hasRegErr: 'hasReigsterError'
			})
		},
		methods: {
			onSubmit(e) {
				e.preventDefault()
				this.errors = ''
				this.hasErrors = false
				if(this.password != this.confirmPassword){
					this.hasErrors = true
					this.errors = "Passwords do not match"
				} else {
					const formData = {
						email: this.email,
						username: this.username,
						password: this.password,
						confirmPassword: this.confirmPassword
					}
					this.$store.dispatch('signup', formData)
						.then(() => {
							//this.$router.push('/')
							//console.log("it worked")
						})
						.catch(error => {
							console.log(error)
						})
				}
			}

		}
	}

</script>

<style scoped>
	#errorAlert {
		margin-top: 10px;
	}

	.input-box-width {
    width: 55%;
  }
</style>

