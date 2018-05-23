<template>
	<div >
		<b-container class="justify-content-center w-50">
			<h1>Create New Tournament</h1>
        <animated-fade-out>
          <div v-show="!acceptBracket">
            <b-form-input type="text" required placeholder="Tournament Name (required)" v-model="tournName" autofocus class="input-box-width mb-1"></b-form-input>
            <b-form-input type="text" required placeholder="Player's Name (required)" v-model="playerName" class="input-box-width"></b-form-input>
            <div>
              <b-button variant="primary" class="mt-1" @click="addPlayer">Add Player</b-button>
              <b-form-checkbox class="ml-3" 
                v-model="acceptBracket"
                value="true"
                v-b-tooltip.hover title="Click to accept and click the button that appears."
              >Check to finalize the bracket.</b-form-checkbox>
            </div>
          </div>
        </animated-fade-out>

        <!-- <div>
          <b-button type="submit" class="mt-1" v-if="acceptBracket"
            v-b-tooltip.hover title="Be sure the information is correct."
          >Create Tournament</b-button>
        </div> -->
       <!-- @click="show = !show" -->
      <animated-fade-out>
        <div v-show="!acceptBracket">
      <b-card-group deck class="tourn-card mt-5" v-if="getHasData" >
        <b-card :header="tournName" align="center">
          <b-list-group>
            <b-list-group-item class="task-list" v-for="(name, index) in playersNames" :name="name" :key="name">{{playersNames[index]}}
              <b-button class="float-right" @click="deletePlayer" v-b-tooltip.hover title="Delete Player">
                <icon name="ban"></icon>
              </b-button>
            </b-list-group-item>
          </b-list-group>
        </b-card>
        </b-card-group>
        </div>
      </animated-fade-out>


          <animated-fade-in-up>
            <div v-show="acceptBracket">
              <app-preview :tournName=tournName :allNames=playersNames></app-preview>
            </div>
          </animated-fade-in-up>
      
		</b-container>
	</div>
</template>


<script>
import PreviewTourn from './PreviewTourn.vue'
import TestThing from './testThing.vue'
  export default {
    components: {
      appPreview: PreviewTourn,
      appTest: TestThing
    },
    data() {
      return {
        tournName: 'Test Name',
        playersNames: ['bob', 'jane', 'person a', 'person b', 'person c', 'person d'],
        randomizedNames: [],
        playerName: '',
        acceptBracket: false,
        showPreview: false
      }

    },
    methods: {
      onSubmit() {
        // add this
      },
      addPlayer() {
        if(this.playerName) {
          console.log(this.playerName)
          this.playersNames.push(this.playerName)
          this.playerName = ''
          console.log(this.playersNames)
        }
      },
      deletePlayer(index) {
        this.playersNames.splice(index,1)
      },
      randBracket() {
        this.showPreview = false
        var tempArr = this.playersNames
        for(let i = tempArr.length - 1; i >=0; i--){
          let randIndex = Math.floor(Math.random() * (i+1))
          let plyrAtIndex = tempArr[randIndex]
          tempArr[randIndex] = tempArr[i]
          tempArr[i] = plyrAtIndex
        }
        this.randomizedNames = tempArr
        console.log("original: " + this.playersNames)
        console.log(this.randomizedNames)
        this.showPreview = true
      },
      test(event) {
        if(event.which === 13){
          console.log("testing")
        }
        
      }
    },
    computed: {
      getHasData: function() {
        return this.playersNames.length > 0
      }
    }
  }
</script>


<style>
  .task-list {
    width: 400px;
  }

  .tourn-card {
    width: 500px;
  }

  .task-list:hover {
    background-color: #eff6f7
  }

  .input-box-width {
    width: 600px;
  }
</style>