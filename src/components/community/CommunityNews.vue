<template>
  <div>
    <b-container class="justify-content-center">
      <h1>Community News</h1>
      
      <!-- <header>
        <hr>
        <h3>Article Headline</h3>
        <h6>by  Person - Date</h6>
      </header>
 

      <article>
        {{ testThing|truncate }}<router-link :to="'#'">Add Read More Link Eventually</router-link>
        
      </article> -->

    
        <ul>
          <li v-for="(p) in newsPosts" :key="p.id">
            <div class="news-post">
              <h1 class="news-title">{{ p.newsTitle }}</h1>
              <div class="posted-by-t">by  {{ p.user }} - {{ p.publishDate | moment("MMMM Do YYYY") }}</div>
              <div class="post-preview">{{ p.newsPost|truncateNewsPost }}<router-link :to="`/newspost/${p.id}`" v-if="p.newsPost.length > 200">Read more</router-link></div>
            </div>
  
          </li>
        </ul>
  
      
    </b-container>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  // import {truncateNewsPost} from '@/utils'
  // import '.../utils/filters'
  

  export default {
    data() {
      return {
        testThing: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dapibus nibh. Proin et posuere lorem. Praesent vel scelerisque purus, at sodales enim. Cras in imperdiet quam. Quisque sit amet massa orci. Nunc egestas arcu et odio commodo condimentum. Nulla condimentum pellentesque velit non ultricies. Proin vehicula maximus molestie. Donec eget consectetur risus, in aliquam magna. Sed tempus, arcu non gravida efficitur, tortor ex finibus tortor, non posuere lorem nulla ac enim. Donec nisl eros, efficitur nec nisl sit amet, mollis pretium est. Suspendisse at neque ut lectus vehicula lacinia nec ac nisl. Phasellus a erat lorem. Sed ultricies laoreet magna. Vestibulum a posuere arcu. Mauris eget feugiat ligula.'
      }
    },
    created() {
      this.$store.dispatch('getCommunityNewsPosts')
    },
    computed: {
      ...mapGetters({
        newsPosts: 'getCommunityNews'
      })
    }
  }
</script>

<style>
  ul {
    list-style-type: none;
  }

  .news-post {
    padding-bottom: .75em;
  }
  
  .news-title {
    font-weight: normal;
    font-size: 34px;
  }

  .posted-by {
    font-size: 14px;
  }

  .post-preview {
    padding-bottom: 2px;
    border-bottom: 2px solid;
    border-bottom-color: #dee1e5;
  }
</style>