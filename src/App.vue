<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default{
  name: 'App',

  data() {
    return {
      projects : [],
    };

  },

  components: {
    ProjectCard,
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
    <h1 id="projects-title">Tutti i progetti</h1>

    <div class="row">
      <div class="col-3" v-for="project in projects">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

  #projects-title {
    text-align: center;
    padding: 20px;
  }

  .col-3 {
    margin-bottom: 30px;
  }


</style>
