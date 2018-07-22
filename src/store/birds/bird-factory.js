import Flamingo from './flamingo.js'
import Penguin from './penguin.js'
/*]
[|]
[*/
const BirdFactory = (bird_type) => {
    let new_bird = {}
    /*]
    [|]
    [*/
    if (typeof bird_type === 'string') {
        switch (bird_type) {
            case 'flamingo':
                new_bird = new Flamingo()
                break


            case 'penguin':
                new_bird = new Penguin()
                break

                
            default:
                console.log('bird type not handled')
        }
    }
    /*]
    [|]
    [*/
    return new_bird
}
/*]
[|]
[*/
export default BirdFactory
