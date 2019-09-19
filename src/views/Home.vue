<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <span> {{test}} </span>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      test: []
    }
  },
  created () {
    console.log("axios before")
    this.$http.get('/api/users')
    .then((res) => {
      this.test = res.data;
      console.log("axios get", res.data)
    })
  }
};
</script>
