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
          <router-link class="nav-link" exact-active-class="active" :to="{ name: 'home'}">Home Page</router-link>
          <router-link class="nav-link" exact-active-class="active" :to="{ name: 'projects'}">All Projects</router-link>
          <router-link class="nav-link" exact-active-class="active" :to="{ name: 'about'}">About</router-link>
      </nav>
    </div>

  </div>

</template>

<style lang="scss" scoped>

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

          &.active {
            color: #82b1ac;
          }
        }
    }


    
</style>
