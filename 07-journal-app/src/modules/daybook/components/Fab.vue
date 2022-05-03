<template>
  <button class="btn btn-primary">
    <i class="fi" :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: 'Fab',
  props: {
    icon: {
      type: String,
      default: 'fi-rr-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  padding-top: 10px;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 30px;
  border-radius: 100%;
}
</style>