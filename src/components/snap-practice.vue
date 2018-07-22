<template lang='pug'>
    div(id='snap-practice')
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
          pr_active: false,
          pr_animation_time: 800
      }
  },
  methods: {
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
      /*]
      [|] assign it 
      [*/
      this.s = s.circle(70, 70, 50)
      this.s2 = s2.circle(150, 70, 70)
  }
}
</script>



<style lang="scss">
#snap-practice {
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
