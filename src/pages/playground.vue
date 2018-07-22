<template lang='pug'>
    div(id='playground')
        div(id='snap-practice-card')
            snap-practice
</template>





<script>
/*]
[|]
[*/
import snap_practice from '../components/snap-practice.vue'
/*]
[|]
[*/
export default {
  name: 'playground',
  data: () => ({
      show_text: ''
  }),
  components: {
      'snap-practice': snap_practice
  },
  methods: {
      show (card_name) {
          if (typeof card_name === 'string') {
              this.show_text = card_name
          }
      }
  }
}
</script>





<style lang="scss">
// -- Color Definitions
$dark-green: #1B5E20;
$green: #4CAF50;
$light_green: #C8E6C9;


// --- General Styling [ PRE Media Query ]
#playground{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 75%;
  margin-left: 12.5%;
  margin-right: 12.5%;
  margin-top: 2.5%;
  .playground-header {
      background-color: #4CAF50;
      color: white;
      text-align: left;
  }
  .payground-type-toolbar {
    background-color: $light_green;
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
