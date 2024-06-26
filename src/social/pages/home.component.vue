<script>
export default {
  name: "home.component",
  data() {
    return {
      icons: [
        'pi-inbox',
        'pi-sign-out'
      ],
      posts: [
        1,
        1,
        1,
        1,
        1,
      ],
      iconsBar: [
        { icon: 'pi-home', route: '/home' },
        { icon: 'pi-search', route: '/' },
        { icon: 'pi-user', route: '/profile' },
        { icon: 'pi-ellipsis-v', route: '/' }
      ],
    }
  }
}
</script>

<template>
  <div class="flex flex-column sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    <div style="width: 05%; height: 100vh; background-color: #131920" class="fixed flex-column align-content-end">
      <router-link v-for="item in iconsBar" :key="item.icon" :to="item.route" class="flex mb-4 justify-content-center text-white no-underline">
        <i :class="'pi ' + item.icon" style="font-size: 2rem"></i>
      </router-link>
    </div>
    <div class="flex flex-column" style="width:95%;height:auto; margin-left:05%">
        <div class="flex flex-column-2" style="background-color:#131920;">
          <div class="">
            <img style="width: 55px; height:50px;" class="ml-8 mt-2 mr-8" src="/src/assets/images/Toasts_ICON.png" alt="">
          </div>
          <div style="width: 100%; height: auto; background-color: #131920" class="flex p-3 row text-white justify-content-end">
            <router-link v-for="icon in icons" to="/home" class="mx-6 text-white">
              <i :class="'pi ' + icon" style="font-size: 2rem"></i>
            </router-link>
          </div>
        </div>
        <div class="flex flex-column items-center justify-center h-screen" style="width: 95%">
          <div class="shadow-md rounded-lg p-4" style="background-color:#FFFFFF;">
            <div>
              <div>
                <h1 class="text-4xl font-bold mb-2" style="color:#131920">For you</h1>
              </div>
              <input type="text" placeholder="What's happening?!" class="w-full p:-2 border mb-5 rounded-xl" style="height:80px"/>
              <div class="flex justify-content-between align-items-center" style="width:100%;">
                <div class="flex justify-content-center">
                  <i class="pi pi-image mr-3"></i>
                  <i class="pi pi-video mr-3"></i>
                  <i class="pi pi-calendar mr-3"></i>
                </div>
                <div>
                <button class="px-4 py-2 text-white font-semibold border-round-xl" style="background-color:#131920;width:150%;height:45px;">
                  Post
                </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center p-4" style="width:100%">
            <div class="row">
              <div v-for="post in posts" class="col-8 inline-block  border border-gray-300 rounded-lg mb-4 bg-white" style="width:100%;">
                <pv-card class="">
                  <template #title>
                    <div>
                    <div><i class="pi pi-user"/> Name</div>
                      <h5>Title</h5>
                    <p class="font-light" style="font-size:15px;">Odio este curso</p>
                    </div>
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