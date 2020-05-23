<template>
  <div id="app">
    <div id="app_left">
      <router-view />
    </div>
    <div id="nav">
      <router-link v-for="r in routeMap" :key="r.path" :to="r.path">{{ r.meta.title }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@/composition.api"
import { routes } from "@/router"
export default defineComponent({
  setup(props) {
    const routeMap = ref(routes)

    return {
      routeMap
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  color: #2c3e50;
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  min-height: 100%;
  display: flex;
}

#app_left {
  flex: 1;
}

#nav {
  padding: 15px;
  border-left: 1px solid #ddd;
  width: 280px;
  background-color: #fcfcfc;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-inline: 5px;
  margin-block: 5px;
  display: block;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
