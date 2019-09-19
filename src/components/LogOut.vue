<template>
  <a block color="info" @click="logout">Log out</a>
</template>


<script>
export default {
  name: "logout",
  data () {
    return {
      
    };
  },
  methods: {
    logout () {
      this.$router.push('/login');
    }
  }
};
</script>
