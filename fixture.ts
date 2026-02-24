import {test as base} from '@playwright/test';

type MyFixture = {
    helloWorld: string
    greatDay: string
}

type WorkerFixtur = {
    cupofCoffee: string
}

export const test = base.extend<MyFixture>({
    helloWorld: async ({}, use) => {
        const myWorld = 'Hello World'
        await use(myWorld)
        console.log('Good Morning')        
    },

    greatDay: async({helloWorld}, use) => {
        const myDay = helloWorld + '. what a lovely day today'
        await use(myDay) 
    },

    cupofCoffee: [async ({}, use, workerInfo) => {
        const cup = 'The cup of Coffee No: ' + workerInfo.workerIndex
        await use (cup)
    }, {scope: 'worker'}]

})