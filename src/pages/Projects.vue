<script>
import axios from 'axios';
import ProjectItem from '../components/ProjectItem.vue';

export default{
  name: 'App',

  data() {
    return {
      projects : [],
      pagination: {}, 
      isLoading: true,
      apiURL: 'http://127.0.0.1:8000/api/projects',
    };
  },

  components: {
    ProjectItem
  },
  
  created() {
    this.getProjects(this.apiURL);
  },

  computed: {
  },
  

  methods: {
    getProjects(apiURL){
      axios.get(apiURL).then(response=>{
        this.projects = response.data.results.data;
        this.pagination = response.data.results;
        if(response.data.success){
            this.projects = response.data.results.data;
            this.isLoading = false;
          } else {
            this.isLoading = false;
          }
      });
    },

  }

  }
</script>

<template>
<div class="full-container animate__animated animate__fadeIn">

    <!-- loading spinner -->
  <div id="spinner" class="d-flex justify-content-center" v-if="isLoading">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <!-- // -->
  
  <div class="container">
    
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3" v-for="project in projects">
        <ProjectItem :project="project"></ProjectItem>
      </div>

      <div id="pagination-container">
        <button v-for="paginate in this.pagination.links " 
          class="btn paginate-button" 
          v-html="paginate.label"
          @click="getProjects(paginate.url)">
        </button>
      </div>
  
    </div>
  
  </div>

</div>


</template>

<style lang="scss" scoped>

.full-container {
  background-color: rgba(0, 0, 0, 0.945);

  #spinner {
    position: fixed;
    top: 50%;

    width: 100%;
    height: 100%;
    color: white;
  }
  .container {
    padding: 20px;
    min-height: 950px;

    h1 {
      color: rgba(255, 255, 255, 0.856);
    }
  
  
    .row {
      display: flex;
      flex-flow: row wrap;
    }

    #pagination-container {
      display: flex;
      justify-content: center;
      gap: 10px;

      button {
        background-color: #fff;
      }
    }
  }
}


</style>
