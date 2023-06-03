<script>

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default{
  name: 'App',

  data() {
    return {
      skillsOff : true,
      skillsList : ['Html', 'Css', 'Sass', 'Bootstrap', 'Javascript', 'Vue', 'MySQL', 'PHP', 'Laravel'],
    };

  },

  components: {
 
  },
  
  created() {
  },

  methods: {
    showSkills() {
      let skillsButton = document.getElementById('skills-button');
      let skillsToggler = document.getElementById('skills-toggler');

      if(this.skillsOff == true){
        window.location.href = '#skills-container';
        skillsToggler.style.left = '95px';
        skillsToggler.style.backgroundColor = 'white';
        skillsButton.style.backgroundColor = '#8abeb8';
        this.skillsOff = !this.skillsOff;
      } else {
        this.skillsOff = !this.skillsOff;
        skillsToggler.style.left = '5px';
        skillsToggler.style.backgroundColor = 'rgb(212, 212, 212)';
        skillsButton.style.backgroundColor = '#7aa4a0';
      }
    }
  }

  }
</script>

<template>
  <!-- HOME CONTAINERS -->
  <div class="full-container">

    <div id="home-container" class="container h-100">
      <div  id="left-side" class="main-home-container container">
        <h1 class="animate__animated animate__fadeInDown animate__delay">Kevin Zucca</h1>
        <p class="typed-out"> &lt; Full Stack Developer /></p>

        <div id="buttons-container">
          <button class="my-button">Who am I</button>
          <button @click="showSkills()" id="skills-button" class="my-button"><span id="skills-toggler">Skills</span></button>
        </div>
      </div>
      <div id="right-side" class="main-home-container">
        <img class="w-100 h-100" src="#" alt="img">
      </div>
    </div>
  </div>
  <!-- //// -->



  <!-- SKILLS CONTAINERS -->
  <div id="skills-big-container" class="full-container">

    <div id="skills-container" class="container w-100" data-aos="fade-in">
      <!-- UP -->
      <div id="skills-up" class="skills-column">
        <ul>
          <li class="skill-li" v-for="singleSkill in this.skillsList">{{ singleSkill }}</li>
        </ul>
      </div>

      <!-- DOWN -->
      <div id="skills-down" class="skills-column">
        <div class="row w-100 h-100">
          <div class="col-6 h-100">testo</div>
          <div class="col-6 h-100">foto</div>
        </div>
      </div>
    </div>

  </div>
<!-- //// -->

</template>



<style lang="scss" scoped>
.full-container {
  padding: 20px;
  height: calc(100vh - 100px);

  #home-container {
    display: flex;
    justify-content: center;
    gap: 2em;

    margin-top: 40px;

    #left-side {
      display: flex;
      flex-flow: column;
      justify-content: center;

      h1 {
        font-size: 4em;
      }

      p {
        font-size: 2em;
      }

      #buttons-container {
        display: flex;
        gap: 20px;

        #skills-button {
          position: relative;
          background-color: #7aa4a0;

          span {
            border: 1px solid rgba(0, 0, 0, 0.372);
            border-radius: 12px;

            background-color: rgb(212, 212, 212);
            color: rgba(27, 27, 27, 0.632);

            padding: 5px;
            height: 90%;

            position: absolute;
            top: 1.5px;
            left: 5px; 
          }

        }
      }
    }

    #right-side {
      border: 1px solid rgba(0, 0, 0, 0.292);

      img {
        object-fit: cover;
      }
    }

    .main-home-container {      
      width: 50%;
      height: 60%;

      margin: 30px;
      padding: 20px;
    }
  }
}

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    .typed-out{
        margin-left: 5px ;
        overflow: hidden;
        border-right: .15em solid orange;
        white-space: nowrap;
        font-size: 1.6em;
        width: 0;
        animation: typing 3s forwards;
    }


    // SKILLS///
    #skills-big-container {
      background-color: #7aa4a0;

      #skills-container {
        height: 800px;
        padding: 30px;
        
        display: flex;
        flex-flow: column;
        justify-content: center;
        gap: 50px;
  
        #skills-up {
          width: 100%;

          ul {
            display: flex;
            gap: 10px;
            justify-content: center;

            font-size: 1.5em;
            list-style: none;
          }
        }

        #skills-down {
          flex-grow: 1;

          .row {
            border: 1px solid black;
          }
        }
      }
    }

  
</style>
