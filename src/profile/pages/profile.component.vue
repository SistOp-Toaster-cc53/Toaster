<script>
import { useAuthenticationStore } from '/src/iam/services/authentication.store.js';
import {ProfilesApiService} from "../services/profiles-api.service.js";
export default {
  name: "profile.component",
  props: ['routeUsername'],
  data() {
    return {
      followers: 12,
      follows: 12,
      iconsBar: [
        'pi-home',
        'pi-search',
        'pi-user',
        'pi-ellipsis-v'
      ],
      // data injected from back-end
      resourceUser: null,
      // services
      profilesApiService: null,
    }
  },
  computed: {
    name() {
      const authenticationStore = useAuthenticationStore();
      return authenticationStore.currentUsername;
    }
  },
  created() {
    this.profilesApiService = new ProfilesApiService();
    this.injectUser();
  },
  methods: {
    injectUser() {
      if (this.routeUsername === undefined) {
        this.profilesApiService.getByUsername()
            .then(response => {
              this.resourceUser = response.data;
              console.log(response.data);
            });
      } else {
        this.profilesApiService.getByUsername(this.routeUsername)
            .then(response => {
              this.resourceUser = response.data;
              console.log(response.data);
            });
      }
    }
  },
}
</script>
<template>
  <div class="flex flex-column" style="width:95%; margin-left:5%;">
    <div class="flex flex-column align-items-center justify-content-center" style="background-color:#1e2e3a;width:100%;height:100vh">
      <div class="border-2 border-white border-round-2xl p-4 flex flex-column align-items-center justify-content-center" style="background-color:white;width: 95%">
        <i class="pi pi-user m-2" style="color:#131920; font-size:8em;"></i>
        <p class="text-black-alpha-90" style="font-size:2em;">{{ resourceUser.username }}</p>
        <hr class="border-black-alpha-90">
        <div class="flex" style="">
          <div class="pi pi-users m-4 text-black-alpha-90" style="font-size: 20px;"> Seguidores {{ followers }}</div>
          <div class="pi pi-users m-4 text-black-alpha-90" style="font-size:20px;"> Seguidos {{ follows }}</div>
        </div>
        <div class="text-justify w-full" style="font-size: 20px;">
          {{ resourceUser.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>