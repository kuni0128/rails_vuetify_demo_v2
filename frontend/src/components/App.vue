<template>
  <v-app>
    <p>Hello World from Vue.js</p>
    <counter/>

    <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>
  </v-app>
</template>

<script>
import Counter from './Counter'

export default {
  components: {Counter},
}
</script>

<style>
  p {
    color: pink;
  }
</style>
