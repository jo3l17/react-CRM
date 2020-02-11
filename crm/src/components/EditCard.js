import React from 'react'
import { Dialog, Typography, Button, IconButton, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../styles/EditCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
const DialogTitle = withStyles(useStyles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} type="button" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function EditCard(props) {
    const submit = result => {
        result.preventDefault()
        props.handleClose({ message: 'OK', content: Form })
    }
    const [Form, setForm] = React.useState(props.data.content);
    const { classes } = props
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Dialog fullWidth={true}
            maxWidth={'sm'}
            fullScreen={fullScreen}
            onClose={props.handleClose}
            aria-labelledby={"dialog-" + props.modalId}
            open={props.open}>
            <form onSubmit={submit}>
                <DialogTitle id={"dialog-" + props.modalId} onClose={props.handleClose}>
                    Editar Prospecto
            </DialogTitle>
                <DialogContent dividers>
                    <div className={classes.form}>
                        <TextField
                            id={"titulo" + props.modalId}
                            label="Titulo del prospecto"
                            style={{ margin: 5 }}
                            fullWidth
                            defaultValue={Form.titulo}
                            onChange={(event) => setForm({ ...Form, titulo: event.target.value })}
                            margin="normal"
                        />
                        <TextField
                            id={"porcentajeCierre" + props.modalId}
                            label="Porcentaje de cierre"
                            style={{ margin: 5 }}
                            defaultValue={Form.porcentajeCierre}
                            onChange={(event) => setForm({ ...Form, porcentajeCierre: event.target.value })}
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id={"prioridad" + props.modalId}
                            label="Prioridad"
                            style={{ margin: 5 }}
                            defaultValue={Form.prioridad}
                            onChange={(event) => setForm({ ...Form, prioridad: event.target.value })}
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id={"FechaContacto" + props.modalId}
                            label="Fecha de contacto"
                            style={{ margin: 5 }}
                            fullWidth
                            margin="normal"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" className={classes.cancelButton} type="button" onClick={props.handleClose}>
                        Cancelar
                </Button>
                    <Button variant="outlined" className={classes.successButton} autoFocus type="submit">
                        Guardar Cambios
                </Button>
                </DialogActions>
            </form>
        </Dialog >
    )
}
export default withStyles(useStyles)(EditCard);