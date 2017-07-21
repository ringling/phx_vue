'use strict';
// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import "vueify/lib/insert-css"
import socket from "./socket"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".


import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Messages from "./components/Messages.vue"

Vue.use(Vuetify)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    messages: []
  },

  mutations: {
    addMessage (state, message) {
      store.state.messages.push(message)
    }
  }
})

new Vue({
  el: '#app',
  //store,
  components: {
    Messages
  },
  data() {
    return {
      channel: null,
      messages: []
    }
  },
  mounted() {
    this.channel = socket.channel("worker:all", {});
    this.channel.on("new_msg", payload => {
      payload.received_at = Date();
      this.messages.push(payload);
      //this.$store.commit('addMessage', payload)
    });
    this.channel.join()
      .receive("ok", response => { console.log("Joined successfully", response) })
      .receive("error", response => { console.log("Unable to join", response) })
  },
});
