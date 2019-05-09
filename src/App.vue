<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">FormField</router-link> |
      <router-link to="/dpicker">DatePicker</router-link> |
      <router-link to="/smodal">SimpleModal</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
*, *::after, *::before {
  box-sizing: border-box;
  margin: 0;
}
.wrapper {
  width: 350px;
  margin: 0 auto;
}
.card {
  display: flex;
  flex-direction: column;
}
#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background: #F8f8f8;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
