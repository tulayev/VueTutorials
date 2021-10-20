<template>

  <section class="uk-section uk-section-primary">
    <div class="uk-contaienr uk-container-large">
      <SignUpForm />
    </div>
  </section>

</template>

<script>
import SignUpForm from './components/SignUpForm.vue';

export default {
  name: 'App',
  components: {
    SignUpForm
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

body {
  background: #eee;
  margin: 0;
}
</style>
