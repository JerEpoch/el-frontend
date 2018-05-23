<template>
  <div>
		<b-container class="justify-content-center">
			<h1>Sign Up</h1>
			<button @click="login()">Login</button>
		</b-container>
  </div>
</template>


<script>
	import AuthService from '../../auth.js'
	const auth = new AuthService()
	const { login } = auth

	export default {
		methods: {
			login
		}
	}
</script>