<template>
<div>
  <hello-world/>
  <v-btn @click="runApp()">Run ES App</v-btn>
</div>

</template>

<script>
import HelloWorld from './components/HelloWorld';
import esRunner from '../../es-tasks/es-runner';

export default {
  name: 'HomeModule',
  components: { HelloWorld },
  methods: {
    runApp() {
      esRunner();
    },
  },
};
</script>

<style scoped>
</style>
