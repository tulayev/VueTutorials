<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ title }}</h1>
  <p>{{ text }}</p>
  <div>
    <input type="text" ref="name">
    <button @click="toggle">Click me!</button>
  </div>

  <div v-if="isBoxVisible">
    <Box :header="header" theme="lol" @close="toggle" />
  </div>
</template>

<script>

import Box from './components/Box.vue';

export default {
  components: { Box },
  data() {
    return {
      title: 'Hello World',
      text: 'This is a sample text :)',
      header: 'This is a header',
      isBoxVisible: true,
    }
  },
  methods: {
    handleClick() {
      const input = this.$refs.name;
      input.classList.add('active')
    }, 
    toggle() {
      this.isBoxVisible = !this.isBoxVisible;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {

  border: 1px solid red;

}
</style>
