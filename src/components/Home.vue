<template>
	<div>
		<b-container class="justify-content-center">
			<h1>News</h1>
			<h1>This site is a work in progress.</h1>
		</b-container>
	</div>
	<!-- <div >
		<b-container fluid class="text-center">
			<b-row>
				<b-col sm="6">
					<h1>News</h1>
					<h1>This site is a work in progress.</h1>
				</b-col>

				<!-- <b-col sm="6">
					<h1>Community Members News</h1>
						<article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dapibus nibh. Proin et posuere lorem. Praesent vel scelerisque purus, at sodales enim. Cras in imperdiet quam. Quisque sit amet massa orci. Nunc egestas arcu et odio commodo condimentum. Nulla condimentum pellentesque velit non ultricies. Proin vehicula maximus molestie. Donec eget consectetur risus, in aliquam magna. Sed tempus, arcu non gravida efficitur, tortor ex finibus tortor, non posuere lorem nulla ac enim. Donec nisl eros, efficitur nec nisl sit amet, mollis pretium est. Suspendisse at neque ut lectus vehicula lacinia nec ac nisl. Phasellus a erat lorem. Sed ultricies laoreet magna. Vestibulum a posuere arcu. Mauris eget feugiat ligula.
							Vestibulum a finibus est, et malesuada sem. Vivamus id ultrices magna, at pulvinar quam. Etiam id magna et orci aliquet sagittis at vitae sapien. Maecenas dictum enim eu eros feugiat, ac elementum massa fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent odio felis, auctor porttitor maximus a, consectetur quis mauris. Duis blandit ex augue, a scelerisque nulla facilisis ac. Etiam luctus mauris eget egestas pellentesque. Nam ut faucibus sapien. Sed sit amet placerat quam. Integer porta fringilla tempus. Cras lacinia tristique massa, quis blandit quam iaculis vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam congue id ante vitae fermentum.
						</article>
						<router-link :to="'#'">Add Read More Link Eventually</router-link>
						
					</b-col> -->

			<!-- </b-row> -->
	
			<!-- <p v-if="username">has name</p> -->
		<!-- </b-container>
	</div> --> 
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
			
		}
	}
</script>


<style>
	p {
		white-space: pre-wrap;
		
	}

	article {
		white-space: pre-wrap;
	}

</style>
