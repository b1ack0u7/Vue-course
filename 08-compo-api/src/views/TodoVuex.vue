<template>
  <h1>Thanos todo list</h1>
  <h4>Tareas: {{ pending.length }}</h4>
  <hr>
  <button @click="currentTab = 'all'" :class="{ 'active': currentTab === 'all' }">Todos</button>
  <button @click="currentTab = 'pending'" :class="{ 'active': currentTab === 'pending' }">Pendientes</button>
  <button @click="currentTab = 'completed'" :class="{ 'active': currentTab === 'completed' }">Completados</button>

  <div>
    <ul>
      <li 
        v-for="todo in getTodosByTab"
        :class="{ 'completed': todo.completed }"
        :key="todo.id"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
  <!-- <h4>Todos: {{ all.length }}</h4>
  <h4>Completados: {{ completed.length }}</h4> -->

  <button @click="toggleModal">Crear Todo</button>

  <!-- Modal -->
  <modal v-if="modalIsOpen" @on:close="toggleModal"> 
    <template v-slot:header>
      <h1>Nueva tarea</h1>
    </template>

    <template v-slot:body>
      <form @submit.prevent="createTodo(newTodoText)">
        <input v-model="newTodoText" type="text" placeholder="Nueva tarea">
        <br> <br>
        <button type="submit">Crear</button>
      </form>
    </template>
  </modal>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'
import useTodos from '../composables/useTodos'

export default {
  components: {
    Modal: defineAsyncComponent(() => import('../components/ModalTodo.vue')),
  },
  setup() {
    const modalIsOpen = ref(false)
    const newTodoText = ref('')

    const { 
      currentTab, 
      getTodosByTab,
      pending,
      toggleTodo, createTodo,
    } = useTodos()

    return {
      currentTab, modalIsOpen, newTodoText,
      getTodosByTab,
      pending,
      toggleTodo, createTodo,
      toggleModal: () => modalIsOpen.value = !modalIsOpen.value
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
  user-select: none;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>