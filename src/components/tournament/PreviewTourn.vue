<template>
<div>
    <b-card-group deck class="tourn-card">
    <b-card :header="tournName" >
      <b-list-group>
        <b-list-group-item class="task-list" v-for="(name, index) in rArray" :name="name" :key="name">{{rArray[index]}}</b-list-group-item>
      </b-list-group>
    </b-card>

  </b-card-group>
  <b-button @click="randBracket" class="mt-2" v-show="!randomDone">random</b-button>
  <b-button v-show="randomDone" @click="submitBracket">Create Tournament</b-button>
</div>

</template>


<script>
  export default {
    data() {
      return {
        newRand: [],
        randomDone: false
      }
    },
    props: ['tournName', 'allNames'],
    computed: {
      rArray: function() {
        // console.log("hi")
        return this.newRand
      }
    },
    methods: {
      randBracket() {
        this.randomDone = true
        var tempArr = this.allNames
        for(let i = tempArr.length - 1; i >=0; i--){
          let randIndex = Math.floor(Math.random() * (i+1))
          let plyrAtIndex = tempArr[randIndex]
          tempArr[randIndex] = tempArr[i]
          tempArr[i] = plyrAtIndex
        }
        // this.randomizedNames = tempArr
        this.newRand = this.allNames
        // console.log("original: " + this.allNames)
        // console.log(this.newRand)
        // this.showPreview = true
      },
      submitBracket() {
        console.log("submitting bracket...")
      }
    }
  }
</script>