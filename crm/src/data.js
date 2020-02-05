const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Joel Valdez' },
        'task-2': { id: 'task-2', content: 'Lizeth Aguilar' },
        'task-3': { id: 'task-3', content: 'Juan Perez' },
        'task-4': { id: 'task-4', content: 'Julian Rodriguez' },
        'task-5': { id: 'task-5', content: 'Jean Castelo' },
        'task-6': { id: 'task-6', content: 'Christian Martinez' },
        'task-7': { id: 'task-7', content: 'Rodrigo Almazan' },
        'task-8': { id: 'task-8', content: 'Juan Castillo' },
        'task-9': { id: 'task-9', content: 'Angel Muñoz' },
        'task-10': { id: 'task-10', content: 'Jose Alvarez' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Prospectos',
            taskIds: [
                'task-1',
                'task-2',
                'task-3',
                'task-4'
            ]
        },
        'column-2': {
            id: 'column-2',
            title: 'Contactados',
            taskIds: [
                'task-7',
                'task-8'
            ]
        },
        'column-3':{
            id:'column-3',
            title:'Negociacion iniciada',
            taskIds:[
                'task-5',
                'task-6',
            ]
        },
        'column-4':{
            id:'column-4',
            title:'Pendientes de cierre',
            taskIds:[
                'task-9',
                'task-10',
            ]
        },
    },
    columnOrder: ['column-1', 'column-2',
        'column-3','column-4'
    ]
};
export default initialData;