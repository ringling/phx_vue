<template>
  <div class="messages">
    <h2>Messages</h2>
    <ul v-for="message in messages">
      <li>{{message}}</li>
    </ul>
  </div>
</template>

<script>
// Import other components using a relative path, e.g.
//
// import SecretSauce from './secret-sauce.vue'
//
// or specific third-party modules installed via npm (and listed in
// the dependencies list in package.json), e.g.
//
// import _ from 'lodash'
//


export default {
  props: ['messages'],

  // If you reference other components, then you must also list them
  // in the components map. e.g:
  //
  // components: {
  //   SecretSauce
  // }
}
</script>

<style lang="sass">
.messages {
  margin-left: auto;
  margin-right: auto;

  width: 800px;
  h1 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;
  }
}
</style>
