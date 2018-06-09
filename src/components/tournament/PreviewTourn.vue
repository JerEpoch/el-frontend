<template>
<div>
    <b-card-group deck class="tourn-card">
    <b-card :header="tournName" align="center">
      <b-list-group v-for="(name, index) in allNames" :name="name" :key="index">
        <b-list-group-item class="task-list">{{allNames[index].playerOne}}</b-list-group-item>
        <b-list-group-item class="task-list">VS</b-list-group-item>
        <b-list-group-item class="task-list mb-2">{{allNames[index].playerTwo}}</b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>
  <b-button @click="submitBracket" class="mt-1">Create Tournament</b-button>
  <b-button @click="getTourns" class="mt-1">GET Tournament</b-button>
  <!-- <b-button class="mt-1">Edit Bracket</b-button> -->
</div>

</template>


<script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        newRand: [],
        versusBracket: [],
        randomDone: false
      }
    },
    props: ['tournName', 'allNames', 'showPreview'],
    methods: {
      // randBracket() {
      //   this.randomDone = true
      //   console.log(this.allNames)
      //   var tempArr = this.allNames
      //   for(let i = tempArr.length - 1; i >=0; i--){
      //     let randIndex = Math.floor(Math.random() * (i+1))
      //     let plyrAtIndex = tempArr[randIndex]
      //     tempArr[randIndex] = tempArr[i]
      //     tempArr[i] = plyrAtIndex
      //   }
      //   // this.randomizedNames = tempArr
      //   this.newRand = this.allNames
      //   this.createVersuses()
      //   // console.log("original: " + this.allNames)
      //   // console.log(this.newRand)
      //   // this.showPreview = true
      // },
      // createVersuses() {
      //   //this.versusBracket.playerOne = 'Test'
      //   //console.log(this.versusBracket.playerOne)
      //   var vm = this;
      //   for(let i = 0; i <= (this.newRand.length - 1); i+=2) {
      //     //console.log(i)
      //     // this.versusBracket.push({
      //     //   playerOne: this.newRand[i],
      //     //   playerTwo: this.newRand[i+1]
      //     // })
      //     vm.$set(vm.versusBracket, i, {'playerOne': vm.newRand[i], 'playerTwo': vm.newRand[i+1]})
      //     //vm.$set(vm.versusBracket, i, {'playerTwo': vm.newRand[i+1]})
      //     //this.versusBracket.playerTwo = this.newRand[i+1]
      //   }
      //   console.log(this.versusBracket)
      // },
      submitBracket(e) {
        e.preventDefault()
        console.log("submitting bracket...")
        var bracket = this.allNames
        var name = this.tournName
        console.log(bracket)
        return axios.post('/bracket-api/tournament/create', {
          bracket,
          tournamentName: name,
          round: 1
        })
        .then(res => {
          console.log(res.data.test)
        })
        .catch(error => {
          console.log(error.response.data)
        })
      },
      getTourns() {
        console.log("getting")

        return axios.get('/bracket-api/tournament/getAllTournaments', {

        })
        .then(res => {
          console.log(res.data)
        })
      }
    }
  }
</script>