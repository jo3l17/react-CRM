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
import DeleteCloseCard from './DeleteCloseCard';
function Card(props) {
  function tiempoSinContacto() {
    if (props.card.content.tiempoSinContactoNumber != null) {
      return (
        <div style={{ color: ((props.card.content.tiempoSinContactoNumber <= 2) ? 'green' : (props.card.content.tiempoSinContactoNumber <= 6 ? 'orange' : 'red')) }}>
          {props.card.content.tiempoSinContacto}
        </div>
      )
    } else {
      return <div style={{ height: 20 }}></div>
    }
  }
  // const {renderChange} = props.renderChange
  const isDragDisabled = props.card.id === 'asd';
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
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);
  const handleClickOpenDelete = () => {
    setOpenDialogDelete(true);
  };
  const handleCloseDelete = result => {
    if (result = 'deleted') {
      props.deleteCard(props.card.id)
    }
    setOpenDialogDelete(false);
  };
  return (
    <Draggable draggableId={props.card.id}
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
          <EditCard open={openDialog} handleClose={handleClose} data={props.card} modalId={props.card.id} />
          <DeleteCloseCard open={openDialogDelete} handleClose={handleCloseDelete} data={props.card} modalId={props.card.id} />
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
                  <Button variant="outlined" className={`${classes.leftListButton} ${classes.darkButton}`} onClick={handleClickOpenDelete}>
                    <GavelIcon className={classes.leftListIcon} />
                  </Button>
                </ListItemIcon>
              </ListItem>
            </List>
            <div className={classes.cardInfo}>
              <div className={classes.title}>
                <Link href="/usuario/[props.card.content.idCliente]" as={`/usuario/${props.card.content.idCliente}`}>
                  <a className={classes.linkUsuario}>
                    {props.card.content.titulo}
                  </a>
                </Link>
                <div>
                  <div className={classes.prioridad} style={{ backgroundColor: props.card.content.prioridadColor, color: props.card.content.prioridadColorText }}>
                    <div>
                      {props.card.content.prioridad}
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.porcentajeWrapper}>
                {tiempoSinContacto()}
                <div className={classes.porcentajeCierre}>{props.card.content.porcentajeCierre}</div>
                <CircularProgress variant="static" value={props.card.content.porcentajeCierre} style={{ color: props.card.content.porcentajeColor }} className={classes.porcentaje} size={24} thickness={8} />
              </div>
            </div>
          </div>
          <div className={classes.interacciones}>
            <div className={classes.interaccionesButtons}>
              <Button variant="outlined" className={`${classes.interaccionesButton} ${classes.darkButton}`}>
                {props.card.content.interacciones.telefono} &nbsp;<PhoneIcon />
              </Button>
            </div>
            <div className={classes.interaccionesButtons}>
              <Button variant="outlined" className={`${classes.interaccionesButton} ${classes.darkButton}`}>
                {props.card.content.interacciones.whatsapp} &nbsp;<WhatsAppIcon />
              </Button>
            </div>
            <div className={classes.interaccionesButtons}>
              <Button variant="outlined" className={`${classes.interaccionesButton} ${classes.darkButton}`}>
                {props.card.content.interacciones.correo} &nbsp;<MailOutlineIcon />
              </Button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card
