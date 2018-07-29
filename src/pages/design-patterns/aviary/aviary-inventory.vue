<template lang='pug'>
    div(id='aviary-inventory')
        md-card
            md-card-header
                div(class='md-title') Aviary Bird Inventory
                div(class='md-subhead') This is an Observer Pattern
            md-card-content
                div(class='info-button')
                    md-button(:md-ripple='false' @click='load_dialog("observer_1")')
                        md-icon info
                div(class='bird-pen')
                    svg(id='flamingo-inventory')
                div(class='bird-pen')
                    svg(id='penguin-inventory')
                div(class='bird-pen')
                    svg(id='toucan-inventory')
</template>





<script>
/*]
[|]
[*/
export default {
    name: 'aviary-inventory',
    data: () => ({
        bird_circle_radius: 10,
        bird_grid: [],
        bird_grid_current_pos: [0, 0],
        bird_grid_max_cols: 0,
        bird_grid_max_rows: 0,
        fi: {}, // --> Flamingo Inventory SNAP.svg Object
        pi: {}, // --> Penguin Inventory SNAP.svg Object
        ti: {}, // --> Toucan Inventory SNAP.svg Object
        observer_1: {
            title: 'Updating a group of objects',
            subtitle: 'Only after another object has been modified',
            p1: [
                'Each of these circles represents one bird data object',
            ],
            p2: [
                'The circles are redrawn each time the bird data object changes in some way' 
            ],
            p3: [
                'Changes can be carried out directly to each of these objects'
            ],
            p4: [
                'But a circle will never exist where there is not a corresponding bird data object for it to pair with.'
            ]
        }
    }),
    computed: {
        bird_circle_lists () {
            return this.$store.getters['aviary/bird_circles']
        },
        flamingos () {
            return this.$store.getters['aviary/flamingos']
        },
        penguins () {
            return this.$store.getters['aviary/penguins']
        },
        toucans () {
            return this.$store.getters['aviary/toucans']
        }
    },
    methods: {
        load_dialog (blurb_title) {
            this.$store.dispatch('dialog/activate_dialog', this[blurb_title])
        },
        populate_bird_inventory(bird_data) {
            /*]
            [|] Convenience reference to this
            [*/
            const self = this
            const cols = this.bird_grid_max_cols
            const rows = this.bird_grid_max_rows
            let drawn_circles = this.bird_circle_lists
            let new_bird_circle_list = []
            /*]
            [|] Empty the current pos because this is meant to re-render the entire 'list'
            [*/
            this.bird_grid_current_pos = [0, 0]
            /*]
            [|] Redraw the SVG everytime for simplicity sake. (Is this a performance sacrifice?)
            [*/
            bird_data.svg.clear()
            /*]
            [|] Loop through each 'bird'
            [*/
            for(let i = 0; i < bird_data.arr.length; i += 1) {
                if (bird_data.arr.length < (rows * cols)) {
                    const coords = this.bird_grid[this.bird_grid_current_pos[0]][this.bird_grid_current_pos[1]]
                    const x = coords[0]
                    const y = coords[1]
                    const new_bird = bird_data.svg.circle(x, y, this.bird_circle_radius)
                    const index_match = self.$store.getters['aviary/mediator/selected_bird_id'] === i
                    const class_match = self.$store.getters['aviary/mediator/selected_bird_classname'] === bird_data.css_classname
                    /*]
                    [|] Assign iterator value to bird ID.
                    [*/
                    new_bird.id = i
                    /*]
                    [|]
                    [*/
                    if (index_match === true && class_match === true) {
                        new_bird.attr({
                            fill: bird_data.selected_color
                        })
                    } else {
                        new_bird.attr({
                            fill: bird_data.pcolor
                        })
                    }
                    /*]
                    [|]
                    [*/
                    new_bird.addClass(bird_data.css_classname)
                    /*]
                    [|] Assign Event Handlers
                    [*/
                    new_bird.mouseover(function () {
                        new_bird.attr({
                            fill: bird_data.hover_color
                        })
                    })
                    .mouseout(function () {
                        if (new_bird.is_selected === true) {
                            new_bird.attr({
                                fill: bird_data.selected_color
                            })                            
                        } else {
                            new_bird.attr({
                                fill: bird_data.pcolor
                            })
                        }
                    })
                    .click(function () {
                        /*]
                        [|] Deselect all other elements.
                        [*/
                        self.fi.deselect_all('flamingo', 'pink')
                        self.pi.deselect_all('penguin', 'black')
                        self.ti.deselect_all('toucan', 'green')
                        /*]
                        [|] The clicked element must be marked as selected
                        [*/
                        new_bird.is_selected = true
                        new_bird.attr({
                            fill: bird_data.selected_color
                        })
                        /*]
                        [|] Pass selected bird data to the state machine
                        [*/
                        self.$store.commit('aviary/update_selected_bird', [bird_data.css_classname + 's', new_bird])
                        self.$store.dispatch('aviary/update_selected_bird', [bird_data.css_classname, new_bird])
                    })
                    /*]
                    [|] Update bird lists
                    [*/
                    new_bird_circle_list[i] = new_bird
                    /*]
                    [|]
                    [*/
                    this.update_next_bird_grid_location('increment')
                }
                else {
                    /*]
                    [|] TODO: Snackbar
                    [*/
                }
            }
            /*]
            [|] Update circle array
            [*/
            drawn_circles[bird_data.css_classname + 's'] = new_bird_circle_list
            /*]
            [|] Move the array into the state machine
            [*/
            this.$store.commit('aviary/update_bird_circles', drawn_circles)
        },
        update_bird_grid () {
            const w = document.getElementById('flamingo-inventory').width.baseVal.value
            const h = document.getElementById('flamingo-inventory').height.baseVal.value
            const diam = this.bird_circle_radius * 2
            const cols = Math.trunc(w / diam)
            const rows = Math.trunc(h / diam)
            let bird_data = {}
            /*]
            [|] Set bird limit ['based on screen size']
            [*/
            this.$store.commit('aviary/set_birds_limit', (cols * rows))
            /*]
            [|] Build the grid
            [*/
            for (let i = 0; i < rows; i += 1) {
                for (let j = 0; j < cols; j += 1) {
                    /*]
                    [|] Make sure there is an array to put items into
                    [*/
                    if (typeof this.bird_grid[i] === 'undefined') {
                        this.bird_grid[i] = []
                    }
                    /*]
                    [|] Populate list
                    [*/
                    this.bird_grid[i][j] = [
                        (((j + 1) * diam) - (diam / 2)),    // x
                        ((i + 1) * diam)                    // y
                        ]
                }
            }
            /*]
            [|]
            [*/
            this.bird_grid_max_cols = cols
            this.bird_grid_max_rows = rows
            /*]
            [|] Flamingos
            [*/
            bird_data = {
                arr: this.flamingos,
                css_classname: 'flamingo',
                hover_color: 'yellow',
                pcolor: 'pink',
                selected_color: 'red',
                svg: this.fi
            }
            this.populate_bird_inventory(bird_data)
            /*]
            [|] Penguins
            [*/
            bird_data = {
                arr: this.penguins,
                css_classname: 'penguin',
                hover_color: 'yellow',
                pcolor: 'black',
                selected_color: 'red',
                svg: this.pi
            }
            this.populate_bird_inventory(bird_data)
            /*]
            [|] Toucans
            [*/
            bird_data = {
                arr: this.toucans,
                css_classname: 'toucan',
                hover_color: 'yellow',
                pcolor: 'green',
                selected_color: 'red',
                svg: this.ti
            }
            this.populate_bird_inventory(bird_data)
            /*]
            [|]
            [*/
            this.$store.commit('aviary/check_bird_allowance')
        },
        update_next_bird_grid_location (str) {
            if (str === 'increment') {
                if (this.bird_grid_current_pos[1] < this.bird_grid_max_cols - 1) {
                    this.bird_grid_current_pos[1] += 1
                } 
                else if (this.bird_grid_current_pos[0] < this.bird_grid_max_rows - 1) {
                    this.bird_grid_current_pos[0] += 1
                    this.bird_grid_current_pos[1] = 0
                }
            }
            else if (str === 'decrement') {
                if (this.bird_grid_current_pos[1] > 0) {
                    this.bird_grid_current_pos[1] -= 1
                } 
                else if (this.bird_grid_current_pos[0] > 0) {
                    this.bird_grid_current_pos[0] -= 1
                    this.bird_grid_current_pos[1] = this.bird_grid_max_cols - 1
                }
            }
        }
    },
    mounted () {
            const s1 = Snap('#flamingo-inventory')
            const s2 = Snap('#penguin-inventory')
            const s3 = Snap('#toucan-inventory')
            /*]
            [|] Create deselect all function
            [*/
            const deselect_all = function (class_name, primary_color) {
                const group = this.selectAll('.' + class_name)
                /*]
                [|] Loop through each element, and 'deselect' it.
                [*/
                group.forEach((n) => {
                    n.is_selected = false
                    n.attr({
                        fill: primary_color
                    })
                })
            }
            /*]
            [|]
            [*/
            s1.deselect_all = deselect_all
            s2.deselect_all = deselect_all
            s3.deselect_all = deselect_all
            /*]
            [|]
            [*/
            s1.deselect_all()
            /*]
            [|]
            [*/
            this.fi = s1
            this.pi = s2
            this.ti = s3
    },
    watch: {
        flamingos () {
            this.update_bird_grid()
        },
        penguins () {
            this.update_bird_grid()
        },
        toucans () {
            this.update_bird_grid()
        }
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
#aviary-inventory {
    .info-button {
        text-align: right;
    }
    #flamingo-inventory {
        width: 75%;
    }
    #penguin-inventory {
        width: 75%;
    }
    #toucan-inventory {
        width: 75%;
    }.bird-pen {
        border: solid #ccc 1px;
        width: 75%;
        margin-left: 12.5%;
        margin-right: 12.5%;
    }
}
</style>
