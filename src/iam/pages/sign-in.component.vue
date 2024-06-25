<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {SignInRequest} from "../model/sign-in.request.js";

export default {
  name: "sign-in",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSignIn() {
      let authenticationStore = useAuthenticationStore();
      let signInRequest = new SignInRequest(this.username, this.password);
      authenticationStore.signIn(signInRequest, this.$router);
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
      <pv-button class="mt-4" style="width: 300px; background-color: #464646" label="Join with Google"></pv-button>
      <p class="p-component mt-2 mb-2">or</p>
      <label for="username" class="p-component block mb-2">Username:</label>
      <pv-input-text style="width: 300px" id="username" placeholder="Username" type="text" v-model="username"/>
      <br>
      <label for="password" class="p-component block mt-2 mb-2">Password:</label>
      <pv-input-text style="width: 300px" id="password" placeholder="Password" type="password"  v-model="password"/>
      <br>
      <pv-button @click="onSignIn" class="mt-2" style="width: 300px" label="Log-in"></pv-button>
      <p class="p-component mt-2 mb-2">or</p>
      <router-link to="/sign-up">
        <pv-button style="width: 300px" label="Sign-up today"></pv-button>
      </router-link>
    </div>
  </div>
</div>
</template>

<style>

</style>