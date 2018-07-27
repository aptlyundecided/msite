<template lang='pug'>
    div(id='about-me')
        md-card
            md-card-header
                div(class='md-title') Full Stack Developer
                div(class='md-subhead') With a heavy preference for JavaScript
            md-card-content
                md-content I like to write about 
                    a(href='https://medium.com/@adwilson0286') what I'm learning
                md-content I'm on 
                    a(href='https://www.linkedin.com/in/alexander-wilson-47417a4b/') LinkedIn
                    |, 
                    a(href='https://twitter.com/AptlyUndecided') Twitter
                    |, 
                    a(href='https://hashnode.com/@aptlyundecideds') Hashnode
                    |, and 
                    a(href='https://dev.to/aptlyundecided') Dev.to
                md-content And you can email me at
                    a(mail:to='adwilson0286@gmail.com') adwilson0286@gmail.com
</template>





<script>
/*]
[|]
[*/
export default {
  name: 'about-me',
  data: () => ({
      show_text: ''
  }),
  components: {

  },
  methods: {
      show (card_name) {
          if (typeof card_name === 'string') {
              this.show_text = card_name
          }
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
#about-me{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 75%;
  margin-left: 12.5%;
  margin-right: 12.5%;
  margin-top: 2.5%;
  .about-header {
      background-color: #4CAF50;
      color: white;
      text-align: left;
  }
  .about-type-toolbar {
    background-color: $light_green;
  }
}

</style>
