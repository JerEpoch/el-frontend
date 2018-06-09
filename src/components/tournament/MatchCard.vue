<template>
	<div >
		<b-container class="justify-content-center">
			<h1>Matches</h1>
      {{matches}}
			<b-card-group deck class="tourn-card">
        <b-card :header="getRoundNumber" align="center">

        </b-card>
			</b-card-group>
		</b-container>
	</div>
</template>


<script>
  export default {
    props: ['players', 'matches'],
    data() {
      return {
        round: ''
      }
    },
    computed: {
      getRoundNumber:function() {
        return this.round = this.matches[0].round.toString()
      }
    }
  }
</script>