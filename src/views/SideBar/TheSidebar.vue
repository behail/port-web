<template>
  <div class=" z-20">
    <button id="humbrder-btn" v-show="!showSideBar" @click="openSidebar()"
    class=" humbrder-icon text-3xl m-2 top-0 ">&#9776;</button>
    <button @click="closeSideBar()" v-show="showSideBar"
    class=" text-2xl mx-4 mt-1 top-2 font-bold">X</button>
    <div class="the-sidebar hidden md:block" id="side-bar">
      <router-link to="/" @click="showSideBar?closeSideBar():null">
        <em class="fa fa-home text-2xl md:text-3xl"></em>
        <span class=" font-bold text-xs md:text-sm">Home</span>
      </router-link>
      <router-link to="/education" class="sideBarText" @click="showSideBar?closeSideBar():null">
        <i class="fa fa-graduation-cap text-xl md:text-2xl" aria-hidden="true"></i>
        <span class="font-bold text-xs md:text-sm">Education</span></router-link>

      <router-link to="/experience" class="sideBarText" @click="showSideBar?closeSideBar():null">
        <i class="fa fa-line-chart text-xl md:text-2xl" aria-hidden="true"></i>
        <span class=" font-bold text-xs md:text-sm" >Experience</span></router-link>
      <router-link to="/testimonials" class="sideBarText" @click="showSideBar?closeSideBar():null">
        <i class="fa fa-user text-2xl md:text-3xl" aria-hidden="true"></i>
        <span class=" font-bold text-xs md:text-sm">Testimonials</span></router-link>

        <router-link to="/contact" class="sideBarText" @click="showSideBar?closeSideBar():null">
          <i class="fa fa-phone text-2xl md:text-3xl" aria-hidden="true"></i>
        <span class=" font-bold text-xs md:text-sm"> Contact Me</span></router-link>
    </div>

  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const showSideBar = ref<boolean>(false);
    function openSidebar() {
      const sideBar = document.getElementById('side-bar')!;
      sideBar.style.display = 'block';
      showSideBar.value = true;
    }
    function closeSideBar() {
      const sideBar = document.getElementById('side-bar')!;
      sideBar.style.display = 'none';
      showSideBar.value = false;
    }
    return {
      openSidebar, showSideBar, closeSideBar,
    };
  },
});
</script>

<style scoped>
.active-route {
  background: white;
}
.the-sidebar{
    padding-top: 17%;
    padding-left: 1%;
    position: fixed;
    z-index: 11;
    display: block;
}
.the-sidebar a{
    display: block;
    padding: 7px;
    position: relative;
}

.the-sidebar span {
    z-index: 1;
    color: #ffff;
    font-weight: 400;
    text-transform: uppercase;
    bottom: 0;
    left: 47px;
    line-height: 38px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 0;
    box-shadow: 0px 0px 7px #1E293B;

-webkit-transition: 0.50s;
-moz-transition: 0.50s;
transition: 0.50s;
}

.humbrder-icon{
  display: none;
}
.the-sidebar a:hover span{
  width:auto;
  padding:0 15px;
  overflow:visible;
  border-top-right-radius: 24px
 }
.the-sidebar a:hover{text-decoration:none;}
.the-sidebar a span{
background-color: rgb(249 198 17);
color:#fff;
font-weight: bold;
}

@media screen and (max-width: 700px) {
  .the-sidebar {
    width: auto;
    height: 100%;
    position: fixed;
    display: none;
    flex-direction: column;
    padding: 0;
    padding-left: 1%;
    margin: 0;
  }
  .the-sidebar a:hover span{
  width:auto;
  padding:0 15px;
  overflow:visible;
  border-top-right-radius: 12px;
 }

  .humbrder-icon{
  display: block;
}
}

/* @media screen and (max-width: 400px) {

  .the-sidebar a {
    text-align: center;
    float: none;
  }
  .humbrder-icon{
  display: block;
}
} */
</style>
