<template>
	<div >
		<b-container class="justify-content-center">
			<h1>Welcome to the Extra Life Bracket Site</h1>
			<h2>Hello, {{ username }}</h2>
			<!-- <p v-if="username">has name</p> -->
		</b-container>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import {mapMutations} from 'vuex'
	import axios from 'axios'
	import store from '../store/store'
	import {isValidToken, setUser, checkUser} from '@/utils'

	export default {
		data() {
			return {
				hasName: false
			}
		},
		computed: {
			...mapGetters({
				username: 'user'
			})
		},
		created() {
			//checkUser()
			// if(!this.username){
			// 	console.log("no name")
			// }
			// if(!this.$store.getters.isAuthenticated){
	
			// 		setUser()

			// }
			
		},
		mounted() {
			

				//move all this to the store itself
				
			
			// if(localStorage.getItem('access_token')) {
			// 	if(!store.getters.username){
			// 		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
			// 		return axios.get('/bracket-api/users/user')
			// 			.then(res => {
			// 			//console.log(res.data.logged_in_as)
			// 			console.log(res.data)
			// 			this.$store.commit('SET_USER', res.data.logged_in_as)
			// 			this.$store.dispatch('setAccess', res.data.user_access)
			// 		})
			// 		.catch(err => {
			// 			console.log("error getting user")
			// 			//console.log(err.data)
			// 		})
			// 	}
			// 	//console.log("token is here")
			// 	//jwt_token = localStorage.getItem('token')
			// 	//console.log(localStorage.getItem('access_token'))
			// }
		}
	}
</script>


<style>

</style>
