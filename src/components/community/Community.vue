<template>
  <div>
    <b-container class="justify-content-center">
      <h1 v-if="isLoading">Hang tight while we fetch the community!</h1>
      
      <div v-if="!isLoading">
        <h1>Our Community</h1>
        
        <ul>
          <li v-for="(user, index) in communityMembers" :key="index">
            <router-link :to="'/profile/user/' + user.id"> {{ user.username}} </router-link>
            
          </li>
        </ul>
      </div>
    </b-container>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        allMembers: []
      }
    },
    methods: {
      setMembers() {
        this.allMembers = this.$store.getters.getCommunityMembers
        // console.log("MEMBERS LIST:")
        // console.log(this.allMembers)
      }
    },
    created() {
      this.$store.dispatch('getCommunityList')
      .then(() => {
       // this.setMembers()
      })
      
    },
    computed: {
      ...mapGetters({
        communityMembers: 'getCommunityMembers',
        isLoading: 'getCommunityLoading'
      })
    }
  }

</script>

<style>
  li {
    list-style-type: none;
  }
</style>
