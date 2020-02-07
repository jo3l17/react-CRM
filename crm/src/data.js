const initialData = {
    tasks: {
        'task-1': {
            id: 'task-1',
            content: {
                idCliente: 1,
                titulo: 'Joel Valdez',
                prioridad: 10,
                tiempoSinContacto: '2 días sin contactar',
                porcentajeCierre: 50,
                porcentajeColor:'#b1fc00',
                interacciones: {
                    whatsapp: 2,
                    telefono: 5,
                    correo: 3
                }
            },
        },
        'task-2': {
            id: 'task-2',
            content: {
                idCliente: 2,
                titulo: 'Lizeth Aguilar',
                prioridad: 5,
                tiempoSinContacto: '5 días sin contactar',
                porcentajeCierre: 80,
                porcentajeColor:'#66fe00',
                interacciones: {
                    whatsapp: 3,
                    telefono: 6,
                    correo: 2
                }
            }
        },
        'task-3': {
            id: 'task-3',
            content: {
                idCliente: 3,
                titulo: 'Juan Perez',
                prioridad: 6,
                tiempoSinContacto: '10 horas sin contactar',
                porcentajeCierre: 20,
                porcentajeColor:'#f3fa00',
                interacciones: {
                    whatsapp: 8,
                    telefono: 2,
                    correo: 1
                }
            }
        },
        'task-4': {
            id: 'task-4',
            content: {
                idCliente: 4,
                titulo: 'Julian Rodriguez',
                prioridad: 1,
                tiempoSinContacto: '10 días sin contactar',
                porcentajeCierre: 75,
                porcentajeColor:'#edfb00',
                interacciones: {
                    whatsapp: 7,
                    telefono: 1,
                    correo: 10
                }
            }
        },
        'task-5': {
            id: 'task-5',
            content: {
                idCliente: 5,
                titulo: 'Jean Castelo',
                prioridad: 2,
                tiempoSinContacto: '20 horas sin contactar',
                porcentajeCierre: 90,
                porcentajeColor: '#42ff00',
                interacciones: {
                    whatsapp: 15,
                    telefono: 3,
                    correo: 0
                }
            }
        },
        'task-6': {
            id: 'task-6',
            content: {
                idCliente: 6,
                titulo: 'Christian Martinez',
                prioridad: 10,
                tiempoSinContacto: '5 días sin contactar',
                porcentajeCierre: 10,
                porcentajeColor:'#f9f900',
                interacciones: {
                    whatsapp: 1,
                    telefono: 1,
                    correo: 1
                }
            }
        },
        'task-7': {
            id: 'task-7',
            content: {
                idCliente: 7,
                titulo: 'Rodrigo Almazan',
                prioridad: 3,
                tiempoSinContacto: '7 días sin contactar',
                porcentajeCierre: 25,
                porcentajeColor:'#edfb00',
                interacciones: {
                    whatsapp: 2,
                    telefono: 3,
                    correo: 1
                }
            }
        },
        'task-8': {
            id: 'task-8',
            content: {
                idCliente: 8,
                titulo:'Juan Castillo',
                prioridad:4,
                tiempoSinContacto:'3 días sin contactar',
                porcentajeCierre:40,
                porcentajeColor:'#c9fc00',
                interacciones:{
                    whatsapp:1,
                    telefono:8,
                    correo:8
                }
            }
        },
            'task-9': {
                id: 'task-9',
                content: {
                    idCliente:9,
                    titulo:'Angel Muñoz',
                    prioridad:1,
                    tiempoSinContacto:'20 horas sin contactar',
                    porcentajeCierre:50,
                    porcentajeColor:'#b1fc00',
                    interacciones:{
                        whatsapp:5,
                        telefono:10,
                        correo:8
                    }
                }
            },
            'task-10': {
                id: 'task-10',
                content: {
                    idCliente:10,
                    titulo:'Jose Alvarez',
                    prioridad:6,
                    tiempoSinContacto:'8 días sin contactar',
                    porcentajeCierre:80,
                    porcentajeColor:'#66fe00',
                    interacciones:{
                        whatsapp:8,
                        telefono:3,
                        correo:1
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