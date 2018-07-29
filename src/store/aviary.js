/*]
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=||
[|]     Program:        aviary.js
[|]     Description:    show design patterns via an aviary (? IDK YET ?)
[|]     Born On:        22 July 2018
[|]     Author:         Alex Wilson
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=||
[*/
import birds from './birds'
/*]
[|]
[*/
const aviary = {
    namespaced: true,
    state: {
        BirdFactory: birds.BirdFactory,
        bird_circles: {
            flamingos: [],
            penguins: [],
            toucans: []
        },
        bird_limit: 10,
        flamingos: [],
        flamingo_limit_reached: false,
        penguins: [],
        penguin_limit_reached: false,
        selected_bird: {},
        toucans: [],
        toucan_limit_reached: false,
        uncategorized_birds: []
    },
    actions: {
        handle_bird_limits ({state, commit, rootState}, limit) {
            commit('set_birds_limit', limit)
            commit('check_bird_allowance')
        }
    },
    mutations: {
        /*]
        [|] TODO:
        [|] 01: Extract giant switch case?  Or should it be left monolithic?  Decide first.
        [|] 02: carry out ^ decision.
        [*/
        add_bird (state, bird_type) {
            let new_bird = {}
            /*]
            [|]
            [*/
            if (typeof bird_type === 'string') {
                /*]
                [|]
                [*/
                switch (bird_type) {
                    case 'flamingo':
                        if (state.flamingos.length < state.bird_limit - 1) {
                            new_bird = state.BirdFactory('flamingo')
                            state.flamingos.push(new_bird)
                        }
                        break


                    case 'penguin':
                        if (state.penguins.length < state.bird_limit - 1) {
                            new_bird = state.BirdFactory('penguin')
                            state.penguins.push(new_bird)
                        }
                        break


                    case 'toucan':
                        if (state.toucans.length < state.bird_limit - 1) {
                            new_bird = state.BirdFactory('toucan')
                            state.toucans.push(new_bird)
                        }
                        break


                    default:
                        console.warn('Unknown Bird Type')
                }
            } else {
                // TODO: Throw nasty bird error
            }
        },
        check_bird_allowance (state) {
            /*]
            [|]
            [*/
            if (state.flamingos.length >= state.bird_limit) {
                state.flamingo_limit_reached = true
            } else if (state.flamingos.length < state.bird_limit) {
                state.flamingo_limit_reached = false
            }
            /*]
            [|]
            [*/
            if (state.penguins.length >= state.bird_limit) {
                state.penguin_limit_reached = true
            } else if (state.penguins.length < state.bird_limit) {
                state.penguin_limit_reached = false
            }
            /*]
            [|]
            [*/
            if (state.toucans.length > state.bird_limit) {
                state.toucan_limit_reached = true
            } else if (state.toucans.length < state.bird_limit) {
                state.toucan_limit_reached = false
            }
        },
        set_birds_limit (state, limit) {
            state.bird_limit = limit
        },
        update_bird_circles (state, bird_arrs) {
            state.bird_circles = bird_arrs
        },
        update_bird_name (state, new_name) {
            state.selected_bird.name = new_name
            /*]
            [|]
            [*/
            if (typeof state.selected_bird.bird_type !== 'undefined') {
                state[state.selected_bird.bird_type.toLowercase() + 's'][state.selected_bird.id]
            }
        },
        update_selected_bird (state, args) {
            const list_name = args[0]
            const bird_svg_object = args[1]
            /*]
            [|] Set the selected bird in the state machine, when click event happens.
            [*/
            state.selected_bird = state[list_name][bird_svg_object.id]
            state.selected_bird.id = bird_svg_object.id
        },
    },
    getters: {
        bird_circles (state) {
            return state.bird_circles
        },
        bird_limit (state) {
            return state.bird_limit
        },
        flamingos (state) {
            return state.flamingos
        },
        penguins (state) {
            return state.penguins
        },
        selected_bird (state) {
            return state.selected_bird
        },
        toucans (state) {
            return state.toucans
        },
        total_flamingos (state) {
            return state.flamingos.length
        },
        total_penguins (state) {
            return state.penguins.length
        },
        total_toucans (state) {
            return state.toucans.length
        }
    }
}
/*]
[|] MODULE
[*/
export default aviary
/*]
[E] END
[*/
