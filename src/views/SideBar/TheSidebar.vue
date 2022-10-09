<template>
  <div class="the-sidebar">
    <router-link to="/">
      <img src="../../assets/icons/bm.jpeg" alt="BM_Photo" class="w-8 md:w-12 h-8 md:h-12  rounded-full"/>
      <span>Home</span>
    </router-link>
    <router-link to="/education" class="sideBarText">
      <i class='fas fa-graduation-cap text-lg md:text-2xl'></i>
      <span class=" font-bold">Education</span></router-link>

    <router-link to="/experience" class="sideBarText">
      <i class="fa fa-line-chart text-lg md:text-2xl" aria-hidden="true"></i>
      <span >Experience</span></router-link>

    <router-link to="/skills" class="sideBarText">
      <i class="fa fa-cog text-lg md:text-2xl"></i>
      <span >Skills</span></router-link>
    <router-link to="/testimonials" class="sideBarText">
      <i class="fa fa-handshake-o text-lg md:text-2xl" aria-hidden="true"></i>
      <span>Testimonials</span></router-link>

      <router-link to="/contact" class="sideBarText">
        <i class="fa fa-phone text-lg md:text-2xl" aria-hidden="true"></i>
      <span > Contact Me</span></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>

.the-sidebar{
 list-style: outside none none;
    padding: 0;
}
.the-sidebar a{
 display: block;
    padding: 7px;
    position: relative;
}

.the-sidebar span {
  font-size: x-large;
  color: #1E293B;
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
.the-sidebar a:hover span{
  width:auto;
  padding:0 15px;
  overflow:visible;
  border-top-right-radius: 24px
 }
.the-sidebar a:hover{text-decoration:none;}
.the-sidebar a span{
background-color: rgb(249 198 17);
color:#1E293B;
}
/* i {
  font-size: xx-large;
  color: rgb(249 198 17);
} */

</style>
