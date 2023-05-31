<script>

import 'animate.css';
export default{
  name: 'App',

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

    <div id="home-container" class="container">
      <div id="left-side" class="main-home-container container">
        <h1 class="animate__animated animate__fadeInDown animate__delay">Kevin Zucca</h1>
        <p class="typed-out"> &lt; Full Stack Developer /></p>

        <div id="buttons-container">
          <button class="my-button">Who am I</button>
          <button class="my-button">Skills</button>
        </div>
      </div>
      <div id="right-side" class="main-home-container">rightside</div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.full-container {
  padding: 20px;
  height: calc(100vh - 100px);

  #home-container {
    display: flex;
    justify-content: center;
    gap: 2em;

    height: 100%;
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

</style>
