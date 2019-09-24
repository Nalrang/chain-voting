<template>
  <v-app app>
    <v-content>
      <Navigation/>
      <router-view/>
    </v-content>
  </v-app>
  
</template>

<script>
import Navigation from './components/Navigation';
import {Auth} from './plugins/api'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      loggedIn: Auth.loggedIn()
    }
  },
  created() {
    Auth.onChange = loggedIn => {
      console.log('[App.vue] onchage', loggedIn)
      this.loggedIn = loggedIn
    }
  }
};
</script>

<style scoped>
#app 
  .v-toolbar {
    flex: 0 0 auto;
    width: 100%;
  } 
.v-btn--contained {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
.v-application {
  position: absolute;
  width: 640px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
} 

</style>