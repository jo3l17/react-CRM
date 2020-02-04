const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Joel Valdez' },
        'task-2': { id: 'task-2', content: 'Lizeth Aguilar' },
        'task-3': { id: 'task-3', content: 'Juan Perez' },
        'task-4': { id: 'task-4', content: 'Julian Rodriguez' }
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
        'column-2':{
            id:'column-2',
            title:'Contactados',
            taskIds:[]
        },
        'column-3':{
            id:'column-3',
            title:'Negociacion iniciada',
            taskIds:[]
        },
        'column-4':{
            id:'column-4',
            title:'Pendientes de cierre',
            taskIds:[]
        }
    },
    columnOrder:['column-1','column-2','column-3','column-4']
};
export default initialData;