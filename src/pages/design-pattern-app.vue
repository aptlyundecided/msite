<template lang='pug'>
    div(id='design-pattern-app')
        md-card(class='aviary-card')
            md-card-header
                div(class='md-title') Factory Design Pattern
                div(class='md-subhead') Add Birds

            md-card-content(class='aviary-card-contents')
                div(class='info-button')
                    md-button(:md-ripple='false' @click='load_dialog("factory_1")')
                        md-icon info
                md-list(class='bird-list')
                    md-list-item(class='flamingo')
                        b Flamingo Count:
                        span(v-bind:text-content.prop='total_flamingos')
                    md-list-item(class='penguin')
                        b(class='penguin') Penguin Count:
                        span(class='penguin' v-bind:text-content.prop='total_penguins')
                    md-list-item(class='toucan')
                        b Toucan Count:
                        b(class='white-text' v-bind:text-content.prop='total_toucans')

            md-bottom-bar
                md-bottom-bar-item(@click='add_bird("flamingo")') Flamingo
                md-bottom-bar-item(@click='add_bird("toucan")') Toucan
                md-bottom-bar-item(@click='add_bird("penguin")') Penguin

        // --- Inventory Card
        aviary-inventory
</template>





<script>
/*]
[|]
[*/
import aviary_inventory from './design-patterns/aviary/aviary-inventory.vue'
/*]
[|]
[*/
export default {
    name: 'design-pattern-app',
    data: () => ({
        factory_1: {
            title: 'What is happening with these birds?',
            subtitle: 'Why do they increase when I click their buttons?',
            p1: [
                'Each time you click on "Flamingo", a new flamingo object is created.',
            ],
            p2: [
                'But if you click on "Toucan", the exact same function called "add_bird" is called.'
            ],
            p3: [
                'How is it possible that the same function, can return objects with different properties?'
            ],
            p4: [
                'It\'s because the function is a factory, and will compose objects based on the parameters sent to it.'
            ]
        }
    }),
    components: {
        'aviary-inventory': aviary_inventory
    },
    computed: {
        total_flamingos () {
            return this.$store.getters['aviary/total_flamingos']
        },
        total_penguins () {
            return this.$store.getters['aviary/total_penguins']
        },
        total_toucans () {
            return this.$store.getters['aviary/total_toucans']
        }
    },
    methods: {
        add_bird (bird_type) {
            this.$store.commit('aviary/add_bird', bird_type)
        },
        load_dialog (blurb_title) {
            this.$store.dispatch('dialog/activate_dialog', this[blurb_title])
        }
    }
}
</script>





<style lang="scss">
// -- Color Definitions
$dark-green: #1B5E20;
$green: #4CAF50;
$light_green: #C8E6C9;
$blue: #42A5F5;

// --- Reusables
@mixin two-in-a-row() {
    width: 38%;
    margin-left: 6%;
    margin-right: 6%;
    vertical-align: top;
    display: inline-block;
}

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
        @include two-in-a-row();
        .info-button {
            text-align: right;
        }
        .flamingo {
            background-color: pink;
        }.penguin {
            background-color: black;
            color: white;
        }.toucan {
            background-color: $green;
            .white-text {
                color: white;
            }
        }
    }
}

</style>
