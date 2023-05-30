<script>

export default{
  name: 'AppHeader',

  data() {
    return {
    
    };

  },

  components: {
  },
  
  created() {
  },

  methods: {
  }

  }
</script>

<template>

  <div class="full-container">
    <div class="container">
      <nav>
          <router-link class="nav-link" :to="{ name: 'home'}">Home Page</router-link>
          <router-link class="nav-link" :to="{ name: 'projects'}">Tutti i progetti</router-link>
          <router-link class="nav-link" :to="{ name: 'about'}">About</router-link>
      </nav>
    </div>

  </div>

</template>

<style lang="scss" scoped>

    .full-container{
      background-color: #9cb9e7;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 40px;

        padding: 10px;
        height: 70px;


        .nav-link {
          font-size: 1.3em;
          font-weight: bold;

          color: rgba(0, 0, 0, 0.708);
        }
    }

</style>
