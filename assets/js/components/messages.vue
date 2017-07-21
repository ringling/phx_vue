<template>
  <v-layout row>
    <v-flex xs12 sm6>
      <v-card>
        <v-toolbar class="teal" dark>
          <v-toolbar-title>message</v-toolbar-title>
        </v-toolbar>
        <v-text-field 
          v-model="message"
          name="input-1"
          label="Chat message"
          id="testing" 
          v-on:keyup.native.13="sendMessage"></v-text-field>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card>
        <v-toolbar class="teal" dark>
          <v-toolbar-title>Chat</v-toolbar-title>
        </v-toolbar>
        <v-list two-line subheader>
          <v-subheader>Messages</v-subheader>

          <v-list-tile avatar v-for="message in messages">
            <v-list-tile-content>
              <v-list-tile-title>{{message.body}}</v-list-tile-title>
              <v-list-tile-sub-title>{{message.received_at}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
         
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['messages'],

   // computed: {
   //   messages () {
   //     return this.$store.state.messages
   //   }
   // },

   data() {
    return {
      message: null
    }
  },

  methods: {
    sendMessage() {
      this.$parent.channel.push("new_msg", { body: this.message })
      this.message = null
    }
  }
}
</script>

<style scoped lang="sass">
.messages {
  margin-left: auto;
  margin-right: auto;

  width: 800px;

  h1 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  input {
    background-color: #c0c0c0
  }
}
</style>
