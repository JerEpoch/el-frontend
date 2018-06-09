<template>
  <div>
    <b-container class="justify-content-center">
      <h1>{{tournament.tournament_title }}</h1>
      <ul>
        <li v-for="(p, index) in tournament.players" :key="index"> 
          {{ p.playerName }}
        </li>
      </ul>
      <app-match-card :matches="tournament.match"></app-match-card>
    </b-container>
  </div>
</template>


<script>
  import axios from 'axios'
  import MatchCard from './MatchCard.vue'

  export default {
    components: {
      appMatchCard: MatchCard
    },
    data() {
      return {
        tournament: [],
        matches: []
      }
    },
    beforeMount() {
      let id=this.$route.params.id
      var vm = this
      axios.get(`/bracket-api/tournament/${id}`)
      .then(res => {
        console.log(res.data.tournament)
        vm.tournament = res.data.tournament
      })
      .catch(error => console.log(error))
    }
  }
</script>