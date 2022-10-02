<template>
  <section>
    <the-header></the-header>
    <div>
      <router-view></router-view>
      <the-main></the-main>
      <!-- <the-footer></the-footer> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/views/Header/TheHeader.vue";
import TheMain from "@/components/Main/TheMain.vue";
// import TheFooter from "@/views/Footer/TheFooter.vue";

export default defineComponent({
  components: { /*TheFooter*/ TheHeader, TheMain },
});
</script>
<style>
body {
  background-color: #93abef;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
