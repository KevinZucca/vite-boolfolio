<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';

export default{
  name: 'App',

  data() {
    return {
      projects : [],
      currentPage : 1,
      lastPage : '',
    };

  },

  components: {
    ProjectCard,
    AppHeader,
  },
  
  created() {
    this.getProjects();
  },

  methods: {
    getProjects(){
      axios.get('http://127.0.0.1:8000/api/projects?page=' + this.currentPage).then(response=>{
        this.projects = response.data.results.data;
        this.lastPage = response.data.results.last_page;
      });
    },

    goNextPage() {
      this.currentPage++;
      this.getProjects();
      if(this.currentPage == this.lastPage){
        document.getElementById('next-page').classList.add('invisible');
        document.getElementById('prev-page').classList.remove('invisible');
      } 
    },

    goPrevPage() {
      this.currentPage--;
      document.getElementById('next-page').classList.remove('invisible');
      this.getProjects();
      if(this.currentPage == 1){
        document.getElementById('prev-page').classList.add('invisible');
      }
    }
  }

  }
</script>

<template>

  <AppHeader></AppHeader>

  <div class="container">
    <h1 id="projects-title">Tutti i progetti</h1>

    <div class="row">
      <div class="col-3" v-for="project in projects">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>

    <button id="prev-page" @click="goPrevPage()">
      Pagina precedente
    </button>

    <button id="next-page" @click="goNextPage()">
      Pagina successiva
    </button>

  </div>


</template>

<style lang="scss" scoped>

.container {
  position: relative;


  #projects-title {
    text-align: center;
    padding: 20px;
  }
  
  .col-3 {
    margin-bottom: 30px;
  }

  #prev-page {
    position: absolute;
    left: -150px;
    top: 50%;

    padding: 10px;
    border: none;
  }
  
  #next-page {
    position: absolute;
    right: -150px;
    top: 50%;

    padding: 10px;
    border: none;
  }

}


.invisible {
  display: none;
}


</style>
