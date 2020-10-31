<template>
  <nav>
    <h1>Header</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style lang="css" scoped></style>
