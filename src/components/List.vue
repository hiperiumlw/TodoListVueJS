<template>
  <section>
    <!--{{this.$store.state.todos}}-->
    <div class="row">
      <div class="col-4 offset-3 d-flex flex-row align-items-center">
        <label class="switch">
          <input type="checkbox" v-model="checked" :disabled="this.$store.state.todos.length<=0">
          <span class="slider round"></span>
        </label>
        <label class="textSwitch" v-if="this.$store.state.todos.length<=0">No hay ninguna tarea añadida!</label>
        <label class="textSwitch" v-else-if="!checked">Listado de todas las tareas.</label>
        <label class="textSwitch" v-else>Listado de las tareas completadas.</label>
      </div>
    </div>
    <div class="col-6 offset-3">
      <ul class="list-group">
        <Item v-for="(todo,i) in listaTareas" :todo="todo" :key="i"></Item>
      </ul>
    </div>
  </section>
</template>

<script>
  import Item from './Item';

  export default {
    data: function () {
      return {
        checked: false,
      }
    },
    name: "List",
    components: {
      Item,
    },
    computed: {
      listaTareas: function () {
        return this.$store.getters.listaTareas(this.checked)
      }
    }
  }
</script>

<style scoped>
  .list-group {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
  .textSwitch{
    margin-left: 1em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #42b983;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
