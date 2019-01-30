<template>
	<div>
		<b-navbar toggleable id="navbar-background">
			<b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
			<b-navbar-brand><router-link to="/">WI Extra Life</router-link></b-navbar-brand>
			<b-collapse is-nav id="nav_text_collapse">
				<b-navbar-nav>
					<b-nav-item><router-link to="/getapi"><a>API</a></router-link></b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav>
					<b-nav-item><router-link to="/community"><a>Our Community</a></router-link></b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav>
					<b-nav-item-dropdown>
						<template slot="button-content">Tournaments</template>
						<b-dropdown-item><router-link to="/current_tournament"><a>Current Tournaments</a></router-link></b-dropdown-item>
						<b-dropdown-item><router-link to="/new_tournament"><a>Create Tournament</a></router-link></b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<b-nav-item right><router-link to="/about"><a>About Us</a></router-link></b-nav-item>
					<b-nav-item-dropdown right>
						<template slot="button-content" v-if="isAuthenticated">{{username}}</template>
						<template slot="button-content" v-else>User</template>
						<b-dropdown-item v-if="getAdmin"><router-link to="/admin" ><a>Admin Page</a></router-link></b-dropdown-item>
						<div v-if="!username">
							<b-dropdown-item ><router-link to="/signup"><a>Register</a></router-link></b-dropdown-item>
							<b-dropdown-item ><router-link to="/login"><a>Login</a></router-link></b-dropdown-item>
						</div>
						<div v-if="username">
							<b-dropdown-item ><router-link :to="`/profile`"><a>Profile</a></router-link></b-dropdown-item>
							<b-dropdown-item  @click="logout"><a>Logout</a></b-dropdown-item>
						</div>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import store from '../store/store'
	import {checkUser} from '@/utils'
	
	export default {
		data() {
			return {
				isAdmin: false
			}
		},
		methods: {
			logout() {
				this.$store.dispatch('logout')
			}
		},
		computed: {
			...mapGetters({
				username: 'user'
			}),
			getAdmin: function() {
				if(store.getters.isAdmin) {
					return this.isAdmin = true
				}
			},
			isAuthenticated: function() {
				return this.$store.getters.isAuthenticated
			}
		},
		created() {
			checkUser()
		}
	}
</script>

<style scoped>
	#navbar-background {
		background-color: #9ac1ea;
	}
</style>