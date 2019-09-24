<template>
  <div class="home">
    <span> server : {{test}} </span>
    <HomeCards/>
  </div>
</template>

<script>
import HomeCards from '../components/HomeCards';

export default {
  components: {
    HomeCards,
  },
  data () {
    return {
      test: []
    }
  },
  created () {
    this.$http.get('/api/users')
    .then((res) => {
      this.test = res.data;
      //console.log("axios get", res.data)
    })
  }
};
</script>
