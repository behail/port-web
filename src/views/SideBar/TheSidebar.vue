<template>
  <div class="z-20 side-menu">
    <button
      id="humbrder-btn"
      v-show="!showSideBar"
      @click="openSidebar()"
      class="humbrder-icon text-3xl m-2 top-0"
    >
      &#9776;
    </button>
    <button
      @click="closeSideBar()"
      v-show="showSideBar"
      class="x-button text-2xl mx-4 mt-1 top-2 font-bold"
    >
      X
    </button>
    <div class="the-sidebar hidden md:block" id="side-bar">
      <router-link to="/" @click="showSideBar ? closeSideBar() : null">
        <em class="fa fa-home text-2xl md:text-3xl"></em>
        <span class="font-bold text-xs md:text-sm">Home</span>
      </router-link>
      <router-link
        to="/education"
        class="sideBarText"
        @click="showSideBar ? closeSideBar() : null"
      >
        <i
          class="fa fa-graduation-cap text-xl md:text-2xl"
          aria-hidden="true"
        ></i>
        <span class="font-bold text-xs md:text-sm">Education</span></router-link
      >

      <router-link
        to="/experience"
        class="sideBarText"
        @click="showSideBar ? closeSideBar() : null"
      >
        <i class="fa fa-line-chart text-xl md:text-2xl" aria-hidden="true"></i>
        <span class="font-bold text-xs md:text-sm"
          >Experience</span
        ></router-link
      >
      <router-link
        to="/testimonials"
        class="sideBarText"
        @click="showSideBar ? closeSideBar() : null"
      >
        <i class="fa fa-user text-2xl md:text-3xl" aria-hidden="true"></i>
        <span class="font-bold text-xs md:text-sm"
          >Testimonials</span
        ></router-link
      >

      <router-link
        to="/contact"
        class="sideBarText"
        @click="showSideBar ? closeSideBar() : null"
      >
        <i class="fa fa-phone text-2xl md:text-3xl" aria-hidden="true"></i>
        <span class="font-bold text-xs md:text-sm">
          Contact Me</span
        ></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const showSideBar = ref<boolean>(false);
    function openSidebar() {
      const sideBar = document.getElementById("side-bar")!;
      sideBar.style.display = "block";
      showSideBar.value = true;
    }
    function closeSideBar() {
      const sideBar = document.getElementById("side-bar")!;
      sideBar.style.display = "none";
      showSideBar.value = false;
    }
    return {
      openSidebar,
      showSideBar,
      closeSideBar,
    };
  },
});
</script>

<style scoped>
.active-route {
  border-radius: 4px;
  box-shadow: 1px 1px 5px 1px rgb(5, 237, 5);
}
.side-menu {
  display: flex;
  align-items: center;
}
.the-sidebar a:first-child {
  animation: visibilityOn 1s ease;
}
.the-sidebar a:nth-child(2) {
  animation: visibilityOn 2s ease;
}
.the-sidebar a:nth-child(3) {
  animation: visibilityOn 3s ease;
}
.the-sidebar a:nth-child(4) {
  animation: visibilityOn 4s ease;
}
.the-sidebar a:nth-child(5) {
  animation: visibilityOn 5s ease;
}
@keyframes visibilityOn {
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0px;
  }
}
.the-sidebar {
  margin: 0px 0 0 10px;
  z-index: 11;
  display: block;
}
.the-sidebar a {
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
  box-shadow: 0px 0px 7px #1e293b;

  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}

.humbrder-icon {
  display: none;
}
.x-button {
  display: none;
}
.the-sidebar a:hover span {
  width: auto;
  padding: 0 15px;
  overflow: visible;
  border-top-right-radius: 24px;
}
.the-sidebar a:hover {
  text-decoration: none;
}
.the-sidebar a span {
  background-color: rgb(249 198 17);
  color: #fff;
  font-weight: bold;
}
.humbrder-icon {
  display: none;
}
@media screen and (max-width: 700px) {
  .humbrder-icon {
    display: block;
  }

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
  .the-sidebar a:hover span {
    width: auto;
    padding: 0 15px;
    overflow: visible;
    border-top-right-radius: 12px;
  }

  .humbrder-icon {
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
