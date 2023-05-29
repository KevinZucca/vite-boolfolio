<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

export default{
  name: 'App',

  data() {
    return {
      projects : [],
    }
  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then(response=>{
        console.log(response);
        this.projects = response.data.results;
      });
    }
  }

}
</script>

<template>

  <div class="container">
    <h1>Tutti i progetti</h1>

   
  </div>


</template>

<style lang="scss" scoped>


</style>
