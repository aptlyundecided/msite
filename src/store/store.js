/*]
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=||
[|]     Program:        store.js
[|]     Description:    State machine for the portfolio application
[|]     Born On:        22 July 2018
[|]     Author:         Alex Wilson
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=||
[*/
/*]
[|] || -=-=-=-=-=-=-=-=-=-=- ||
[|]         DEPENDENCIES
[|] || -=-=-=-=-=-=-=-=-=-=- ||
[*/
import Vue from 'vue'
import Vuex from 'vuex'
/*]
[|] || -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ||
[|]            Import Store Modules
[|] || -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ||
[*/
import aviary from './aviary.js'
import dialog from './dialog.js'
/*]
[|]
[*/
Vue.use(Vuex)
/*]
[|] || ========================================================||
[|]                 Define State Machine
[|] || ========================================================||
[*/
export default new Vuex.Store({
    state: {
        active_page: ''
    },
    mutations: {
        set_active_page (state, page_name) {
            if (typeof page_name === 'string') {
                this.state.active_page = page_name
            } else {
                // TODO: Handle this error (throw snackbar)
            }
        }
    },
    actions: {
    },
    getters: {
        active_page (state) {
            return state.active_page
        }
    },
    modules: {
        aviary,
        dialog
    }
})
/*]
[E] END
[*/
