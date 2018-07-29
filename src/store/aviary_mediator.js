/*]
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=||
[|]     Program:        aviary_mediator.js
[|]     Description:    Demonstrate the mediator design pattern
[|]     Born On:        29 July 2018
[|]     Author:         Alex Wilson
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=||
[*/
const aviary_mediator = {
    namespaced: true,
    state: {
        selected_bird_class_name: ''
    },
    actions: {

    },
    mutations: {
        update_selected_bird_class_name (state, new_class_name) {
            if (typeof new_class_name === 'string') {
                state.selected_bird_class_name = new_class_name
            }
        }
    },
    getters: {
        selected_bird (state, getters, rootState) {
            return rootState.aviary.selected_bird
        },
        selected_bird_id (state, getters, rootState) {
            if (typeof rootState.aviary.selected_bird.id !== 'undefined') {
                return rootState.aviary.selected_bird.id
            }
        },
        selected_bird_classname (state) {
            return state.selected_bird_class_name
        }
    }
}
/*]
[|] MODULE
[*/
export default aviary_mediator
/*]
[E] END
[*/
    