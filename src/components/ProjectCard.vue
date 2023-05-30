<script>

export default{
  name: 'ProjectCard',

  data() {
    return {
    }
  },

  props: {
    project: Object,
  },

  created() {
  },

  methods: {
  
  },

  computed: {
    checkLength() {
        if(this.project.description.length > 70){
            return this.project.description.substring(0, 70) + '...';
        } else {
            return this.project.description;
        }
    },

    coverImage() {
        if(this.project.img == null){
            return 'https://th.bing.com/th/id/R.46731e9506c82fadd455c17d954be3d9?rik=2p2MV1JdWEywIQ&pid=ImgRaw&r=0';
        } else {
            return this.baseUrl + 'storage/' + this.project.img;
        }
    }
  }

}
</script>

<template>

  

</template>

<style lang="scss" scoped>
  

</style>
