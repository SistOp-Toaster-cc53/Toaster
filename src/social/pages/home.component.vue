<script>
export default {
  name: "home.component",
  data() {
    return {
      icons: [
        'pi-search',
        'pi-search',
        'pi-search',
        'pi-search',
        'pi-search',
        'pi-search',
        'pi-search',
        'pi-search'
      ],
      posts: [
        1,
        1,
        1,
        1,
        1,
      ],
      iconsBar:[
          'pi-home',
          'pi-search',
          'pi-user',
          'pi-ellipsis-v'
      ],
    }
  }
}
</script>

<template>
    <div>
      <div class="flex flex-col" style="background-color:#131920;">
        <div class="">
          <img style="width: 55px; height:50px;" class="ml-8 mt-2 mr-8" src="/src/assets/images/Toasts_ICON.png" alt="">
        </div>
        <div style="width: 100%; height: auto; background-color: #131920" class="p-3 row text-white">
          <router-link v-for="icon in icons" to="/home" class="mx-6 text-white">
            <i class="pi pi-search" style="font-size: 2rem"></i>
          </router-link>
        </div>
      </div>
      <div class="flex">
        <div style="width: 20%; height: auto; background-color: #131920" class="flex-column" >
            <router-link v-for="icon in iconsBar" :key="icon" to="/home" class="flex mb-4 justify-content-center text-white">
              <i :class="'pi ' + icon" style="font-size: 2rem">HOME</i>
            </router-link>
        </div>

        <div class="flex flex-column items-center justify-center h-screen" style="width: 80%">
          <div class="shadow-md rounded-lg p-4" style="background-color:#FFFFFF;">
            <div>
              <div>
                <h2 class="text-xl font-bold mb-2">For you</h2>
              </div>
              <input type="text" placeholder="What's happening?!" class="w-full p-2 border mb-5 rounded-xl"/>
              <div class="flex items-center justify-between">
                <div class="flex">
                  <i class="pi pi-image mr-3"></i>
                  <i class="pi pi-video mr-3"></i>
                  <i class="pi pi-calendar mr-3"></i>
                </div>
              <button class="text-white  py-2 px-4 rounded" style="background-color:#131920">
                Post
              </button>
            </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div class="row">
              <div v-for="post in posts" class="col-8 inline-block  border border-gray-300 rounded-lg  mb-4 bg-white" style="width:800px;">
                <pv-card class="">
                  <template #title>
                    Name HOASLKSDSKLJDSKJLDKSJ
                  </template>
                </pv-card>
              </div>
            </div>
          </div>
        </div>

    </div>
    </div>
</template>

<style>

</style>