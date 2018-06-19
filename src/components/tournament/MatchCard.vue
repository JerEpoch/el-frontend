<template>
	<div >
		<b-container class="justify-content-center">
			
      <!-- {{matches}} -->
      <div>
        <b-card-group deck class="tourn-card">
          <b-card :header="round" align="center" class=" border border-info">
            <b-list-group v-for="(name, index) in matches" :key="index">

              <b-list-group-item class="task-list border border-dark">{{matches[index].playerOne}} 
                <!-- <b-button class="float-right" v-b-tooltip.hover title="Set Player as Winner" @click="setWinner(matches[index].playerOne)">
                <icon name="check-circle"></icon></b-button> -->
    
                </b-list-group-item>
              
              <b-list-group-item class="task-list mb-3 border border-dark">{{matches[index].playerTwo}}
                <!-- <b-button class="float-right" v-b-tooltip.hover title="Set Player as Winner" @click="setWinner(matches[index].playerTwo)">
                <icon name="check-circle"></icon></b-button> -->
              </b-list-group-item>

            </b-list-group>
          </b-card>
        </b-card-group>
        <b-btn class="mt-2" v-b-modal.adminRound>Select Winners</b-btn>
        <b-btn class="mt-2" v-if="checkWinners" @click="submitMatch">Submit Match Winners</b-btn>
        <!-- <div>
          <b-dropdown text="Select Winner" size="sm" v-for="(name, index) in matches" :key="index" class="mt-2 mr-1" v-model="winnerName">
            <b-dropdown-item>{{matches[index].playerOne}}</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>{{matches[index].playerTwo}}</b-dropdown-item>
          </b-dropdown>
          <div> -->

            <!-- <b-button size="sm" class="mt-2">Finalize the Round</b-button> -->
          <!-- </div> -->
        <!-- </div> -->
      </div>

      <div>
        <b-modal id="adminRound">
          <!-- <b-form-group label="Select the Winners">
            <p>Select One From Each Match</p>
            <b-form-checkbox-group stacked v-for="(name, index) in matches" :key="index" v-model="wins">
              <h5>Match {{index + 1}}</h5>
              <b-form-checkbox :value="matches[index].playerOne" @change="test(index,matches[index].playerOne)">{{matches[index].playerOne}}</b-form-checkbox>
              <b-form-checkbox :value="matches[index].playerTwo" class="mb-2" @change="test(index,matches[index].playerOne)">{{matches[index].playerTwo}}</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>  -->
          <app-tourn-radio v-for="(name, index) in matches" :key="index" :playerOne=matches[index].playerOne :playerTwo=matches[index].playerTwo v-on:playerSelected="addPlayer($event, index)"></app-tourn-radio>
        </b-modal>
      </div>

      <div>
        <h4>Winners:</h4>
        <ul class="list-unstyled">
          <li v-for="(p, index) in winners" :key="index">
          {{index + 1}}: {{ p}}
          </li>
        </ul>
      </div>
  
		</b-container>
	</div>
</template>


<script>
  import TournamentRadio from './TournamentRadio.vue'
  import {mapGetters} from 'vuex'
  

  export default {
    components: {
      appTournRadio: TournamentRadio
    },
    props: ['players', 'matches', 'round', 'roundNum'],
    data() {
      return {
        winnerName: '',
        showSubWins: false
      }
    },
    methods: {
      setWinner(player) {
        //console.log(this.$route.params.id)
        //console.log(player + " IS WINNER")
        //this.winners.push(player)
        //console.log(this.winners)
      },
      addPlayer(player, index) {
        //winners.find(p => p===player)
        var data = {
          player: player,
          index: index
        }
        this.$store.dispatch('addPlayer', data)
      },
      submitMatch() {
        console.log(this.roundNum)
        var data = {
          roundNumber: this.roundNum,
          matchId: this.$route.params.id
        }
        this.$store.dispatch('submitMatchWinners',  data)

      }
    },
    computed: {
      ...mapGetters({
        winners: 'winners',
        checkWinners: 'winnersLength'
      })
    }
  }
</script>

