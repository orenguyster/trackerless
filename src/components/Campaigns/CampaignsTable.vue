<template>
    <div class="CampaignsTable">
    <v-container >
       <v-layout row wrap>
           <h1 class="heading grey--text"> the campaigns page </h1>
          <AddCampaignForm />
       </v-layout> 
        <v-card  v-for="campaign in campaigns" :key="campaign.title" class="ma-3">
            <v-layout row wrap class="pa-3">
             <v-flex xs6 sm4 md2 >
             <div class="caption grey--text"> ID</div>
             <div>32165465479874</div>
            </v-flex>
            <v-flex xs6 md4>
                <div class="caption grey--text"> Campaign Name</div>
                <div>{{ campaign.title }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
                 <div class="caption grey--text"> Person</div>
                  <div>{{ campaign.persion }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
                 <div class="caption grey--text"> Due date</div>
                  <div>{{ campaign.date }}</div>
            </v-flex>
            <v-flex xs6 sm4 md1>
                 <div class="caption grey--text"> Status</div>
                  <div>{{ campaign.status }}</div>
            </v-flex>
                <v-flex xs6 sm4 md1>
                    <v-btn  color="primary" fab small dark>
              <v-icon>edit</v-icon>
            </v-btn>
            </v-flex>
            </v-layout>
        </v-card>
       
    </v-container>
    </div>
</template>
<script>
import AddCampaignForm from './AddCampaignForm'
export default {
      components: {
    AddCampaignForm
  },
    data(){
        return{
            campaigns:[
                {
		"title": "Eu Ltd",
		"persion": "Clarke",
		"date": "Jun 30, 2018",
		"status": " Close "
	},
	{
		"title": "Magna Nec Inc.",
		"persion": "Drake",
		"date": "Mar 10, 2019",
		"status": "Ongoing"
	},
	{
		"title": "Integer Urna Vivamus Industries",
		"persion": "Hop",
		"date": "Apr 5, 2019",
		"status": "Ongoing"
	},
	{
		"title": "Amet Risus Donec Institute",
		"persion": "Hammett",
		"date": "Oct 18, 2019",
		"status": "Ongoing"
	},
	{
		"title": "Neque Sed Dictum Corp.",
		"persion": "Lucas",
		"date": "Dec 7, 2019",
		"status": "Start "
	},
	{
		"title": "Vulputate Incorporated",
		"persion": "Ross",
		"date": "Jun 10, 2019",
		"status": "Ongoing"
	},
	{
		"title": "Duis Risus Odio LLP",
		"persion": "Hamilton",
		"date": "Aug 26, 2018",
		"status": "Ongoing"
	},
	{
		"title": "Scelerisque Scelerisque LLP",
		"persion": "Lewis",
		"date": "Jan 16, 2020",
		"status": "Ongoing"
	},
	{
		"title": "Adipiscing Non Luctus Limited",
		"persion": "Stewart",
		"date": "Dec 3, 2019",
		"status": " Close "
	},
	{
		"title": "Ante Ipsum Primis Ltd",
		"persion": "Simon",
		"date": "Jul 21, 2019",
		"status": " Close "
	}
	        ]

        }
    }
}
</script>