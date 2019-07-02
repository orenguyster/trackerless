<template>
  <v-app > 
    <Drawer />
    <!-- <ToolBar /> -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
//import ToolBar from "./components/core/ToolBar";
import Drawer from "./components/core/Drawer";

export default {
     
  components: {
    //ToolBar,
    Drawer
  },

};
</script>

