<template>
  <ul>
    <!-- <li v-for="user in users" :key=user.id>
      <h1>Hola</h1>
    </li> -->

    <slot v-for="user in users" :user="user" :key=user.id></slot>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
ul{
  list-style-type: none;
}
</style>