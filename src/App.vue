<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {};
  },

  methods: {},
  created() {},
};
</script>

<style lang="css">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
