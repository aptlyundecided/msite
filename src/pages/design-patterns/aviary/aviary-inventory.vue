<template lang='pug'>
    div(id='aviary-inventory')
        md-card
            md-card-header
                div(class='md-title') Aviary Bird inventory
                div(class='md-subhead') Each circle === 1 bird
            md-card-content
                div
                    svg(id='flamingo-inventory')
                    svg(id='penguin-inventory')
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
        ti: {}  // --> Toucan Inventory SNAP.svg Object
    }),
    computed: {
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
        /*]
        [|] TODO: - update_bird_grid
        [|] 01: Break the flamingo, penguin, and toucan updates out of the function.
        [*/
        update_bird_grid () {
            const w = document.getElementById('flamingo-inventory').width.baseVal.value
            const h = document.getElementById('flamingo-inventory').height.baseVal.value
            const diam = this.bird_circle_radius * 2
            const cols = Math.trunc(w / diam)
            const rows = Math.trunc(h / diam)
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
            this.bird_grid_current_pos = [0, 0]
            // TODO: Clear all contents from flamingos SVG
            for(let i = 0; i < this.flamingos.length; i += 1) {
                if (this.flamingos.length < (rows * cols)) {
                    const coords = this.bird_grid[this.bird_grid_current_pos[0]][this.bird_grid_current_pos[1]]
                    const x = coords[0]
                    const y = coords[1]
                    const new_flamingo = this.fi.circle(x, y, this.bird_circle_radius)
                    new_flamingo.attr({
                        fill: 'pink'
                })
                    this.update_next_bird_grid_location('increment')
                }
                else {
                    /*]
                    [|] TODO: Snackbar
                    [*/
                }
            }
            /*]
            [|] Penguins
            [*/
            this.bird_grid_current_pos = [0, 0]
            // TODO: Clear all contents from Penguins SVG
            for(let i = 0; i < this.penguins.length; i += 1) {
                if (this.penguins.length < (rows * cols)) {
                    const coords = this.bird_grid[this.bird_grid_current_pos[0]][this.bird_grid_current_pos[1]]
                    const x = coords[0]
                    const y = coords[1]
                    const new_penguin = this.pi.circle(x, y, this.bird_circle_radius)
                    new_penguin.attr({
                        fill: 'black'
                })
                    this.update_next_bird_grid_location('increment')
                }
                else {
                    /*]
                    [|] TODO: Snackbar
                    [*/
                }
            }
            /*]
            [|] Toucans
            [*/
            this.bird_grid_current_pos = [0, 0]
            // TODO: Clear all contents from Penguins SVG
            for(let i = 0; i < this.toucans.length; i += 1) {
                if (this.toucans.length < (rows * cols)) {
                    const coords = this.bird_grid[this.bird_grid_current_pos[0]][this.bird_grid_current_pos[1]]
                    const x = coords[0]
                    const y = coords[1]
                    const new_toucan = this.ti.circle(x, y, this.bird_circle_radius)
                    new_toucan.attr({
                        fill: 'green'
                })
                    this.update_next_bird_grid_location('increment')
                }
                else {
                    /*]
                    [|] TODO: Snackbar
                    [*/
                }
            }
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
    @include two-in-a-row();
    #flamingo-inventory {
        width: 75%;
    }
    #penguin-inventory {
        width: 75%;
    }
    #toucan-inventory {
        width: 75%;
    }
}
</style>
