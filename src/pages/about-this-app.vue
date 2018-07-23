<template lang='pug'>
    div(id='about-this-app')
        md-card
            md-card-header(class='about-header')
                div(class='md-title') About This App
                div(class='md-subhead')
            md-card-content
                h2 Background Information
                md-content This app is built on the Vue.js framework.
                md-content All the Vue Components derive their state from Vuex.
                md-content Any portion of the website using React or other JS frameworks are noted at the point of use.
                md-content SCSS is used for styling, pug for HTML.
                md-content The webpage source code is publicly viewable on 
                    a(href='https://github.com/aptlyundecided/msite') GitHub
</template>





<script>
/*]
[|]
[*/
export default {
  name: 'about-this-app',
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
#about-this-app{
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
