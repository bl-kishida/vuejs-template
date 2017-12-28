<template>
  <div class="hello">
    this is test component(hello world)<br>
    message:{{ this.$store.state.message}}<br>
    counter:{{ this.$store.state.counter }}<br>
    <a class="button" @click="update">Update vuex store</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: this.$store.state.message
    }
  },
  methods: {
    update () {
      this.$store.dispatch('increment')
      this.$store.dispatch({type: 'messageUpdate', msg: 'test message'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $primary : #000;
  $sub : #ccc;
  $accent : #333;
</style>
