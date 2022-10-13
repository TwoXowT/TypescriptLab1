interface initialStateProps{
    taskList: Task[];
    allTags: string[]
}


export const initialState: initialStateProps = {
    taskList: [
        {
            id: 0,
            text: 'Убрать дом',
            done: true,
            tags: ['дом'],
            description: '',
        },
        {
            id: 1,
            text: 'Сделать ИИН',
            done: false,
            tags: ['документы'],
            description: '',
        },
        {
            id: 2,
            text: 'Канализацию почичтить',
            done: true,
            tags: ['дом','работа'],
            description: '',
        },
        {
            id: 3,
            text: 'Сделать резюме',
            done: false,
            tags: ['работа'],
            description: '',
        },
        {
            id: 4,
            text: 'Сыграть в шахматы',
            done: false,
            tags: ['досуг'],
            description: '',
        }


    ],

    allTags:['работа','досуг','дом','семья','документы']

}