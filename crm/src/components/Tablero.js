import React, { useState } from 'react'
import Board from './Board'
import axios from 'axios';
import Card from './Card'
// import '../App.css'
import initialData from '../data';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import useStyles from '../styles/Tablero'
import { withStyles, Button } from '@material-ui/core';
import { BackUrl } from '../utilities/const';
import AddIcon from '@material-ui/icons/Add'
class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index, sortCards, renderChange, addCard, deleteCard } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Board
      column={column}
      tasks={tasks}
      index={index}
      sortCards={sortCards}
      renderChange={renderChange}
      addCard={addCard}
      deleteCard={deleteCard}
    // isDropDisabled={isDropDisabled}
    />
  }
}
class Tablero extends React.Component {
  state = initialData
  onDragStart = start => {
    // const homeIndex = state.columnOrder.indexOf(start.source.droppableId);
    // setHomeIndex(homeIndex);
    // document.body.style.color = "orange"
  }
  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0
    // document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`
  }
  sortCards = columnId => {
    const column = this.state.columns[columnId]
    const taskMap = this.state.tasks
    const taskOrdered = column.taskIds.map(taskId => taskMap[taskId])
    taskOrdered.sort((a, b) => (a.content.prioridad - b.content.prioridad))
    const newTaskIds = taskOrdered.map((task) => task.id)
    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      },
    };
    this.setState(newState);
    return
  }
  onDragEnd = result => {
    // setHomeIndex(null)
    // document.body.style.color = "inherit"
    // document.body.style.backgroundColor = `inherit`
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return
    }
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return
    }
    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      }
      this.setState(newState);
      return;
    }
    // const column = this.state.columns[source.droppableId];
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        },
      };
      this.setState(newState);
      return
    }
    // Moving from one list to another
    const startTasksIds = Array.from(start.taskIds);
    startTasksIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTasksIds,
    };
    const finishTasksIds = Array.from(finish.taskIds);
    finishTasksIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTasksIds,
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  }
  addCard = result => {
    const column = this.state.columns[result.id]
    const tasks = this.state.tasks
    const lastTaskId = tasks[Object.keys(tasks)[Object.keys(tasks).length - 1]] ? tasks[Object.keys(tasks)[Object.keys(tasks).length - 1]].id : 'task-1'
    const newId = parseInt(lastTaskId.split('-')[1]) + 1
    const newCard = {
      id: `task-${newId}`,
      content: {
        idCliente: newId,
        tipo: result.content.tipo,
        titulo: result.content.titulo,
        nombres: result.content.nombres,
        empresa: result.content.empresa,
        genero: result.content.genero,
        ruc: result.content.ruc,
        apellidos: result.content.apellidos,
        prioridad: result.content.prioridad,
        prioridadColor: 'yellow',
        prioridadColorText: 'black',
        tiempoSinContacto: '8 días sin contactar',
        tiempoSinContactoNumber: null,
        fechaContacto: result.content.fechaContacto,
        porcentajeCierre: result.content.porcentajeCierre,
        porcentajeColor: '#66fe00',
        interacciones: {
          whatsapp: 0,
          telefono: 0,
          correo: 0
        }
      }
    }
    const newTaskIds = column.taskIds
    newTaskIds.push(newCard.id)
    const newTasks = {
      ...this.state.tasks,
      [newCard.id]: newCard
    }
    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };
    const newState = {
      tasks: newTasks,
      columns: {
        ...this.state.columns,
        [result.id]: newColumn
      },
    }
    this.setState(newState)
  }
  renderChange = result => {
    const newTask = result
    const newState = {
      ...this.state,
      tasks: {
        ...this.state.tasks,
        [result.id]: newTask
      },
    };
    this.setState(newState);
  }
  deleteCard = result => {
    const newTasks = this.state.tasks
    delete newTasks[result.taskId];
    const column = this.state.columns[result.columnId]
    const newTasksIds = column.taskIds
    const index = newTasksIds.indexOf(result.taskId)
    newTasksIds.splice(index, 1);
    const newColumn = {
      ...column,
      taskIds: newTasksIds
    }
    const newState = {
      tasks: newTasks,
      columns: {
        ...this.state.columns,
        [result.columnId]: newColumn
      }
    }
    this.setState(newState)
  }
  componentDidMount() {
    axios.get(BackUrl + 'tableros/obtener/1').then(res => {
      this.setState(res.data.content);
    }).catch(error => {
      console.log(error)
    });
  }
  render() {
    const { classes } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column">
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.container}>
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                // const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                // const isDropDisabled = index<homeIndex
                return (<InnerList
                  key={column.id}
                  column={column}
                  taskMap={this.state.tasks}
                  index={index}
                  sortCards={this.sortCards}
                  renderChange={this.renderChange}
                  addCard={this.addCard}
                  deleteCard={this.deleteCard}
                />);
              })}
              {provided.placeholder}
              {/* <Button className={classes.addButton}>
                <AddIcon />
              </Button> */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default withStyles(useStyles)(Tablero);