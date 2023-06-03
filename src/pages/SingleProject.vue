<script>
import axios from 'axios';
export default {
  name: 'SingleProject',
  data() {
    return {
      projectSlug : '',
      project : {},
      apiURL: 'http://127.0.0.1:8000/api/projects/',
      projectFound: false,
      isLoading: true,
    }
  },

  methods: {
    getProjects() {
        axios.get(this.apiURL + this.projectSlug).then(response=>{
          if(response.data.success){
            this.project = response.data.project;
            this.projectFound = true;
            this.isLoading = false;
          } else {
            this.projectFound = false;
            this.isLoading = false;
          }
        });
    },

    getImage() {
      if(this.project.img) {
        return 'http://127.0.0.1:8000/storage/' + this.project.img;
      } else {
        return 'https://www.schiffner.com/wp-content/themes/schiff-responsive/images/noimage.jpg';
      }
    },
  },


  mounted() {
    this.projectSlug = this.$route.params.slug;
    this.getProjects();
  },
  

}
</script>

<template>
  <!-- loading spinner -->
  <div id="spinner" class="d-flex justify-content-center" v-if="isLoading">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <!-- // -->
  
  <div class="container text-center my-5" v-if="this.projectFound">
    <h1>{{ project.name }}</h1>
        <img :src="getImage()">
        <p id="project-description">{{ project.description }}</p>
        <p>Tipologia: {{ project.type ? project.type.name : 'Nessuna tipologia' }}</p>
        <p>Tecnologie: <strong v-for="technology in project.technologies">{{ technology.name }}</strong></p>
      </div>
      
      <div id="error-advise" v-else>
        <h4 class="text-center alert alert-danger">Nessun progetto trovato</h4>
      </div>
      
</template>

<style lang="scss" scoped>

  .container {
    #project-description {
      font-size: 1.5em;
    }
  }

  #spinner {
    position: fixed;
    top: 50%;

    width: 100%;
    height: 100%;
  }
</style>