<template lang='pug'>
    div(id='hello-world')
        md-card
            md-card-header(class='hello-header')
                div(class='md-title') Hello, World!
                div(class='md-subhead') Welcome to my web-app CV!
            md-card-content(class='expectations ')
                h3() What is this?
                div(class='centered-container')
                    md-content(class='dark-green-content-box') 
                        p A collection of 'micro-applications' that demonstrate some tech or concept.
                    md-content(class='green-content-box')
                        p Overt abuse of the vue-material framework.
                    md-content(class='dark-green-content-box')
                        p Minimal, intuitive interfaces that can be understood with little to no instructions.
                    md-content(class='green-content-box')
                        p An introduction to me, Alex Wilson!
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

$red: #ff5252;
$dark-green: #1B5E20;
$green: #4CAF50;

#hello-world {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    .hello-header {
        background-color: #4CAF50;
        color: white;
        text-align: left;
    }.green-content-box {
        background-color: $green;
        color: white;
    }
    .dark-green-content-box {
        background-color: $dark-green;
        color: white;
    }
    .centered-container {
        width: 75%;
        margin-left: 12.5%;
        margin-right: 12.5%;
    }.general-list {

    }.expectations {
        h3 {
            font-size: 32px;
            line-height: 1.25em;
            color: $green;
        }
        p {
            font-size: 22px;
            line-height: 1.25em;
            padding: 20px;
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

/* || -=-=-=-=-=-=-=-=-=-=- ||  */
/*        Media Queries         */
/* || -=-=-=-=-=-=-=-=-=-=- ||  */

</style>
