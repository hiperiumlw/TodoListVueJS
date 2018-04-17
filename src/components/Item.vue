<template>
    <li class="list-group-item d-flex flex-row align-items-center" :class="{completada: todo.done}" v-bind:style="{backgroundColor:todo.color}">
      <b-form-checkbox  v-model="todo.done" v-on:change="cambiarEstado"/>
      <h3>{{todo.titulo}}</h3>
      <div class="form__input">
        <swatches v-model="colors" popover-to="left" @close="changeTodoColor"></swatches>
      </div>
      <div class="ml-auto">
        <button @click="removeTodo" id="" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <!--<pre>-->
        <!--{{todo}}-->
      <!--</pre>-->
      <!--{{colors}}-->
      <!--{{colors}}-->
    </li>

</template>

<script>
    export default {
        name: "Item",
        data: function (){
          return {
            estado: this.todo.done,
            colors:this.todo.color,
          }
        },
        props: ['todo'],
        methods:{
          cambiarEstado(){
              this.$store.dispatch('markAsCompleted',{
                estado:!this.estado,
                id:this.todo.id
              }).then(this.notificarCambiarEstado);
          },
          notificarCambiarEstado(){
            this.$snotify.info("La tarea se ha actualizado correctamente!","Información!");
          },
          changeTodoColor(){
              this.$store.dispatch('changeTodoColor',{
                color:this.colors,
                id:this.todo.id
              });
          },
          removeTodo(){
            this.$store.dispatch('removeTodo',{
              id:this.todo.id
            })
          }
        }
    }
</script>

<style scoped>
  .completada{
    text-decoration: line-through;
  }
  h3{
    margin: 0;
  }
  .form__input{
    position: absolute;
    right: -5em;
  }
</style>
