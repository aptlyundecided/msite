/*]
[|] General Functions
[*/
function random (min, max) {
    return Math.random() * (max - min) + min
}
/*]
[|]
[*/
const Bird = (bird_type) => {
    const new_bird = {
        age: 0,
        can_fly: true,
        name: '',
        set_age (min, max) {
            return random(min, max)
        },
        set_name (new_name) {
            if (typeof new_name === 'string') {
                this.name = new_name
            }
        },
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
