<template>
  <div>
    <p>Hello World from Vue.js</p>
    <counter/>
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  components: {Counter},
}
</script>

<style>
  p {
    color: pink;
  }
</style>
