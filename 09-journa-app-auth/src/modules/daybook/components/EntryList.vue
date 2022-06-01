<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
        v-model="term"
      >
    </div>

    <div class="mt-2 d-flex flex-column">
      <button class="btn btn-primary mx-3">
        <i @click="$router.push({ name: 'entry', params: { id: 'new' } })" class="fa fa-plus-circle" />
        Nueva Entrada
      </button>
    </div>

    <div class="entry-scrollarea">
      <EntryItem v-for="entry in entriesByTerm" :key="entry.id" :entry="entry"></EntryItem>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    EntryItem: defineAsyncComponent(() => import('./EntryItem.vue')),
  },
  computed: {
    ...mapGetters('journal', ['getEntriesByTerm']),

    entriesByTerm() {
      return this.getEntriesByTerm(this.term)
    },
  },
  data() {
    return {
      term: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc( 100vh - 100px );
  overflow: scroll;
}
</style>