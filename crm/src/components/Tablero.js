import React, { useState } from 'react'
import Board from './Board'
import axios from 'axios';
import Card from './Card'
// import '../App.css'
import initialData from '../data';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import useStyles from '../styles/Tablero'
import { withStyles, Button, LinearProgress } from '@material-ui/core';
import { BackUrl } from '../utilities/const';
class InnerList extends React.PureComponent {
  render() {
    const { column, cardMap, index, sortCards, renderChange, addCard, deleteCard } = this.props;
    const cards = column.cardIds.map(cardId => cardMap[cardId]);
    return <Board
      column={column}
      cards={cards}
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
    const opacity = destination ? destination.index / Object.keys(this.state.cards).length : 0
    // document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`
  }
  sortCards = columnId => {
    const column = this.state.columns[columnId]
    const cardMap = this.state.cards
    const cardOrdered = column.cardIds.map(cardId => cardMap[cardId])
    cardOrdered.sort((a, b) => (a.content.prioridad - b.content.prioridad))
    const newcardIds = cardOrdered.map((card) => card.id)
    const newColumn = {
      ...column,
      cardIds: newCardIds
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
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        cardIds: newCardIds
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
    const startCardsIds = Array.from(start.cardIds);
    const idCard = parseInt(startCardsIds[source.index].split('-')[1])
    const idColumn = parseInt(finish.id.split('-')[1])
    startCardsIds.splice(source.index, 1);
    const newStart = {
      ...start,
      cardIds: startCardsIds,
    };
    const finishCardsIds = Array.from(finish.cardIds);
    finishCardsIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cardIds: finishCardsIds,
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    let newOrder = {
      id: idCard,
      idColumna: idColumn
    }
    console.log(newOrder);
    axios.post(BackUrl + 'prospectos/cambiar_estado', newOrder).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
    this.setState(newState);
  }
  addCard = result => {
    console.log(result);
    const column = this.state.columns[result.id]
    // const cards = this.state.cards
    // const lastCardId = cards[Object.keys(cards)[Object.keys(cards).length - 1]] ? cards[Object.keys(cards)[Object.keys(cards).length - 1]].id : 'card-1'
    // const newId = parseInt(lastCardId.split('-')[1]) + 1
    const newCard = result.content
    //   id: `card-${newId}`,
    //   content: {
    //     idCliente: newId,
    //     tipo: result.content.tipo,
    //     titulo: result.content.titulo,
    //     nombres: result.content.nombres,
    //     empresa: result.content.empresa,
    //     genero: result.content.genero,
    //     ruc: result.content.ruc,
    //     apellidos: result.content.apellidos,
    //     prioridad: result.content.prioridad,
    //     prioridadColor: result.content.prioridadColor,
    //     prioridadColorText: result.content.prioridadColor,
    //     tiempoSinContacto: result.content.tiempoSinContacto,
    //     tiempoSinContactoNumber: result.content.tiempoSinContactoNumber,
    //     fechaContacto: result.content.fechaContacto,
    //     porcentajeCierre: result.content.porcentajeCierre,
    //     porcentajeColor: result.content.porcentajeColor,
    //     interacciones: {
    //       whatsapp: 0,
    //       telefono: 0,
    //       correo: 0
    //     }
    //   }
    // }
    const newCardIds = column.cardIds
    newCardIds.push(newCard.id)
    const newCards = {
      ...this.state.cards,
      [newCard.id]: newCard
    }
    const newColumn = {
      ...column,
      cardIds: newCardIds
    };
    const newState = {
      cards: newCards,
      columns: {
        ...this.state.columns,
        [result.id]: newColumn
      },
    }
    this.setState(newState)
  }
  renderChange = result => {
    const newCard = result
    const newState = {
      ...this.state,
      cards: {
        ...this.state.cards,
        [result.id]: newCard
      },
    };
    this.setState(newState);
  }
  deleteCard = result => {
    const newCards = this.state.cards
    delete newCards[result.cardId];
    const column = this.state.columns[result.columnId]
    const newCardsIds = column.cardIds
    const index = newCardsIds.indexOf(result.cardId)
    newCardsIds.splice(index, 1);
    const newColumn = {
      ...column,
      cardIds: newCardsIds
    }
    const newState = {
      Cards: newCards,
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
    if (JSON.stringify(this.state) == '{}') {
      return (<LinearProgress variant="query" />)
    } else {
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
                  // const cards = column.cardIds.map(cardId => this.state.cards[cardId]);
                  // const isDropDisabled = index<homeIndex
                  return (<InnerList
                    key={column.id}
                    column={column}
                    cardMap={this.state.cards}
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
}

export default withStyles(useStyles)(Tablero);