<template>
  <div class="main grid">
    <div id="nav">
      <router-link :to="{ name: 'Form' }">Моя Форма</router-link> |
      <router-link :to="{ name: 'Table' }">Моя таблица</router-link>
    </div>
    <div class="conteiner grid">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-items: center;
}
.conteiner {
  width: 100vw;
  max-width: 1000px;
  grid-template-columns: 1fr;
}
#nav {
  padding: 30px;

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>
