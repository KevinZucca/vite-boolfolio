<script>

export default{
  name: 'ProjectCard',

  data() {
    return {
        baseUrl : 'http://127.0.0.1:8000/',
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

    <div class="container">
    
        <div class="card" style="width: 18rem;">
            <img :src="coverImage" class="card-img-top" alt="cover-img">
            <div class="card-body">
                <h5 class="card-title project-name">{{ project.name }}</h5>
                <p class="card-text">{{ this.checkLength }}</p>
                <small class="card-text">Tipologia: <strong>{{ project.type ? project.type.name : 'Nessuna Tipologia'}}</strong> </small>
                <button class="btn btn-primary">
                    Vai ai dettagli
                </button>
                <a href="#" class="card-link">{{ project.github_link }}</a>
            </div> 
        </div>

    </div>

</template>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-flow: column;

        height: 400px;

        text-align: center;
        transition: scale .2s ease-in;

        &:hover {
            scale: 1.1;
            cursor: pointer;
        }

        .project-name {
            text-transform: capitalize;
        }

        img {
            width: 100%;
            height: 40%;
            object-fit: cover;
        };

        .card-body {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
      
            a {
                font-size: .8em;
            }

            button {
                width: 80%;
                transition: scale .1s ease-in;

                &:hover {
                    scale: 1.1;
                }
            }
        }


    }

</style>
