import Bird from './bird.js'
/*]
[|]
[*/
const Toucan = () => {
    let state = new Bird('Toucan')
    /*]
    [|]
    [*/
    state.color = 'Black, Orange, and Green'
    state.height = state.set_height(1.8, 2.2)
    state.weight = state.set_weight(1.3, 1.8)
    /*]
    [|]
    [*/
    return state
}
/*]
[|]
[*/
export default Toucan
