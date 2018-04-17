import Vue from 'vue'
import Vuex from 'vuex'
import Tarea from '../class/tarea'
Vue.use(Vuex)
export const store = new Vuex.Store({
  strict: true,
  state: {
    todos:[],
    lastId: 0,
  },
  mutations: {
    incrementLastId(state){
      state.lastId++
    },

    createTodo(state,payload) {
     let tarea = new Tarea(state.lastId,"Tarea nº"+state.lastId+": "+payload,false,'#FFF');
      state.todos.push(tarea);
    },

    removeAll(state){
      console.log(state.todos.length)
      state.todos;
    },

    markAsCompleted(state,payload){
      console.log(payload);
      state.todos.forEach((tarea)=>{
        console.log(tarea);
        if(tarea.id==payload.id) {
          tarea.done=payload.estado;
        };
      })
    },

    removeTodo(state,payload){
      state.todos = state.todos.filter((tarea)=>{
        return tarea.id != payload.id;
      })
    },

    changeTodoColor(state,payload){
      state.todos.forEach((tarea)=>{
        if (tarea.id==payload.id){
          tarea.color=payload.color;
        }
      })
    },

    deleteAllCompleted(state,payload){
        state.todos = state.todos.filter((tarea)=> {return tarea.done!=true});
    }
  },
  actions: {
    createTodo(context,payload){
      context.commit('createTodo',payload);
      context.commit('incrementLastId');
    },

    removeTodo(context,payload){
      context.commit('removeTodo',payload);
    },

    removeAll(context,payload){
      context.commit('removeAll');
    },

    markAsCompleted(context,payload){
      context.commit('markAsCompleted',payload)
    },

    changeTodoColor(context,payload){
      context.commit('changeTodoColor',payload);
    },

    deleteAllCompleted(context,payload){
      context.commit('deleteAllCompleted')
    },
  },
  getters: {
    listaTareas: (state)=>
      (checked) => {
        if (!checked) return state.todos;
        return state.todos.filter((tarea)=> tarea.done==checked)
      }

  },

})
