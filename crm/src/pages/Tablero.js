import React, { useState } from 'react'
import Board from '../components/Board'
import Card from '../components/Card'
import '../App.css'
import initialData from '../data';
import { DragDropContext } from 'react-beautiful-dnd'

const Tablero = () => {
    const [state, setData] = useState(initialData)
    const tableros = [
        {
            id: 1,
            nombre: "propspectos",
            cards: [
                {
                    id: 1,
                    persona: {
                        nombre: 'Lizeth',
                        apellido: 'Aguilar'
                    }
                },
                {
                    id: 2,
                    persona: {
                        nombre: 'Joel',
                        apellido: 'Valdez'
                    }
                }
            ]
        },
        {
            id: 2,
            nombre: "contactados",
            cards: [
                {
                    id: 3,
                    persona: {
                        nombre: 'Pamela',
                        apellido: 'Rodriguez'
                    }
                },
                {
                    id: 4,
                    persona: {
                        nombre: 'Jose',
                        apellido: 'Juarez'
                    }
                }
            ]
        },
        {
            id: 3,
            nombre: "negociacion iniciada",
            cards: [
                {
                    id: 5,
                    persona: {
                        nombre: 'Adan',
                        apellido: 'Melgar'
                    }
                },
                {
                    id: 6,
                    persona: {
                        nombre: 'Juan',
                        apellido: 'Perez'
                    }
                }
            ]
        },
        {
            id: 4,
            nombre: "pendiente de cierre",
            cards: [
                {
                    id: 7,
                    persona: {
                        nombre: 'Pedro',
                        apellido: 'Suarez'
                    }
                },
                {
                    id: 8,
                    persona: {
                        nombre: 'Kenneth',
                        apellido: 'Angeles'
                    }
                }
            ]
        }
    ]
    const onDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return
        }
        const column = state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn = {
            ...column,
            taskIds: newTaskIds
        };
        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn
            },
        };
        setData(newState);
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {state.columnOrder.map(columnId => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
                return <Board key={column.id} column={column} tasks={tasks} />
            })}
        </DragDropContext>
        // <div className="flexbox">
        //     {tableros.map((element, index) => {
        //         console.log(element)
        //         return (
        //             <div className="board">
        //                 <h3 className="boardTitle">{element.nombre}</h3>
        //                 <Board id={element.id} className="boardContent">
        //                 {element.cards.map((element1, index) => {
        //                     return (
        //                         <Card id={'card' + element1.id} className="card" draggable="true" persona={element1.persona}>
        //                         </Card>
        //                     )
        //                 })}
        //             </Board>
        //             </div>

        //         )
        //     })}
        // </div>
    )
}

export default Tablero
