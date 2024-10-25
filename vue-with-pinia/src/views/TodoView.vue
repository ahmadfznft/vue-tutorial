<template>
  <div class="todo-container">
    <h1>Halaman Todo List</h1>

    <form @submit.prevent="todoStore.addTodo(newTodo)" class="todo-form">
      <input v-model="newTodo" type="text" placeholder="Add New Todo" />
      <input type="submit" value="Add" class="add-button" />
    </form>

    <div class="todo-list-container">
      <h3>My Todo List</h3>

      <div class="getters-button">
        <button :class="{ active: show === 'all' }" @click="show = 'all'">
          Show All
        </button>
        <button
          :class="{ active: show === 'done only' }"
          @click="show = 'done only'"
        >
          Done
        </button>
        <button
          :class="{ active: show === 'undone only' }"
          @click="show = 'undone only'"
        >
          Undone
        </button>
      </div>

      <!-- Show All Todo List -->
      <div v-if="show == 'all'">
        <ul class="todo-list">
          <li
            v-for="list in todoStore.todoList"
            :key="list.name"
            class="todo-item"
            :class="{ done: list.isDone }"
          >
            <span>{{ list.name }}</span>
            <button v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">
              Set as Done
            </button>
            <button v-else @click="todoStore.setAsUndone(list.name)">
              Set as Undone
            </button>
          </li>
        </ul>
      </div>

      <!-- Show Done Only Todo List -->
      <div v-if="show == 'done only'">
        <ul class="todo-list">
          <li
            v-for="list in todoStore.doneOnly"
            :key="list.name"
            class="todo-item done"
          >
            <span>{{ list.name }}</span>
            <button @click="todoStore.setAsUndone(list.name)">
              Set as Undone
            </button>
          </li>
        </ul>
      </div>

      <!-- Show UnDone Only Todo List -->
      <div v-if="show == 'undone only'">
        <ul class="todo-list">
          <li
            v-for="list in todoStore.undoneOnly"
            :key="list.name"
            class="todo-item"
          >
            <span>{{ list.name }}</span>
            <button @click="todoStore.setAsDone(list.name)">Set as Done</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.todo-form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.todo-form input[type="text"] {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.add-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #218838;
}

.todo-list-container {
  margin-top: 20px;
}

.getters-button {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.getters-button button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.getters-button button.active {
  background-color: #0056b3;
}

.getters-button button:hover {
  background-color: #0056b3;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: background-color 0.3s ease;
}

.todo-item.done {
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.todo-item button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.todo-item button:hover {
  background-color: #218838;
}
</style>

<script>
import { useTodoStore } from "../stores/todoStore.js";

export default {
  setup() {
    const todoStore = useTodoStore();
    return {
      todoStore,
    };
  },

  data() {
    return {
      newTodo: "",
      show: "all",
    };
  },
};
</script>
