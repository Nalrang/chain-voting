<template>
  <v-content>
  <v-toolbar elevation="1">
    <v-toolbar-title class="headline text-uppercase">
      <v-menu 
      offset-y
      min-width="300px"
      style="left=0px absolute;"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="#fff"
            v-on="on"
            elevation="0"
          >
          <v-icon dark>dehaze</v-icon>
          </v-btn>
        </template>
        <div class="v-div-nav">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.link"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        </div>
      </v-menu>
    </v-toolbar-title>
    <v-spacer/>
    {{this.$route.name}}
    <v-spacer/>
    <LogOut/>
  </v-toolbar>
  </v-content>
</template>

<script>
import LogOut from '../components/LogOut';

export default {
  name: "navigation",
  components: {
    LogOut,
  },
  data: () => ({
    items: [
      { title: 'Home', link: '/main' },
      { title: 'My Vote', link: '/my-vote'},
      { title: 'Voting Reg', link: '/register'},
      { title: 'Voting Result', link: '/result'},
    ],
  }),
};
</script>

<style>
.v-div-nav {
  left: 0px;
}
</style>