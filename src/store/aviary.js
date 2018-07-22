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
        flamingos: [],
        penguins: [],
        uncategorized_birds: []
    },
    actions: {
    },
    mutations: {
        add_bird (state, bird_type) {
            let new_bird = {}
            if (typeof bird_type === 'string') {
                /*]
                [|]
                [*/
                switch (bird_type) {
                    case 'flamingo':
                        new_bird = state.BirdFactory('flamingo')
                        state.flamingos.push(new_bird)
                        break


                    case 'penguin':
                        new_bird = state.BirdFactory('penguin')
                        state.penguins.push(new_bird)
                        break


                    default:
                        console.warn('Unknown Bird Type')
                }
            } else {
                // TODO: Throw nasty bird error
            }

            console.log(state.flamingos)
            console.log(state.penguins)
        }
    },
    getters: {
        total_flamingos (state) {
            return state.flamingos.length
        },
        total_penguins (state) {
            return state.penguins.length
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
