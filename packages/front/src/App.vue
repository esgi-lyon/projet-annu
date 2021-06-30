<template>
  <div id="app">
    <nav>
      <router-link to="/" class="navbar-brand">Home</router-link>
      <ul>
        <li>
          <router-link to="/list">Liste</router-link>
        </li>
        <li>
          <router-link to="/add">Add</router-link>
        </li>
      </ul>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
