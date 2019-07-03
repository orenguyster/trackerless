<template>
  <v-app>
    <Drawer />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import Drawer from "./components/core/Drawer";
export default {
  components: {
    //ToolBar,
    Drawer
  }
};
</script>

