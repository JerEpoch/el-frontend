<template>
  <div>
    <b-container class="justify-content-center">
      <h1>{{tournament.tournament_title }}</h1>
      <!-- <ul class="list-unstyled">
        <li v-for="(p, index) in tournament.players" :key="index"> 
          {{ p.playerName }}
        </li>
      </ul> -->
      <h3>Matches</h3>
      <hr>
      <!-- need to loop through rounds eventually here -->
      <app-match-card :matches="tournament.match" :round="round" :roundNum="roundNum"></app-match-card>
      
   
 
      <!-- <app-match-card :matches="tournament.match" :round="round"></app-match-card> -->
    </b-container>
  </div>
</template>


<script>
  import axios from 'axios'
  import MatchCard from './MatchCard.vue'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      appMatchCard: MatchCard
    },
    data() {
      return {
        tournament: [],
        match: [],
        wins: [],
        round: '',
        roundNum: ''
      }
    },
    created() {
      let id=this.$route.params.id
      var vm = this
      axios.get(`/bracket-api/tournament/${id}`)
      .then(res => {
        console.log(res.data.tournament)
        vm.tournament = res.data.tournament
        vm.match = res.data.tournament.match
        vm.$store.dispatch('setWinnersArr', vm.match.length)
        vm.roundNum = vm.tournament.match[0].round
        //console.log(vm.match.length)
        this.getRoundNumber()
        //this.setWinnersObj()
      })
      .catch(error => console.log(error))
    },
    mounted() {
      
    },
    methods: {
      getRoundNumber() {
        return this.round = "Round " + this.tournament.match[0].round.toString()
      },
      setWinnersObj() {
        console.log("test obj")
        var vm = this
        for(let i=0; i < this.tournament.players.length; i++) {
          console.log(this.tournament.players[i].playerName)
          //this.winners.push({name: this.tournament.players[i].playerName, status: false})
          //vm.winners[i].name = this.tournament.players[i].playerName
        }

        console.log("WINNERS " + this.winners[0].status)
      }
    }
  }
</script>

<style>
  .tourn-card {
    width: 500px;
  }
  .task-list {
    width: 400px;
  }
</style>