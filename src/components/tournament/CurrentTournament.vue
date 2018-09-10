<template>
	<div>
		<b-container class="justify-content-center">
			<h1>Current Tournaments</h1>
			<div v-if="allTournaments.length">
				<ul class="list-unstyled">
					<li v-for="(t, index) in allTournaments" :key="t.id">
						<router-link :to="`/tournament/${t.id}`">{{ t.tournament_title }}</router-link>
					</li>
				</ul>
			</div>
			<div v-else class="mb-4 mt-3">
				<h4>There are no tournaments currently running. Create one <router-link :to="`/new_tournament`">here</router-link></h4>
			</div>
			<h1>Previous Tournaments</h1>
			<div v-if="completedTournaments.length">
				<ul class="list-unstyled">
					<li v-for="(t, index) in completedTournaments" :key="t.id">
						<router-link :to="`/tournament/${t.id}`">{{ t.tournament_title }}</router-link>
					</li>
				</ul>
			</div>
			<div v-else class="mt-3">
				<h4>There are no past tournaments.</h4>
			</div>
		</b-container>
	</div>
</template>

<script>
	import axios from 'axios'
	import {setUser} from '@/utils'

	export default {
		data() {
			return {
				allTournaments: [],
				completedTournaments: []
				// title: ''
			}
		},
		created() {
			setUser()
			var vm = this
			axios.get('/bracket-api/tournament/getAllTournaments')
			.then(res => {
				//console.log(res.data)
				vm.allTournaments = res.data.tourns
				vm.completedTournaments = res.data.completedTourns
				// vm.title = res.data.tourns[0].id
				//console.log("All Tourns")
			//	console.log(this.allTournaments.tourns)
				//console.log(this.allTournaments.tourns[0].id)
			})
			.catch(error => console.log(error))
		}
	}
</script>