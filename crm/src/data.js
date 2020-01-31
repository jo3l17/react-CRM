const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'gaaaaaa-1' },
        'task-2': { id: 'task-2', content: 'gaaaaaa-2' },
        'task-3': { id: 'task-3', content: 'gaaaaaa-3' },
        'task-4': { id: 'task-4', content: 'gaaaaaa-4' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'prospectos',
            taskIds: [
                'task-1',
                'task-2',
                'task-3',
                'task-4'
            ]
        }
    },
    columnOrder:['column-1']
};
export default initialData;