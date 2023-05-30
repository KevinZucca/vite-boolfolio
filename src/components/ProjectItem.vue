<script>
export default {
  name: 'ProjectItem',
  data() {
    return {

    }
  },

  props: {
    project: Object,
  },

  computed: {
    checkLength() {
      if(this.project.description.length > 50) {
        return this.project.description.substring(0, 50) + '...';
      } else {
        return this.project.description;
      }
    },

    setUrl() {
      if(this.project.img) {
        return 'http://127.0.0.1:8000/storage/' + this.project.img;
      } else {
        return 'https://www.schiffner.com/wp-content/themes/schiff-responsive/images/noimage.jpg';
      }
    },

    setProjectDate() {
      return this.project.created_at.substring(0, 10);
    },

    checkUrlLength() {
      if(this.project.github_link.length > 30) {
        return this.project.github_link.substring(0, 30) + '...';
      } else {
        return this.project.github_link;
      }
    }

  }
}
</script>

<template>
     <div class="card" style="width: 18rem;">
          <img :src="setUrl" class="card-img-top" alt="cover-img">
          <div class="card-body">
              <small class="creation-date">Data creazione: <strong>{{ this.setProjectDate }} </strong> </small>
              <h5 class="card-title project-name">{{ project.name }}</h5>
              <p class="card-text">{{ this.checkLength }}</p>
              <small class="card-text">Tipologia: <strong>{{ project.type ? project.type.name : 'Nessuna Tipologia'}}</strong> </small>
              <small class="card-text">Tecnologie: <strong class="technologies" v-for="technology in project.technologies">{{ project.technologies ? technology.name : 'Nessuna Tecnologia'}}</strong> </small>
              <button class="btn btn-primary">
                  Vai ai dettagli
              </button>
              <a href="#" class="card-link">{{ this.checkUrlLength }}</a>
          </div> 
      </div>
</template>

<style lang="scss" scoped>
  .card {
        display: flex;
        flex-flow: column;

        text-align: center;
        transition: scale .2s ease-in;
        margin-bottom: 30px;

        &:hover {
            scale: 1.1;
            cursor: pointer;
        }

        .project-name {
            text-transform: capitalize;
        }

        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        };

        .card-body {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;

            height: 270px;
      
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

            .creation-date {
              margin-bottom: 1em;
            }

            .technologies {
              margin-right: .5em;
            }
        }
    }



</style>