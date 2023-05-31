<script>
import AppHeader from './components/AppHeader.vue';


export default{
  name: 'App',

  data() {
    return {
     
    };

  },

  components: {
    AppHeader,
  },
  
  created() {
  },

  methods: {
   
  }

  }
</script>

<template>

  <AppHeader></AppHeader>
  <router-view></router-view>

</template>

<style lang="scss" scoped>

</style>
