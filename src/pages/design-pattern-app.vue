<template lang='pug'>
    div(id='design-pattern-app')
        md-card(class='aviary-card')
            md-card-header
                div(class='md-title') Factory Design Pattern
                div(class='md-subhead') Add Birds
            md-card-content
                md-list(class='bird-list')
                    md-list-item(class='flamingo')
                        b Flamingo Count:
                        span(v-bind:text-content.prop='total_flamingos')
                    md-list-item(class='penguin')
                        b Penguin Count:
                        span(v-bind:text-content.prop='total_penguins')
                    

            md-bottom-bar
                md-bottom-bar-item(@click='add_bird("flamingo")') Flamingo
                md-bottom-bar-item(@click='add_bird("toucan")') Toucan
                md-bottom-bar-item(@click='add_bird("penguin")') Penguin
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
    name: 'design-pattern-app',
    data: () => ({

    }),
    components: {

    },
    computed: {
        total_flamingos () {
            return this.$store.getters['aviary/total_flamingos']
        },
        total_penguins () {
            return this.$store.getters['aviary/total_penguins']
        }
    },
    methods: {
        add_bird (bird_type) {
            this.$store.commit('aviary/add_bird', bird_type)
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
#design-pattern-app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-top: 2.5%;
  .aviary-card {
      vertical-align: top;
      display: inline-block;
      width: 30%;
      .flamingo {
          background-color: pink;
      }
  }
}

</style>
