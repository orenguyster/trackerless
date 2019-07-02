<template>
<div>
<v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
       
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Trackerless</v-toolbar-title>
    </v-toolbar>
</div>
</template>
<script>

export default {
       data: () => {
    return {
      drawer: null,
      links: [
          { icon: 'dashboard', text: 'Dashboard', route: '/'},
          { icon: 'apps', text: 'Campaigns', route: '/campaigns'},
          { icon: 'apps', text: 'Apps', route: '/apps'},
          { icon: 'settings', text: 'Settings', route: '/setting'},
      ]
    }
  },
    props: {
      source: String
    },
}
</script>