<template>
  <v-content>
      <v-container py-5>
        <v-layout align-center justify-center py-3>
          <v-flex xs12 sm8>
            <v-card class="px-2 pb-3">
              <v-card-text>
                <v-layout justify-center pt-2>
                  <v-avatar size="40px" color="pink">
                    <v-icon color="white">lock</v-icon>
                  </v-avatar>
                </v-layout>
                <v-layout justify-center py-3>
                  <div class="headline">Sign in</div>
                </v-layout>

                <v-form>
                  <v-text-field
                    name="login"
                    label="Email Address"
                    type="text"
                    required
                    v-model="email"
                    :rules="emailRules"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    name="Password"
                    label="Password"
                    type="password"
                    required
                    v-model="password"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="info" @click="submit">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>


<script>
import {Auth} from '../plugins/api'

export default {
  name: "login",
  data() {
    return {
      isLoging: false,
      email: "test@test.com",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "123",
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    submit() {
      if(this.account!='' && this.password!=''){
        this.toLogin();
      }
    },
    toLogin() {
      Auth.login(this.email, this.password)
      .then(() => this.$router.push(this.$route.query.redirect || '/main'))
      .catch(() => this.err = true)
    }
    
  }
};
</script>
