<template lang='pug'>
    div(id='my-experience')
        md-card()
            md-card-header
                div(class='md-title') Things I've Worked On
            md-card-content
                h3 Controls Engineering
                p About half of my programming experience is tied into the manufacturing industry.  But that's a good thing!
                    | If code quality isn't up to par, and a machine crashes, you can't just reboot it, or debug it.
                    | It requires a lot of time and manual labor to fix a physical machine that is damaged.  This has emphasized 
                    | to me the importance of writing high quality, highly tested, well planned code.
            
</template>

<script>
export default {
  name: 'my-experience',
  data () {
    return {
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
