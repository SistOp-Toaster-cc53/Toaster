<script>

import {defineComponent} from "vue";
import HeaderContent from "./shared/components/header-content.component.vue";
import SidebarContent from "./shared/components/sidebar-content.component.vue";

export default defineComponent({
  components: {SidebarContent, HeaderContent}
})
</script>

<template>
  <sidebar-content v-if="!$route.meta.hideHeaderAndSidebar"/>
  <header-content v-if="!$route.meta.hideHeaderAndSidebar"/>
  <router-view/>
</template>
<style>
</style>
