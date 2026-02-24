import {test} from '../fixture';

test('Where is my laptop', async({helloWorld, cupofCoffee}) => {
    console.log(helloWorld)
    console.log('Where is my laptop')
    console.log(cupofCoffee)
})

test('Overload', async({greatDay, cupofCoffee}) => {
    console.log(greatDay)
    console.log(cupofCoffee)
})