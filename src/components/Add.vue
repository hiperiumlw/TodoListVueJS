<template>
  <section id="añadir">
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-4 offset-4">
            <h2 style="text-align: center">Lista de Tareas</h2>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container-fluid">
        <div class="row d-flex flex-column">
          <div class="col-6 offset-3">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button type="button" class="btn btn-outline-danger botonBorrar" v-on:click="deleteAllCompleted">Borrar</button>
                <button @click="createTodo()"  class="btn btn-outline-secondary botonAñadir" type="button">Añadir tarea</button>
              </div>
              <input v-model="titulo" v-on:keyup.enter="createTodo()" type="text" id="tarea" class="form-control" placeholder="Escribe tu tarea..." aria-label="" aria-describedby="basic-addon1">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Add",
        data:function () {
          return{
            titulo:''
          }
        },
        methods:{
          createTodo(){
            if(this.titulo=='') this.errorCampoVacio();
            else
            this.$store.dispatch('createTodo',this.titulo);
          },
          removeAll(){
            this.$store.dispatch('removeAll');
            console.log("entro")
          },
          deleteAllCompleted(){
            this.$store.dispatch('deleteAllCompleted')
          },
          errorCampoVacio() {
            this.$snotify.error("El campo de añadir tarea esta vacío!","Importante!");
          }
        },
    }
</script>

<style scoped>
  .form-control,.botonAñadir,.botonBorrar{
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

</style>
