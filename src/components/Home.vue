<template>
  <div id="app">
     <!-- NAVBAR  -->
     <navBar/>
       <!-- NAVBAR  -->
    <div
      class="bg-image d-flex justify-content-center align-items-center"
      style="
        background-image: url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp');
       height: 93vh;; 
      "
    >
      <h1 class="text-white">
        Inventory System

        <p class="text">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the e and scrambled it to make a type specimen book
        </p>
        <button class="btn1">
          <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span><router-link to="/items/additems" style="color:white">START HERE </router-link></span>
        </button>
      </h1>
    </div>
  </div>
</template>

<script>
import navBar from './navBar.vue'
export default {
  components:{
    navBar
  }
};
</script>
<style scoped>
   /* width: 100%;
   margin: 0 auto;
   background-color: rgba(255,255,255,0.5);
   position: fixed;
   top: 0; */

/* .bg-image{
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
} */
.text {
  font-size: 20px;
  text-align: center;
}

.container {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  width: 180px;
  height: 60px;
  position: absolute;
}

.btn1 {
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91c9ff;
  outline: none;
  transition: 1s ease-in-out;
}

svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.btn1:hover {
  transition: 1s ease-in-out;
  background: #102133;
}

.btn1:hover svg {
  stroke-dashoffset: -480;
}

.btn1 span {
  color: white;
  font-size: 18px;
  font-weight: 100;
}
</style>



