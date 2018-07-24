<template lang='pug'>
    div(id='my-experience')
        md-card()
            md-card-header(class='experience-header')
                div(class='md-title') Things I've Worked On
            md-card-content
                // --- Sweet Toolbar
                md-toolbar(md-elevation='0' class='experience-type-toolbar')
                    md-button(class='md-raised tb-button' :md-ripple='false' @click='show("show-me-the-money")')
                        h4 Show me the code 
                    md-button(class='md-raised tb-button' :md-ripple='false' @click='show("controls-engineering")')
                        h4 Controls Engineering 
                    md-button(class='md-raised tb-button' :md-ripple='false' @click='show("data-services")')
                        h4 Data Services 


                // --- Show Me the Code Card
                div(id='show-money-card'
                    class='skill-card'
                    v-show='show_text === "show-me-the-money"')
                    h3 Show Don't Tell
                    md-content I list my experience in each of the tabs above, but why read a story, when you can see it in action?
                    md-content 
                        |  Check out the 
                        a(@click='change_page("playground")') playground 
                        |  to see what I'm tinkering with.


                // --- Controls Engineering Card 
                div(id='controls-engineering-card'
                    class='skill-card'
                    v-show='show_text === "controls-engineering"')
                    h3 Controls Engineering
                    md-content About half of my programming experience is tied into the manufacturing industry.  But that's a good thing!  
                        | If code quality isn't up to par and a machine crashes, you can't just reboot or debug it.
                        | A lot of time and manual labor is required to fix a physical machine that is damaged.  This has emphasized 
                        | to me the importance of writing high quality, highly tested, and well planned code.
                    md-list
                      md-list-item Allen Bradley
                      md-list-item Fanuc
                      md-list-item Siemens TIA Portal
                      md-list-item Automation Direct [DirectSoft, Do More, Click]


                // --- Data Aggregation and Analysis Card
                div(id='data-services-card'
                    class='skill-card'
                    v-show='show_text === "data-services"')
                    h3 Data Aggregation and Analysis
                    p Identifying kPI's, establishing pipelines to and from databases, and establishing and building tools for analysis of 
                      | the collected data have been significant part of most of the projects I've worked on.

                // --- Cloud Services
                
                // --- Blogging [ Technical Writing ]

</template>

<script>
export default {
  name: 'my-experience',
  data: () => ({
      show_text: 'show-me-the-money'
  }),
  methods: {
      change_page (page_name) {
          this.$store.commit('set_active_page', page_name)
      },
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
#my-experience {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 75%;
  margin-left: 12.5%;
  margin-right: 12.5%;
  margin-top: 2.5%;
  .experience-header {
      background-color: #4CAF50;
      color: white;
      text-align: left;
  }
  .experience-type-toolbar {
    background-color: $light_green;
    .tb-button {
        margin-right: 0.5%;
        margin-left: 0.5%;
    }
  }
  .skill-card {
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
      a {
          cursor: pointer;
      }
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
