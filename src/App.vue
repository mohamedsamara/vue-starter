<template>
  <div class="application v-application">
    <Sidebar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
@import './styles/core.scss';

body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: $secondary-color;
}

.application {
  display: flex;
  height: 100vh;
}
</style>
