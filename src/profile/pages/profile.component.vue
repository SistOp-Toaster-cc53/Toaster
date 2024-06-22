<script>
export default{
  name:"profile.component",
  data(){
    return{
      name:'Usuario Name',
      followers:12,
      follows:12,
    }
  }
}
</script>

<template>
<div class="flex align-items-center justify-content-center" style="background-color:#131920;height:100vh">
  <div class="border-2 border-white border-round-2xl p-4 flex flex-column align-items-center justify-content-center">
    <i class="pi pi-user m-2" style="color:white; font-size:8em;"></i>
    <p class="text-white" style="background-color:grey;font-size:2em">{{name}}</p>
    <div class="flex" style="background-color:#464646 ">
    <div class="pi pi-users m-4 text-white"> Seguidores {{followers}}</div>
    <div class="pi pi-users m-4 text-white"> Seguidos {{follows}}</div>
    </div>
  </div>
</div>
</template>

<style>
</style>