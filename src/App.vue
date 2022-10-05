<template>
  <section>
    <the-side-bar></the-side-bar>
    <div>
      <router-view></router-view>
      <the-main></the-main>
      <!-- <the-footer></the-footer> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheSideBar from '@/views/SideBar/TheSidebar.vue';
import TheMain from '@/components/Main/TheMain.vue';
// import TheFooter from "@/views/Footer/TheFooter.vue";

export default defineComponent({
  components: { /* TheFooter */ TheSideBar, TheMain },
});
</script>
<style>
body {
  background-color: #1E293B;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(249 198 17);
}
section {
  display: flex;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
