<template lang='pug'>
    div(id='snap-practice')
        md-card
            md-card-header
            md-card-content
                div(id='canvas-1')
                h2 This circle moves around.
                svg(id='circle')
                h3 And crashes into things
                md-button(v-on:click='position_randomizer') Bounce
</template>

<script>
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
/*]
[|]
[*/
export default {
  name: 'snap-practice',
  data () {
    return {
    }
  },
  methods: {
      position_randomizer () {
          const x = this.random_num(300)
          const y = this.random_num(200)
          const t = 'translate(' + x + ', ' + y + ')'
          /*]
          [|]
          [*/
          this.s.animate({
            transform: t}, 2000, mina.bounce)
      },
      random_num (max) {
        return Math.floor(Math.random() * Math.floor(max))
      }

  },
  mounted () {
    const s = Snap('#circle')
    s.addClass('farts')
    s.circle(70, 70, 70)

    setTimeout(() => {
      s.animate({
        transform: 'translate(100, 100)'}, 700, mina.bounce)
    }, 5000)

    this.s = s
  }
}
</script>

<style lang="scss">
#snap-practice {
    #canvas-1 {
      height: 75%;
      width: 75%;
      margin-left: 12.5%;
      margin-right: 12.5%;
    }
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
