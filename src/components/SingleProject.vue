<script>
import axios from 'axios';
export default {
  name: 'SingleProject',
  data() {
    return {
      projectSlug : '',
      project : {},
      apiURL: 'http://127.0.0.1:8000/api/projects/',
    }
  },

  methods: {
    getProjects() {
        axios.get(this.apiURL + this.projectSlug).then(response=>{
          this.project = response.data.project;
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
     <div class="container text-center my-5">
        <h1>{{ project.name }}</h1>
        <img :src="getImage()">
        <p id="project-description">{{ project.description }}</p>
        <p>Tipologia: {{ project.type ? project.type.name : 'Nessuna tipologia' }}</p>
        <p>Tecnologie: <strong v-for="technology in project.technologies">{{ technology.name }}</strong></p>

     </div>
</template>

<style lang="scss" scoped>

.container {
  #project-description {
    font-size: 1.5em;
  }
}
</style>