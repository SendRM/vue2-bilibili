<template>
  <div id="app">
    <home />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Home from "./views/Home";
import MainContent from "./views/MainContent";
export default {
  created() {
    this.$router.push(this.$route.path);
  },
  components: {
    Home,
    MainContent,
  },
};
</script>

<style lang="less">
@import "./assets/css/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
