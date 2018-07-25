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
        bird_limit: 10,
        flamingos: [],
        flamingo_limit_reached: false,
        penguins: [],
        penguin_limit_reached: false,
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
        }
    },
    getters: {
        bird_limit (state) {
            return state.bird_limit
        },
        flamingos (state) {
            return state.flamingos
        },
        penguins (state) {
            return state.penguins
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
