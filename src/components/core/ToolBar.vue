!--<template>
<v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Trackerless</v-toolbar-title>
    </v-toolbar>
</template>
<<script>
export default {
     data: () => {
    return ({
      drawer: null
    });
  },
    props: {
      source: String
    },
}
</script>