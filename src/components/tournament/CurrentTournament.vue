<template>
	<div >
		<b-container class="justify-content-center">
			<h1>Current Tournaments</h1>
			<div>
				<ul class="list-unstyled">
					<li v-for="(t, index) in allTournaments" :key="t.id">
						<router-link :to="`/tournament/${t.id}`">{{ t.tournament_title }}</router-link>
					</li>
				</ul>
			</div>
		</b-container>
	</div>
</template>

<script>
	import axios from 'axios'
	

	export default {
		data() {
			return {
				allTournaments: [],
				title: ''
			}
		},
		created() {
			var vm = this
			axios.get('/bracket-api/tournament/getAllTournaments')
			.then(res => {
				//console.log(res.data.tourns)
				vm.allTournaments = res.data.tourns
				vm.title = res.data.tourns[0].id
				//console.log("All Tourns")
			//	console.log(this.allTournaments.tourns)
				//console.log(this.allTournaments.tourns[0].id)
			})
			.catch(error => console.log(error))
		},
		methods: {

		}
	}
</script>