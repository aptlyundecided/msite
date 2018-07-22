import Bird from './bird.js'
/*]
[|]
[*/
const Penguin = () => {
    let state = new Bird('Penguin')
    /*]
    [|]
    [*/
    state.color = 'black and white'
    state.height = state.set_height(3.6, 4.3)
    state.weight = state.set_weight(43, 53)
    state.can_fly = false
    /*]
    [|]
    [*/
    return state
}
/*]
[|]
[*/
export default Penguin
