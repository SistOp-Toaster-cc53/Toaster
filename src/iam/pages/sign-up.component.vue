<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {SignInRequest} from "../model/sign-in.request.js";
import {SignUpRequest} from "../model/sign-up.request.js";

export default {
  name: "sign-up",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSignUp() {
      let authenticationStore = useAuthenticationStore();
      let signUpRequest = new SignUpRequest(this.username, this.password);
      authenticationStore.signUp(signUpRequest, this.$router);
    },
  }
}
</script>

<template>
  <div class="">
    <div class="row flex h-screen">
      <div style="background-color: #131920" class="text-white col-6 align-content-center justify-content-center text-center">
        <img style="width: 100%; height: auto; object-fit: cover;" src="../../assets/images/toaster.png" alt="Toaster">
      </div>
      <div style="background-color: #131920" class="text-white col-6 align-content-center justify-content-center p-4">
        <h1 style="font-size: 4rem" class="p-component">Embrace the future</h1>
        <h2 style="font-size: 2rem" class="p-component">Join the next generation</h2>
        <label for="username" class="mt-2 p-component block mb-2">Username:</label>
        <pv-input-text style="width: 300px" id="username" placeholder="Username" type="text" v-model="username"/>
        <br>
        <label for="password" class="p-component block mt-2 mb-2">Password:</label>
        <pv-input-text style="width: 300px" id="password" placeholder="Password" type="password"  v-model="password"/>
        <br>
        <pv-button @click="onSignUp" class="mt-2" style="width: 300px" label="Log-in"></pv-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>