<template>
  <section id="app">
    <Add></Add>
    <List></List>
    <vue-snotify></vue-snotify>

  </section>
</template>

<script>
  import Add from './components/Add';
  import List from './components/List';
export default {
  name: 'App',
  components:{
    Add,
    List,

  }
}
</script>

<style>
#app {
  background-color: #F5F5F5;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
}
</style>
