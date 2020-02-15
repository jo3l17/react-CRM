import React from 'react'
import { Dialog, DialogTitle, Typography, IconButton, DialogContent, Grid, Button, DialogActions } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../styles/DeleteCloseCard'
function DeleteCloseCard(props) {
    const deleteTask = result => {
        props.handleClose('deleted')
    }
    const classes = useStyles()
    return (
        <Dialog fullWidth={true}
            onClose={props.handleClose}
            aria-labelledby={"erase-dialog-" + props.modalId}
            open={props.open}
            scroll="paper"
        >
            <DialogTitle id={'erase-dialog-' + props.modalId} disableTypography className={classes.root}>
                <Typography variant="h6">
                    Cerrar Prospecto
                </Typography>
                {props.handleClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} type="button" onClick={props.handleClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={2}>
                    <Grid item xs={7} className={classes.grid} style={{ borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}>
                        <Typography className={classes.opcion}>
                            ¿Desea marcar este prospecto como:
                        </Typography>
                        <div className={classes.buttonContainer} >
                            <Button variant="outlined" className={classes.proccessButton}>
                                Ganado
                            </Button>
                            <Button variant="outlined" className={classes.lostButton}>
                                Perdido
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={5} className={classes.grid}>
                        <Typography className={classes.opcion}>
                            ...o desea eliminarlo?
                        </Typography>
                        <Button variant="outlined" className={classes.deleteButton} onClick={deleteTask}>
                            Eliminar
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" className={classes.successButton} type="button" onClick={props.handleClose} autoFocus>
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteCloseCard
