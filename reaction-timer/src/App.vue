<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @close="endGame" />
  <Result v-if="showResults" :score="score" />
</template>

<script>

import Block from './components/Block.vue';
import Result from './components/Result.vue';

export default {
  name: 'App',
  components: { 
    Block, 
    Result
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      showResults: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTimer) {
      this.isPlaying = false
      this.showResults = true
      this.score = reactionTimer
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
  color: #444;
  margin-top: 60px;
}

button {
  background: #0faf87;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  letter-spacing: 1px;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

</style>
