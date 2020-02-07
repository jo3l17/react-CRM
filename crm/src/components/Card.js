import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useStyles from '../styles/Card';
import { List, ListItem, ListItemIcon, Divider, Grid, Button, CircularProgress } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function Card(props) {
  const isDragDisabled = props.task.id === 'asd';
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  return (
    <Draggable draggableId={props.task.id}
      index={props.index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${snapshot.isDragging ? classes.dragging : ''} ${classes.card} ${isDragDisabled ? classes.dragDisabled : ''}`}
        >
          {/* <div className={classes.handle} {...provided.dragHandleProps}>
          </div> */}
          <div className={classes.container}>
            <List className={classes.leftList}>
              <ListItem button className={classes.leftListItem}>
                <ListItemIcon className={classes.leftListIcon}>
                  <AccountCircleIcon />
                </ListItemIcon>
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem button className={classes.leftListItem}>
                <ListItemIcon className={classes.leftListIcon}>
                  <EditIcon />
                </ListItemIcon>
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem button className={classes.leftListItem}>
                <ListItemIcon className={classes.leftListIcon}>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
            </List>
            <div className={classes.cardInfo}>
              <div className={classes.title}>
                {props.task.content.titulo}
              </div>
              <div className={classes.porcentajeWrapper}>
                <div>
                  {props.task.content.tiempoSinContacto}
                </div>
                <div className={classes.porcentajeCierre}>{props.task.content.porcentajeCierre}</div>
                <CircularProgress variant="static" value={props.task.content.porcentajeCierre} style={{ color: props.task.content.porcentajeColor }} className={classes.porcentaje} size={24} thickness={8} />
              </div>
            </div>
          </div>
          <div className={classes.interacciones}>
            <div className={classes.interaccionesButtons}>
              <Button>
                {props.task.content.interacciones.telefono} &nbsp;<PhoneIcon />
              </Button>
            </div>
            <div className={classes.interaccionesButtons}>
              <Button>
                {props.task.content.interacciones.whatsapp} &nbsp;<WhatsAppIcon />
              </Button>
            </div>
            <div className={classes.interaccionesButtons}>
              <Button>
                {props.task.content.interacciones.correo} &nbsp;<MailOutlineIcon />
              </Button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card
