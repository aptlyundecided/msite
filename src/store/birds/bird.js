/*]
[|] General Functions
[*/
function random (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
/*]
[|]
[*/
const Bird = (bird_type) => {
    const new_bird = {
        can_fly: true,
        set_height (min, max) {
            return random(min, max)
        },
        set_weight (min, max) {
            return random(min, max)
        }
    }
    /*]
    [|]
    [*/
    if (typeof bird_type === 'string') {
        new_bird.type = bird_type
    } else {
        new_bird.type = 'unknown'
    }
    /*]
    [|]
    [*/
    return new_bird
}
/*]
[|]
[*/
export default Bird
