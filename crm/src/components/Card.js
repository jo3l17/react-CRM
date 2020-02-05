import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useStyles from '../styles/Card';
import { List, ListItem, ListItemIcon, Divider, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
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
              <ListItem button className={classes.leftListIcon}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem button className={classes.leftListIcon}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem button className={classes.leftListIcon}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
            </List>
            <div className={classes.title}>
              {props.task.content.titulo}
            </div>
          </div>
          <Grid container spacing={0} className={classes.interacciones}>
            <Grid item xs={4} className={classes.interaccionesButtons}>
              a
            </Grid>
            <Grid item xs={4} className={classes.interaccionesButtons}>
              b
            </Grid>
            <Grid item xs={4} className={classes.interaccionesButtons}>
              c
            </Grid>
          </Grid>
        </div>
      )}
    </Draggable>
  )
}

export default Card
