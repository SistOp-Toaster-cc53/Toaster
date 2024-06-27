<script>
export default {
  name: "header-content",
  data() {
    return {
      icons: ['pi-inbox', 'pi-sign-out']
    }
  },
  methods: {
    handleIconClick(icon) {
      if (icon === 'pi-sign-out') {
        this.$router.push('/sign-in');
      } else {
        this.$router.push('/home');
      }
    }
  }
}
</script>

<template>
  <div class="flex justify-between items-center" style="background-color:#131920; height: 63px; position: fixed; width: 100%;">
    <div class="mt-2 ml-8">
      <img style="width: 55px; height:50px; " src="/src/assets/images/Toasts_ICON.png" alt="">
    </div>
    <div class="flex p-3 row text-white justify-end" style="position: absolute; right: 0;">
      <div v-for="icon in icons" :key="icon" class="mx-6 text-white" @click="handleIconClick(icon)">
        <i :class="'pi ' + icon" style="font-size: 2rem; cursor: pointer;"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>