<script>
import axios from 'axios';
import ProjectItem from '../components/ProjectItem.vue';

export default{
  name: 'App',

  data() {
    return {
      projects : [],
      pagination: {}, 

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
      });
    },

  }

  }
</script>

<template>
<div class="full-container">
  
  <div class="container">
    <h1>Lista progetti</h1>
    
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
