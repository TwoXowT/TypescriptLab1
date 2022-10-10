export const initialState = {
    taskList: [
        {
            id: 0,
            text: 'clean room',
            done: true,
            tags: ['home'],
            description: '',
        },
        {
            id: 1,
            text: 'Start learn Typescript 2',
            done: false,
            tags: ['study'],
            description: '',
        },
        {
            id: 2,
            text: 'to wash the dishes',
            done: true,
            tags: ['home', 'family','work'],
            description: '',
        },
        {
            id: 3,
            text: 'create summary',
            done: false,
            tags: ['work'],
            description: '',
        },
        {
            id: 4,
            text: '2rbina 2rista - moralfuck 3',
            done: false,
            tags: ['leisure'],
            description: '',
        }


    ],

    allTags:['work','leisure','home','family','study']

}