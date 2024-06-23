<script>
export default{
  name:"profile.component",
  data(){
    return{
      name:'Usuario Name',
      followers:12,
      follows:12,
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
  <div class="flex flex-column" style="width:100%">
  <div style="width: 05%; height: 100vh; background-color:#131920" class="flex flex-column fixed justify-content-end">
    <router-link v-for="icon in iconsBar" :key="icon" to="/home" class="flex mb-4 justify-content-center text-white no-underline">
      <i :class="'pi ' + icon" style="font-size: 2rem"></i>
    </router-link>
  </div>
  <div class="flex flex-column align-items-center justify-content-center" style="background-color:#1e2e3a;width:95%;height:100vh">
  <div class="border-2 border-white border-round-2xl p-4 flex flex-column align-items-center justify-content-center" style="background-color:white;width: 95%">
    <i class="pi pi-user m-2" style="color:#131920; font-size:8em;"></i>
    <p class="text-black-alpha-90" style="font-size:2em;">{{name}}</p>
    <hr class="border-black-alpha-90">
    <div class="flex" style="">
    <div class="pi pi-users m-4 text-black-alpha-90" style="font-size: 20px;"> Seguidores {{followers}}</div>
    <div class="pi pi-users m-4 text-black-alpha-90" style="font-size:20px;"> Seguidos {{follows}}</div>
    </div>
    <div class="text-justify w-full" style="font-size: 20px;">
      DescripcionDescripcionDescripcionDescrip cionDescripcionDescripcion asdkjaslkdj dsalkjdklsaj ksajdlkasjd alksj alkskdjkasjadsjkl
    </div>
  </div>
  </div>
  </div>
</template>

<style>
</style>