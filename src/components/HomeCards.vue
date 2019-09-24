<template>
  <v-container
    class="pa-4"
    fluid
  >
    <v-row style="display: block;">
          <v-col>
            <v-card
              color="#385F73"
              dark
            >
              <v-card-text class="white--text">
                <div class="headline mb-2">Block Node Status</div>
                <div><span> Latest Block : </span></div>
                <div><span> Pending Tx : </span></div>
              </v-card-text>
  
              <v-card-actions>
                <v-btn text href="https://etherscan.io">Go Block Explorer</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
    </v-row>
    <v-row style="display: contents;">
          <v-col
            v-for="(item, i) in items"
            :key="i"
          >
            <v-card>
              <v-list-item three-line>
                <v-list-item-content class="align-self-start">
                  <v-list-item-title
                    class="headline mb-2"
                    v-text="item.title"
                  ></v-list-item-title>
  
                  <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>
                </v-list-item-content>
  
                <v-list-item-avatar
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-list-item-avatar>
              </v-list-item>
              <v-card-actions>
                  <v-btn 
                    color="indigo lighten-1"
                    dark
                    >Vote</v-btn>
                  <v-btn 
                    color="blue-grey lighten-2"
                    dark
                    >Result</v-btn>
                </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
  </v-container>
</template>


<script>
export default {
  name: "home-cards",
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'test 1',
        artist: 'sub test 1',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'test 2',
        artist: 'sub test 2',
      },
    ]
  }),
  methods: {
  }
};
</script>
