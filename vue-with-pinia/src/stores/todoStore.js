import { defineStore } from 'pinia'


export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [
      { name: 'Belajar HTML', isDone: false },
      { name: 'Belajar PHP', isDone: false },
      { name: 'Belajar CSS', isDone: false },
      { name: 'Belajar VUE', isDone: false },
      { name: 'Belajar JavaScript', isDone: false },
    ]
  }),
  getters: {
    showAll(state) {
      return state.todoList
    },
    doneOnly(state) {
      return state.todoList.filter(item => item.isDone)
    },
    undoneOnly(state) {
      return state.todoList.filter(item => !item.isDone)
    },
  },
  actions: {
    setAsDone(name) {
      this.todoList.find(item => item.name == name).isDone = true
    },
    setAsUndone(name) {
      this.todoList.find(item => item.name == name).isDone = false
    },
    addTodo(data) {

      let exists = this.todoList.filter(item => item.name == data).length

      if (exists) {
        alert('Todo already exists')
      }

      // this.todoList.push(
      //   { name: data, isDone: false }
      // )
    },
  },
})