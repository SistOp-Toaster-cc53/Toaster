<script >
export default {
  name: "sidebar-content",
  data() {
    return {
      iconsBar: [
        {icon: 'pi pi-home', route: '/home'},
        {icon: 'pi pi-user', route: '/profile/' + localStorage.getItem('username')},
        {icon: 'pi pi-bell', route: '/notifications'},
        {icon: 'pi pi-cog', route: '/settings'}
      ]
    };
  }
};
</script>

<template>
  <div class="flex flex-column sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
  <div style="width: 5%; height: 100vh; background-color: #131920" class="fixed flex-column align-content-end">
    <router-link v-for="item in iconsBar" :key="item.icon" :to="item.route" class="flex mb-4 justify-content-center text-white no-underline">
      <i :class="'pi ' + item.icon" style="font-size: 2rem"></i>
    </router-link>
  </div>
  </div>
</template>

<style scoped>

</style>