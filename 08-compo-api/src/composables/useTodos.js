import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
  const store = useStore()
  const currentTab = ref('all')
  
  return {
    currentTab,
    all: computed(() => store.state.todos),
    pending: computed(() => store.getters['pendingTodos']),
    completed: computed(() => store.getters['completedTodos']),
  
    getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
  
    //Methods
    toggleTodo: (id) => store.commit('toggleTodo', id),
    createTodo: (newText) => store.commit('createTodo', newText)
  }
}

export default useTodos