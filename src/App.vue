<template lang='pug'>
    div(id='app')
        md-toolbar
            md-button(:md-ripple='false' @click='showNavigation = true')
                md-icon menu
            h2(class='md-title') Alex Wilson - Portfolio / CV
        md-drawer(:md-active.sync="showNavigation")
            md-list(:md-ripple='false')
                md-list-item About this App
                md-list-item(@click='show("hello-world")' :md-ripple='false') Hello World
                md-list-item(@click='show("my-experience")' :md-ripple='false') My Experience
                md-list-item Playground
        div(id='card-load-zone')
            hello-world(v-show='show_text === "hello-world"')
            my-experience(v-show='show_text === "my-experience"')
</template>





<script>
/*]
[|]
[*/
import my_experience from './pages/my-experience.vue'
// import snap_practice from './pages/snap-practice.vue'
import hello_world from './pages/hello-world.vue'
/*]
[|]
[*/
export default {
  name: 'app',
  data: () => ({
      showNavigation: false,
      showSidePanel: false,
      show_text: 'hello-world'
  }),
  components: {
    'my-experience': my_experience,
    // 'snap-practice': snap_practice,
    'hello-world': hello_world
  },
  computed: {

  },
  methods: {
      show (panel_name) {
          if (typeof panel_name === 'string') {
              this.show_text = panel_name
          }
      }
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
