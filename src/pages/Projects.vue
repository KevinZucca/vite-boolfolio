<script>
import axios from 'axios';
import ProjectItem from '../components/ProjectItem.vue';

export default{
  name: 'App',

  data() {
    return {
      projects : [],
    };
  },

  components: {
    ProjectItem
  },
  
  created() {
    this.getProjects();
  },

  computed: {
  },
  

  methods: {
    getProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then(response=>{
        this.projects = response.data.results.data;
        console.log(this.projects)
      });
    },

  }

  }
</script>

<template>

<div class="container">
  <h1>Lista progetti</h1>
  
  <div class="row">
    <div class="col-3" v-for="project in projects">
      <ProjectItem :project="project"></ProjectItem>
    </div>

  </div>

</div>


</template>

<style lang="scss" scoped>

.container {
  padding: 20px;
}


</style>
