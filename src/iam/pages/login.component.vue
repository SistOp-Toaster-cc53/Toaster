<script>
export default {
  name: "login.component"
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
      <pv-input-text style="width: 300px" id="username" placeholder="Username" type="text"/>
      <br>
      <label for="password" class="p-component block mt-2 mb-2">Password:</label>
      <pv-input-text style="width: 300px" id="password" placeholder="Password" type="password"/>
      <br>
      <router-link to="/home">
        <pv-button class="mt-2" style="width: 300px" label="Log-in"></pv-button>
      </router-link>
      <p class="p-component mt-2 mb-2">or</p>
      <pv-button style="width: 300px" label="Sign-up today"></pv-button>
    </div>
  </div>
</div>
</template>

<style>

</style>