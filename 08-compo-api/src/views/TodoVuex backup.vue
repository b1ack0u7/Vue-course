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

</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const currentTab = ref('all')

    return {
      currentTab,
      all: computed(() => store.state.todos),
      pending: computed(() => store.getters['pendingTodos']),
      completed: computed(() => store.getters['completedTodos']),

      getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),

      //Methods
      toggleTodo: (id) => store.commit('toggleTodo', id)
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