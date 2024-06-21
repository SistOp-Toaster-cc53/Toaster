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
        'pi-search',
      ],
      posts: [
        1,
        1,
        1,
        1,
        1,
        1,
      ]
    }
  }
}
</script>

<template>
<div>
  <div style="width: 100%; height: auto; background-color: #131920" class="p-3 row text-white">
    <router-link v-for="icon in icons" to="/home" class="mx-6 text-white">
      <i class="pi pi-search" style="font-size: 2rem"></i>
    </router-link>
  </div>
  <div class="flex">
    <div class="row">
      <div v-for="post in posts" class="col-8 inline">
        <pv-card class="">
          <template #title>
            Me excedi
          </template>
        </pv-card>
      </div>
      <div class="col-4">
        <h1>me excedi</h1>
      </div>
    </div>
  </div>
</div>
</template>

<style>

</style>