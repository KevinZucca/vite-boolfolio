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
          <router-link :to="{ name: 'home'}">Home Page</router-link>
          <router-link :to="{ name: 'projects'}">Tutti i progetti</router-link>
          <router-link :to="{ name: 'about'}">About</router-link>
      </nav>
    </div>

  </div>

</template>

<style lang="scss" scoped>

    .full-container{
      border-bottom: 1px solid rgba(0, 0, 0, 0.235);
    }

    nav {
        display: flex;
        align-items: center;
        gap: 40px;

        padding: 10px;
        height: 70px;
    }

</style>
