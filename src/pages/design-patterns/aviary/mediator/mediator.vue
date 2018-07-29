<template lang='pug'>
    div(id='mediator-pattern')
        md-card
            md-card-header
                div(class='md-title') Implementing a Mediator pattern
                div(class='md-subhead') for simplifying interface between multiple objects
            md-card-content
                div(class='info-button')
                    md-button(:md-ripple='false' @click='load_dialog("mediator_1")')
                        md-icon info
                div(id='bird-type-picture-box')
                    img(v-bind:src='bird_picture_src' v-bind:style='bird_picture_style')
                    div(class='img-credit-box')
                        p(v-show='bird_type === "Flamingo"') Icon made by 
                            a(href='https://www.flaticon.com/authors/freepik') Freepik 
                            | from www.flaticon.com
                div(class='bird-deets')
                    md-list(class='bird-deets-list')
                        md-list-item
                            h5 Bird Name:
                            span(v-bind:text-content.prop='bird_name')
                        md-list-item
                            h5 Bird Age:
                            span(v-bind:text-content.prop='bird_age + " years"')
                        md-list-item
                            h5 Bird Height:
                            span(v-bind:text-content.prop='bird_height + " ft"')
                        md-list-item
                            h5 Bird Weight: 
                            span(v-bind:text-content.prop='bird_weight + " lbs"')
                        md-list-item
                            h5 Bird Type:
                            span(v-bind:text-content.prop='bird_type')
                    form(novalidate class="md-layout" @submit.prevent="validateUser")
                        md-field
                            label(for='bird-name') New Bird Name
                            md-input(name='bird-name' id='bird-name' v-model='bird_name_form')
                        md-button(class='md-raised' :md-ripple='false' v-on:click='update_bird_name') update bird name
</template>





<script>
/*]
[|]
[*/
export default {
    name: 'mediator-pattern',
    data: () => ({
        bird_name_form: '',
        mediator_1: {
            title: 'Exchanging Data Between Two Separate Objects',
            subtitle: 'The circles are more than they appear',
            p1: [
                'Data is generated each time a new bird is added.',
            ],
            p2: [
                'The SVG circles in the bird inventory are generated at the component level, and are each a unique object.'
                
            ],
            p3: [
                'The SVG circles contain no data about the bird they represent.',
                '  But each circle must be linked to the correct data.'
            ],
            p4: [
                'The mediator pattern allows ingests a small amount of data from both the circles, and the bird data objects.',
                '  It is fully responsible for the correlation between the two.'
            ]
        }
    }),
    computed: {
        bird_picture_src () {
            if (this.bird_type === 'Flamingo') {
                return 'src/assets/birds/flamingo-2.svg'
            } else if (this.bird_type === 'Penguin') {
                return 'src/assets/birds/penguin-1.svg'
            } else if (this.bird_type === 'Toucan') {
                return 'src/assets/birds/toucan-1.svg'
            }
        },
        bird_picture_style () {
            if (this.bird_type === 'Flamingo') {
                return 'width: 50%;'
            } else if (this.bird_type === 'Penguin') {
                return 'width: 45%;' 
            } else if (this.bird_type === 'Toucan') {
                return 'width: 35%;'
            }
        },
        bird_age () {
            if (typeof this.selected_bird.age !== 'undefined') {
                return this.selected_bird.age.toFixed(1)
            }
        },
        bird_height () {
            if (typeof this.selected_bird.height !== 'undefined') {
                return this.selected_bird.height.toFixed(2)
            }
        },
        bird_weight () {
            if (typeof this.selected_bird.weight !== 'undefined') {
                return this.selected_bird.weight.toFixed(2)
            }
        },
        bird_type () {
            const sb = this.$store.getters['aviary/selected_bird']
            if (typeof sb.type !== 'undefined') {
                return sb.type
            } else {
                return 'no type selected'
            }
        },
        selected_bird () {
            return this.$store.getters['aviary/selected_bird']
        },
        bird_name () {
            if (this.selected_bird.name !== 'undefined') {
                return this.selected_bird.name
            }
        }
    },
    methods: {
        load_dialog (blurb_title) {
            this.$store.dispatch('dialog/activate_dialog', this[blurb_title])
        },
        update_bird_name () {
            this.$store.commit('aviary/update_bird_name', this.bird_name_form)
            /*]
            [|] After submitting the new bird name, clear the bird name variable.
            [*/
            this.bird_name_form = ''
        }
    },
    mounted () {
    }
}
</script>





<style lang="scss">
// -- Color Definitions
$dark-green: #1B5E20;
$green: #4CAF50;
$light_green: #C8E6C9;


// --- Reusables
@mixin two-in-a-row() {
    width: 38%;
    margin-left: 6%;
    margin-right: 6%;
    vertical-align: top;
    display: inline-block;
}

// --- General Styling [ PRE Media Query ]
#mediator-pattern {
    .info-button {
        text-align: right;
    }
    .bird-deets {
        width: 75%;
        text-align: center;
        margin-left: 12.5%;
        h5 {
            padding: 0;
            margin: 0;
        }
        .bird-deets-list {
            li {
                background-color: #ccc;
                margin-top: 2.5px;
                margin-bottom: 2.5px;
                line-height: 1.25em;
            }
        }
    }
    .img-credit-box {
        p {
            font-size: 10px;
        }
    }
}
</style>
