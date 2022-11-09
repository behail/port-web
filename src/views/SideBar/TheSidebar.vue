<template>
  <div class="z-20 side-menu" :class="{ humberger: !showSideBar }">
    <nav class="menu mobileView">
      <input
        type="checkbox"
        href="#"
        class="menu-open"
        name="menu-open"
        id="menu-open"
        @click="toggleSidebar()"
      />
      <label class="menu-open-button" for="menu-open">
        <span class="hamburger hamburger-1"></span>
        <span class="hamburger hamburger-2"></span>
        <span class="hamburger hamburger-3"></span>
      </label>
    </nav>
    <div class="the-sidebar hidden md:block" id="side-bar">
      <router-link to="/" @click="toggleSidebar()">
        <em class="fa fa-home text-2xl md:text-3xl"></em>
        <span class="font-bold text-xs md:text-sm">Home</span>
      </router-link>
      <router-link to="/education" class="sideBarText" @click="toggleSidebar()">
        <i
          class="fa fa-graduation-cap text-xl md:text-2xl"
          aria-hidden="true"
        ></i>
        <span class="font-bold text-xs md:text-sm">Education</span></router-link
      >
      <router-link
        to="/experience"
        class="sideBarText"
        @click="toggleSidebar()"
      >
        <i class="fa fa-line-chart text-xl md:text-2xl" aria-hidden="true"></i>
        <span class="font-bold text-xs md:text-sm"
          >Experience</span
        ></router-link
      >
      <router-link
        to="/testimonials"
        class="sideBarText"
        @click="toggleSidebar()"
      >
        <i class="fa fa-user text-2xl md:text-3xl" aria-hidden="true"></i>
        <span class="font-bold text-xs md:text-sm"
          >Testimonials</span
        ></router-link
      >
      <router-link to="/contact" class="sideBarText" @click="toggleSidebar()">
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
    function toggleSidebar() {
      showSideBar.value = !showSideBar.value;
      console.log(showSideBar.value);
    }

    return {
      showSideBar,
      toggleSidebar,
    };
  },
});
</script>

<style scoped lang="scss">
/* Humberger start */
@mixin flexCenter($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
.active-route {
  border-radius: 4px;
  box-shadow: 1px 1px 5px 1px rgb(5, 237, 5);
}
.side-menu {
  position: fixed;
  margin-top: 10px;

  .menu {
    position: absolute;
    padding: 5vw 0px 0 0px;
    z-index: 12;
    .menu-open {
      display: none;
    }
  }
}
.menu-open {
  &:checked + &-button .hamburger-1 {
    transform: translate3d(0, 0, 0) rotate(45deg);
    width: 6vw;
  }
  &:checked + &-button .hamburger-2 {
    transform: translate3d(0, 0, 0) scale(0.1, 1);
    visibility: hidden;
  }
  &:checked + &-button .hamburger-3 {
    transform: translate3d(0, 0, 0) rotate(-45deg);
    width: 6vw;
  }
}
.hamburger {
  width: 6vw;
  height: 3px;
  background: white;
  display: block;
  position: absolute;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  transition-duration: 600ms;
  &-1 {
    transform: translate3d(0, -8px, 0);
    transition: 0.6s;
  }
  &-2 {
    transform: translate3d(0, 0, 0);
    width: 5vw;
  }
  &-3 {
    transform: translate3d(0, 8px, 0);
    width: 4vw;
    transition: 0.6s;
  }
}

.the-sidebar {
  margin: 0px 0 0 10px;
  z-index: 11;
  display: block;
  a {
    display: block;
    padding: 7px;
    position: relative;
    &:hover span {
      width: auto;
      padding: 0 15px;
      overflow: visible;
      border-top-right-radius: 24px;
    }
    &:hover {
      text-decoration: none;
    }
  }
  span {
    z-index: 1;
    color: #ffff;
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
    background-color: rgb(249 198 17);
    font-weight: bold;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    transition: 0.5s;
  }
  @for $i from 1 through 5 {
    & a:nth-child(#{$i}) {
      animation-name: visibilityOn;
      animation-duration: $i * 0.5s;
      animation-fill-mode: ease;
    }
  }
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

.mobileView {
  visibility: hidden;
}

@media screen and (max-width: 1024px) {
  .side-menu {
    transition: all 1s;
  }
  .humberger {
    background-color: rgb(7, 29, 60);
    width: 100vw;
    height: 40%;
    position: absolute;
    transition: all 1s ease;
  }
  .menu {
    top: 0;
  }
  .mobileView {
    visibility: visible;
  }
  .the-sidebar {
    display: inline-block;
    width: auto;
    margin: 25px 5px 20px 20px;
    z-index: 11;
    transition: 1s;
    & a:hover span {
      width: auto;
      padding: 0 15px;
      overflow: visible;
      border-top-right-radius: 12px;
    }
  }
}
</style>
