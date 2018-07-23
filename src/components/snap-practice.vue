<template lang='pug'>
    div(id='snap-practice')


        // --- Add and Delete circles to a grid.
        md-card(class='snap-demo')
            md-card-header(class='snap-demo-header')
                div(class='md-title') Add or Delete elements
                div(class='md-subhead') FILO
            md-card-content
                div(id='canvas-3')
                    h3 Add some circles
                    svg(id='circle-group')
                    h3 Or delete some circles
            md-bottom-bar
                md-button(class='md-raised' :md-ripple='false' v-on:click='add_circle') Add
                md-button(class='md-raised' :md-ripple='false' v-on:click='delete_circle') Delete


        // --- Move the circle around
        md-card(class='snap-demo')
            md-card-header(class='snap-demo-header')
                div(class='md-title') Movement Animation
            md-card-content
                div(id='canvas-1')
                    h3 This circle moves around
                    svg(id='circle')
                    h3 And crashes into invisible things
            md-bottom-bar
                md-button(class='md-raised' :md-ripple='false' v-on:click='position_randomizer') Bounce


        // --- Change color and size
        md-card(class='snap-demo')
            md-card-header(class='snap-demo-header')
                div(class='md-title') Color and Size Change Animation
            md-card-content
                div(id='canvas-2')
                    h3 This circle changes colors
                    svg(id='circle2')
                    h3 And also size
            md-bottom-bar
                md-button(class='md-raised' :md-ripple='false' v-on:click='s2_randomizer') Change

</template>



