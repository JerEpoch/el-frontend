<template>
  <div>
    <b-container class="justify-content-center">
      <h1>Community News</h1>
      
      <header>
        <hr>
        <h3>Article Headline</h3>
        <h6>by  Person - Date</h6>
      </header>
 

      <article>
        {{ testThing|truncate }}<router-link :to="'#'">Add Read More Link Eventually</router-link>
        
      </article>
      
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        testThing: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dapibus nibh. Proin et posuere lorem. Praesent vel scelerisque purus, at sodales enim. Cras in imperdiet quam. Quisque sit amet massa orci. Nunc egestas arcu et odio commodo condimentum. Nulla condimentum pellentesque velit non ultricies. Proin vehicula maximus molestie. Donec eget consectetur risus, in aliquam magna. Sed tempus, arcu non gravida efficitur, tortor ex finibus tortor, non posuere lorem nulla ac enim. Donec nisl eros, efficitur nec nisl sit amet, mollis pretium est. Suspendisse at neque ut lectus vehicula lacinia nec ac nisl. Phasellus a erat lorem. Sed ultricies laoreet magna. Vestibulum a posuere arcu. Mauris eget feugiat ligula.'
      }
    },
    filters: {
      truncate: function(val) {
        if (val.length > 200) {
          val = val.substring(0,197) + '...'
        }
        return val
      }
    }
  }
</script>