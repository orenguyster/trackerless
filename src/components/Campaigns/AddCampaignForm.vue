<template>
  <v-layout row justify-end>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add Campaign</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Campaign</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Campaign Name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete :items="apps" label="App*" required></v-autocomplete>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete :items="channels" label="Channel"></v-autocomplete>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="URL*"
                  required
                  hint="App URL: https://www.App-URL.com?parm1=XXX..."
                  persistent-hint
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="CPA Price*" hint="In USD" persistent-hint required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field name="status" label="Status" id="id"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      apps: ["App1", "App2", "App3"],
      channels: ["Channel1", "Channel2", "Channel3"]
    };
  }
};
</script>