<script>
/*]
[|] use the SNAP SVG library
[*/
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
/*]
[|]
[*/
export default {
    name: 'snap-practice',
    data () {
        return {
            circle_group: {},       // --> SNAP object [declared after mount to avoid loading errors]
            cgc: {                  // --> Circle Group Critera 
                container_width: 0,
                circle_radius: 20,
                current_grid_pos: [0, 0],
                max_circles: 0,
                max_cols: 10,
                max_rows: 3,
                start_point: [0,0],
                grid: [],
                grid_is_built: false
            },
            circle_list: [],
            pr_active: false,
            pr_animation_time: 800
        }
    },
    methods: {
        add_circle () {
            /*]
            [|] RULES FOR THIS SVG:
            [|] 01: This should always append the NEW circle to the end of the group.
            [|] 02: The group should be some structure, like an array.
            [|] 03: Each circle (radius??) will be needed to calculate where the next grid pos is. [also y]
            [|] 04: The SVG element will be some width, depending on the size of the page.  A NEW ROW must 
            [|]     be created if the new circle will be added OUTSIDE of the box.
            [*/
            this.update_circle_grid()
            if (this.circle_list.length < this.cgc.max_circles) {
                /*]
                [|]
                [*/
                const coords = this.cgc.grid[this.cgc.current_grid_pos[0]][this.cgc.current_grid_pos[1]]
                const x = coords[0]
                const y = coords[1]
                const new_circle = this.circle_group.circle(x, y, this.cgc.circle_radius)
                /*]
                [|] Add the new circle to the circle list
                [*/
                this.circle_list.push(new_circle)
                /*]
                [|] Increment grid location
                [*/
                this.update_next_grid_location('increment')
            }
            else {
                /*]
                [|] TODO: Snackbar
                [*/
            }
        },
        delete_circle () {
            /*]
            [|] First, check if there are circles to be removed.
            [*/
            if (this.circle_list.length >= 1) {
                /*]
                [|] Then, remove the circle from the dom before continuing.
                [*/
                this.circle_list[this.circle_list.length - 1].remove()
                /*]
                [|] After removing the circle from the dom, remove it from the list.
                [*/
                this.circle_list.pop()
                /*]
                [|] Decrement grid location
                [*/
                this.update_next_grid_location('decrement')
            }
        },
        update_circle_grid () {
            /*]
            [|]
            [*/
            if (this.cgc.grid_is_built === false) {
                const w = document.getElementById('circle-group').width.baseVal.value
                const h = document.getElementById('circle-group').height.baseVal.value
                const diam = this.cgc.circle_radius * 2
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
                        if (typeof this.cgc.grid[i] === 'undefined') {
                            this.cgc.grid[i] = []
                        }
                        /*]
                        [|] Populate list
                        [*/
                        this.cgc.grid[i][j] = [
                            (((j + 1) * diam) - (diam / 2)), // x
                            ((i + 1) * diam) // y
                            ]
                    }
                }
                /*]
                [|] Notate that the grid has been built
                [*/
                this.cgc.grid_is_built = true
                /*]
                [|] Update circle group criteria
                [*/
                this.cgc.width = w
                this.cgc.height = h
                this.cgc.max_cols = cols
                this.cgc.max_rows = rows
                this.cgc.max_circles = cols * rows
            }
        },
        update_next_grid_location (str) {
            if (str === 'increment') {
                if (this.cgc.current_grid_pos[1] < this.cgc.max_cols - 1) {
                    this.cgc.current_grid_pos[1] += 1
                } 
                else if (this.cgc.current_grid_pos[0] < this.cgc.max_rows - 1) {
                    this.cgc.current_grid_pos[0] += 1
                    this.cgc.current_grid_pos[1] = 0
                }
            }
            else if (str === 'decrement') {
                if (this.cgc.current_grid_pos[1] > 0) {
                    this.cgc.current_grid_pos[1] -= 1
                } 
                else if (this.cgc.current_grid_pos[0] > 0) {
                    this.cgc.current_grid_pos[0] -= 1
                    this.cgc.current_grid_pos[1] = this.cgc.max_cols - 1
                }
            }
        },
        s2_randomizer () {
                const random_color = this.random_color()
                const random_radius = this.random_num(20, 70)
                /*]
                [|]
                [*/
                this.s2.attr({
                    fill: '#' + random_color
                })
                /*]
                [|]
                [*/
                this.s2.animate(
                    {r: random_radius}, 500, mina.bounce)
        },
        position_randomizer () {
                /*]
                [|] Get the height of this thing.
                [*/
                const h = document.getElementById('circle').height.baseVal.value
                const w = document.getElementById('circle').width.baseVal.value
                /*]
                [|]
                [*/
                const x = this.random_num(0, w)
                const y = this.random_num(0, h)
                const t = 'translate(' + x + ', ' + y + ')'
                /*]
                [|]
                [*/
                this.s.animate({
                transform: t}, 800, mina.bounce)
        },
        random_num (min, max) {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min)) + min
        },
        random_color () {
            const values = [
                '0', '1', '2', '3',
                '4', '5', '6', '7',
                '8', '9', 'A', 'B',
                'C', 'D', 'E', 'F' 
                ]
            const new_color_arr = []
            /*]
            [|] Create array with new color in hex
            [*/
            for (let i = 0; i < 6; i += 1) {
                new_color_arr.push(values[this.random_num(0, 15)])
            }
            /*]
            [|]
            [*/
            const new_color = new_color_arr.join('')
            return new_color
        }
  },
  mounted () {
        /*]
        [|] Create a snap object, to control an SVG with the snap library
        [|] NOTE: The DOM element must be of type SVG, not div or anything else.
        [*/
        const s = Snap('#circle')
        const s2 = Snap('#circle2')
        const s3 = Snap('#circle-group')
        /*]
        [|] assign it 
        [*/
        this.s = s.circle(70, 70, 50)
        this.s2 = s2.circle(150, 70, 70)
        this.circle_group = s3
  }
}
</script>



<style lang="scss">
#snap-practice {
    #circle-group {
        width: 75%;
    }
    #circle {
        width: 75%;
    }
    .snap-demo {
      width: 50%;
      margin-left: 25%;
      margin-right: 25%;
      margin-bottom: 5%;
      .snap-demo-header {
          background-color: #f04a10;
          font-weight: 800;
          color: #FFFFFF;
      }
    }
}
</style>
