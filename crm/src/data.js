const initialData = {
    tasks: {
        'task-1': {
            id: 'task-1',
            content: {
                idCliente: 1,
                titulo: 'Joel Valdez',
                prioridad: 10,
                diasSinContacto: 2,
                porcentajeCierre: 50,
                interaciones: {
                    whatsapp: 2,
                    telefono: 5,
                    mensaje: 3
                }
            },
        },
        'task-2': {
            id: 'task-2',
            content: {
                idCliente: 2,
                titulo: 'Lizeth Aguilar',
                prioridad: 5,
                diasSinContacto: 5,
                porcentajeCierre: 80,
                interaciones: {
                    whatsapp: 3,
                    telefono: 6,
                    mensaje: 2
                }
            }
        },
        'task-3': {
            id: 'task-3',
            content: {
                idCliente: 3,
                titulo: 'Juan Perez',
                prioridad: 6,
                diasSinContacto: 1,
                porcentajeCierre: 20,
                interaciones: {
                    whatsapp: 8,
                    telefono: 2,
                    mensaje: 1
                }
            }
        },
        'task-4': {
            id: 'task-4',
            content: {
                idCliente: 4,
                titulo: 'Julian Rodriguez',
                prioridad: 1,
                diasSinContacto: 7,
                porcentajeCierre: 75,
                interaciones: {
                    whatsapp: 7,
                    telefono: 1,
                    mensaje: 10
                }
            }
        },
        'task-5': {
            id: 'task-5',
            content: {
                idCliente: 5,
                titulo: 'Jean Castelo',
                prioridad: 2,
                diasSinContacto: 10,
                porcentajeCierre: 90,
                interacciones: {
                    whatsapp: 15,
                    telefono: 3,
                    mensaje: 0
                }
            }
        },
        'task-6': {
            id: 'task-6',
            content: {
                idCliente: 6,
                titulo: 'Christian Martinez',
                prioridad: 10,
                diasSinContacto: 9,
                porcentajeCierre: 10,
                interaciones: {
                    whatsapp: 1,
                    telefono: 1,
                    mensaje: 1
                }
            }
        },
        'task-7': {
            id: 'task-7',
            content: {
                idCliente: 7,
                titulo: 'Rodrigo Almazan',
                prioridad: 3,
                diasSinContacto: 5,
                porcentajeCierre: 25,
                interaciones: {
                    whatsapp: 2,
                    telefono: 3,
                    mensaje: 1
                }
            }
        },
        'task-8': {
            id: 'task-8',
            content: {
                idCliente: 8,
                titulo:'Juan Castillo',
                prioridad:4,
                diasSinContacto:8,
                porcentajeCierre:40,
                interacciones:{
                    whatsapp:1,
                    telefono:8,
                    mensaje:8
                }
            }
        },
            'task-9': {
                id: 'task-9',
                content: {
                    idCliente:9,
                    titulo:'Angel Muñoz',
                    prioridad:1,
                    diasSinContacto:2,
                    porcentajeCierre:50,
                    interacciones:{
                        whatsapp:5,
                        telefono:10,
                        mensaje:8
                    }
                }
            },
            'task-10': {
                id: 'task-10',
                content: {
                    idCliente:10,
                    titulo:'Jose Alvarez',
                    prioridad:6,
                    diasSinContacto:3,
                    porcentajeCierre:80,
                    interacciones:{
                        whatsapp:8,
                        telefono:3,
                        mensaje:1
                    }
                }
            },
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
            'column-3': {
                id: 'column-3',
                title: 'Negociacion iniciada',
                taskIds: [
                    'task-5',
                    'task-6',
                ]
            },
            'column-4': {
                id: 'column-4',
                title: 'Pendientes de cierre',
                taskIds: [
                    'task-9',
                    'task-10',
                ]
            },
        },
        columnOrder: ['column-1', 'column-2',
            'column-3', 'column-4'
        ]
    };
    export default initialData;