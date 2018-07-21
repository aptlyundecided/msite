<template lang='pug'>
    div(id='app')
        md-tabs
            md-tab(id='tab-my-experience' md-label='My Experience')
                my-experience
            md-tab(id='tab-snap-practice' md-label='Snap Practice')
                snap-practice
</template>

<script>
/*]
[|]
[*/
import my_experience from './pages/my-experience.vue'
import snap_practice from './pages/snap-practice.vue'
/*]
[|]
[*/
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'my-experience': my_experience,
    'snap-practice': snap_practice
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
