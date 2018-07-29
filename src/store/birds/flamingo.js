import Bird from './bird.js'
/*]
[|]
[*/
const Flamingo = () => {
    let state = new Bird('Flamingo')
    /*]
    [|]
    [*/
    state.color = 'pink'
    state.height = state.set_height(3.6, 4.9)
    state.weight = state.set_weight(4.4, 8.8)
    state.age = state.set_age(1.5, 60.0)
    /*]
    [|]
    [*/
    return state
}
/*]
[|]
[*/
export default Flamingo
