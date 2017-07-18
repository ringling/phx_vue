<template>
  <div class="messages">
    <h2>Messages</h2>
    <input type="text" v-model="message" v-on:keyup.13="sendMessage">
    <ul v-for="message in messages">
      <li>{{message}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['messages'],

   // computed: {
   //   messages () {
   //     return this.$store.state.messages
   //   }
   // },
  methods: {
    sendMessage() {
      this.$parent.channel.push("new_msg", { body: this.message })
      this.message = ''
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
