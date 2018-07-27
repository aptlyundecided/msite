<template lang='pug'>
    div(id='app')
        md-toolbar
            md-button(:md-ripple='false' @click='showNavigation = true')
                md-icon menu
            h2(class='md-title') Alex Wilson - Portfolio / CV
        md-drawer(:md-active.sync="showNavigation")
            md-list(:md-ripple='false')
                md-list-item(@click='show("hello-world")' :md-ripple='false') Hello World
                md-list-item(@click='show("about-this-app")' :md-ripple='false') About this App
                md-list-item(@click='show("about-me")' :md-ripple='false') About Me
                md-list-item(@click='show("design-pattern-app")' :md-ripple='false') Design Patterns App
                md-list-item(@click='show("playground")' :md-ripple='false') Playground
                md-list-item(@click='show("my-experience")' :md-ripple='false') My Experience
        div(id='card-load-zone')
            about-this-app(v-show='show_text === "about-this-app"')
            about-me(v-show='show_text==="about-me"')
            design-pattern-app(v-show='show_text === "design-pattern-app"')
            hello-world(v-show='show_text === "hello-world"')
            playground(v-show='show_text === "playground"')
            my-experience(v-show='show_text === "my-experience"')
            dialog-box
</template>





<script>
/*]
[|]
[*/
import about from './pages/about-this-app.vue'
import about_me from './pages/about-me.vue'
import design_pattern_app from './pages/design-pattern-app.vue'
import dialog from './components/dialog.vue'
import hello_world from './pages/hello-world.vue'
import playground from './pages/playground.vue'
import my_experience from './pages/my-experience.vue'
/*]
[|]
[*/
export default {
    name: 'app',
    data: () => ({
        showNavigation: false,
        showSidePanel: false
    }),
    components: {
        'about-this-app': about,
        'about-me': about_me,
        'design-pattern-app': design_pattern_app,
        'dialog-box': dialog,
        'hello-world': hello_world,
        'playground': playground,
        'my-experience': my_experience
    },
    computed: {
        show_text () {
            return this.$store.getters.active_page
        },
        show_dialog () {
            return this.$store.getters['dialog/show_dialog']
        }
    },
    methods: {
        show (page_name) {
            this.$store.commit('set_active_page', page_name)
        }
    },
    mounted () {
        this.show('hello-world')
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
