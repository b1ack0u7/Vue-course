<template>
  <h1>Aprendiendo slots</h1>
  <button @click="openModal">Abrir modal</button>

  <modal v-if="isOpen" @on:close="closeModal" title="Hola mundo">
    <!-- <h2>Titulo</h2>
    <p>Sit cupidatat ea eiusmod dolor consequat consectetur.</p>
    <button>Button</button> -->

    <template v-slot:header>
      <h2>Titulo del modal</h2>
    </template>

    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>

    <template v-slot:body>
      <p>Sit cupidatat ea eiusmod dolor consequat consectetur.</p>
    </template>

    <template v-slot:exposed="slotProps">
      <h2>{{ slotProps }}</h2>
    </template>
  </modal>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';

export default {
  components: {
    Modal: defineAsyncComponent(() => import('../components/Modal.vue')),
  },
  setup() {
    const isOpen = ref(false)

    return {
      isOpen,
      openModal: () => isOpen.value = true,
      closeModal: () => isOpen.value = false
    }
  }
}
</script>

<style scoped>

</style>