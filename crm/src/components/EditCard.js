import 'date-fns';
import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Dialog, Typography, Button, IconButton, TextField, Grid, Hidden } from '@material-ui/core';
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
        props.handleClose({ message: 'OK', content: { id: props.modalId, content: Form } })
    }
    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-') + 'T00:00:00';
    }
    // const [selectedDate, setSelectedDate] = React.useState('2014-08-18');
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
                        <Grid container spacing={3}>
                            <Grid item sm={4} xs={6}>
                                <TextField
                                    id={"prioridad" + props.modalId}
                                    label="Prioridad"
                                    style={{ margin: 5 }}
                                    defaultValue={Form.prioridad}
                                    onChange={(event) => setForm({ ...Form, prioridad: parseInt(event.target.value) })}
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item sm={4} xs={6}>
                                <TextField
                                    id={"porcentajeCierre" + props.modalId}
                                    label="Porcentaje de cierre"
                                    style={{ margin: 5 }}
                                    defaultValue={Form.porcentajeCierre}
                                    onChange={(event) => setForm({ ...Form, porcentajeCierre: parseInt(event.target.value) })}
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Hidden smDown>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            style={{ margin: 5, width: '100%' }}
                                            id={"date-picker-inline" + props.modalId}
                                            label="Fecha de contacto"
                                            value={Form.fechaContacto ? Form.fechaContacto : (new Date())}
                                            onChange={(event) => setForm({ ...Form, fechaContacto: formatDate(event) })}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Hidden>
                                    <Hidden mdUp>
                                        <KeyboardDatePicker
                                            style={{ margin: 5, width: '100%' }}
                                            id={"date-picker-dialog" + props.modalId}
                                            label="Fecha de contacto"
                                            format="dd/MM/yyyy"
                                            value={Form.fechaContacto ? Form.fechaContacto : (new Date())}
                                            onChange={(event) => setForm({ ...Form, fechaContacto: formatDate(event) })}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Hidden>
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>
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