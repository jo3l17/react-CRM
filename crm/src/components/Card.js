import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useStyles from '../styles/Card';
import { List, ListItem, ListItemIcon, Divider, Grid, Button, CircularProgress } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Link from 'next/link'
import DeleteIcon from '@material-ui/icons/Delete';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EditCard from './EditCard';
import GavelIcon from '@material-ui/icons/Gavel';
function Card(props) {
  function tiempoSinContacto() {
    if (props.task.content.tiempoSinContactoNumber) {
      return (
        <div style={{ color: ((props.task.content.tiempoSinContactoNumber <= 2) ? 'green' : (props.task.content.tiempoSinContactoNumber <= 6 ? 'orange' : 'red')) }}>
          {props.task.content.tiempoSinContacto}
        </div>
      )
    } else {
      return <div style={{height:20}}></div>
    }
  }
  // const {renderChange} = props.renderChange
  const isDragDisabled = props.task.id === 'asd';
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = result => {
    if (result.message === 'OK') {
      props.renderChange(result.content)
    }
    setOpenDialog(false);
  };
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
          <EditCard open={openDialog} handleClose={handleClose} data={props.task} modalId={props.task.id} />
          <div className={classes.container}>
            <List className={classes.leftList}>
              <ListItem className={classes.leftListItem}>
                <ListItemIcon className={classes.leftListItemIcon}>
                  <Button variant="outlined" className={`${classes.leftListButton} ${classes.darkButton}`} onClick={handleClickOpen}>
                    <EditIcon className={classes.leftListIcon} />
                  </Button>
                </ListItemIcon>
              </ListItem>
              <ListItem className={classes.leftListItem}>
                <ListItemIcon className={classes.leftListItemIcon}>
                  <Button variant="outlined" className={`${classes.leftListButton} ${classes.darkButton}`}>
                    <GavelIcon className={classes.leftListIcon} />
                  </Button>
                </ListItemIcon>
              </ListItem>
            </List>
            <div className={classes.cardInfo}>
              <div className={classes.title}>
                <Link href="/usuario/[props.task.content.idCliente]" as={`/usuario/${props.task.content.idCliente}`}>
                  <a className={classes.linkUsuario}>
                    {props.task.content.titulo}
                  </a>
                </Link>
                <div>
                  <div className={classes.prioridad} style={{ backgroundColor: props.task.content.prioridadColor, color: props.task.content.prioridadColorText }}>
                    <div>
                      {props.task.content.prioridad}
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.porcentajeWrapper}>
                {tiempoSinContacto()}
                <div className={classes.porcentajeCierre}>{props.task.content.porcentajeCierre}</div>
                <CircularProgress variant="static" value={props.task.content.porcentajeCierre} style={{ color: props.task.content.porcentajeColor }} className={classes.porcentaje} size={24} thickness={8} />
              </div>
            </div>
          </div>
          <div className={classes.interacciones}>
            <div className={classes.interaccionesButtons}>
              <Button variant="outlined" className={`${classes.interaccionesButton} ${classes.darkButton}`}>
                {props.task.content.interacciones.telefono} &nbsp;<PhoneIcon />
              </Button>
            </div>
            <div className={classes.interaccionesButtons}>
              <Button variant="outlined" className={`${classes.interaccionesButton} ${classes.darkButton}`}>
                {props.task.content.interacciones.whatsapp} &nbsp;<WhatsAppIcon />
              </Button>
            </div>
            <div className={classes.interaccionesButtons}>
              <Button variant="outlined" className={`${classes.interaccionesButton} ${classes.darkButton}`}>
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
