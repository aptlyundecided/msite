/*]
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=||
[|]     Program:        dialog.js
[|]     Description:    module for managing the state of the primary dialog box for
[|]                     the application
[|]     Born On:        22 July 2018
[|]     Author:         Alex Wilson
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=||
[*/
/*]
[|]
[*/
const dialog = {
    namespaced: true,
    state: {
        title: '',
        subtitle: '',
        p1: '',
        p2: '',
        p3: '',
        p4: '',
        trigger_dialog: false
    },
    actions: {
        activate_dialog ({state, commit, rootState}, data) {
            if (state.trigger_dialog === false) {
                state.trigger_dialog = true
                /*]
                [|]
                [*/
                commit('load_dialog_pane', data)
            }
        },
        deactivate_dialog ({state}) {
            if (state.trigger_dialog === true) {
                state.trigger_dialog = false
            }
        }
    },
    mutations: {
        load_dialog_pane (state, data) {
            state.title = data.title
            state.subtitle = data.subtitle
            console.log(data)
            state.p1 = data.p1.join('')
            state.p2 = data.p2.join('')
            state.p3 = data.p3.join('')
            state.p4 = data.p4.join('')
        }
    },
    getters: {
        p1 (state) {
            return state.p1
        },
        p2 (state) {
            return state.p2
        },
        p3 (state) {
            return state.p3
        },
        p4 (state) {
            return state.p4
        },
        subtitle (state) {
            return state.subtitle
        },
        title (state) {
            return state.title
        },
        trigger_dialog (state) {
            return state.trigger_dialog
        }
    }
}
/*]
[|] MODULE
[*/
export default dialog
/*]
[E] END
[*/
