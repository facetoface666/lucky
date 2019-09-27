<template>
  <div id="app">
    <!--<router-link to="/">Home</router-link> |-->
    <!--<router-link to="/about">About</router-link>-->
    <router-view/>
  </div>

</template>

<style lang="scss">
  @import "./assets/css/reset.css";

  html{
    font-size: 26.67vw;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: .12rem;
  color:#333;
}

</style>
