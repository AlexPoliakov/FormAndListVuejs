<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">+ HOME</router-link>
        <router-link to="/form/add">+ REGISTRATION FORM</router-link>
        <router-link to="/users">+ LIST USER</router-link>
        <router-link to="/form/id">+ SAMPLE</router-link>
      </nav>
    </header>
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Helvetica Neue", sans-serif;
    background-color: #f5f5f5;
  }

  #app {
    max-width: 1240px;
    margin-right: auto;
    margin-left: auto;
  }

  header {
    width: 100%;
    height: 56px;
    background-color: #fff;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, .095);
    z-index: 80;
    padding: 8px 16px;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }

  nav {
    list-style:none;
    padding:0;
    text-align: center;
  }

  nav a {
    display: inline-block;
    padding: 0 20px;
    text-decoration: none;
    color:  #8a8d96;
    font-weight: 400;
    line-height: 40px;
  }

  nav a:hover {
    color: #272727;
  }
</style>

