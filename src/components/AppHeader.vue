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
    refreshPage() {
        window.location.reload()
    }
  }

  }
</script>

<template>

  <div class="full-container">
    <nav>
        <a @click="refreshPage()" href="#">Tutti i Progetti</a>
    </nav>
  </div>


</template>

<style lang="scss" scoped>

    nav {
        display: flex;
        align-items: center;

        padding: 10px;
        height: 70px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.235);
    }

</style>
