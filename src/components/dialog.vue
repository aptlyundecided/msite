<template lang='pug'>
    md-dialog(:md-active.sync='showDialog')
        md-card(class='standard-data')
            md-card-header
                div(class='md-title' v-bind:text-content.prop='dialog_title')
                div(class='md-subhead' v-bind:text-content.prop='dialog_subtitle')
            md-card-content
                p(v-bind:text-content.prop='dialog_p1')
                p(v-bind:text-content.prop='dialog_p2')
                p(v-bind:text-content.prop='dialog_p3')
                p(v-bind:text-content.prop='dialog_p4')
        md-dialog-actions
            md-button(class="md-primary" @click="close_dialog") Close
</template>





<script>
/*]
[|]
[*/
export default {
    name: 'box-dialog',
    data: () => ({
        showDialog: false
    }),
    computed: {
        dialog_p1 () {
            return this.$store.getters['dialog/p1']
        },
        dialog_p2 () {
            return this.$store.getters['dialog/p2']
        },
        dialog_p3 () {
            return this.$store.getters['dialog/p3']
        },
        dialog_p4 () {
            return this.$store.getters['dialog/p4']
        },
        dialog_subtitle () {
            return this.$store.getters['dialog/subtitle']
        },
        dialog_title () {
            return this.$store.getters['dialog/title']
        },
        trigger_dialog () {
            return this.$store.getters['dialog/trigger_dialog']
        }
    },
    methods: {
        close_dialog () {
            this.showDialog = false
        }
    },
    watch : {
        trigger_dialog: function () {
            if (this.$store.getters['dialog/trigger_dialog'] === true) {
                this.showDialog = true
                this.$store.dispatch('dialog/deactivate_dialog')
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


</style>
