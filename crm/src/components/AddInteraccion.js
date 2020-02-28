import React from 'react'
import { Dialog, useMediaQuery, useTheme, DialogTitle, Typography, IconButton, Grid, DialogContent, FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from '../styles/AddInteraccion';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker, TimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function AddInteraccion(props) {
    console.log(props)
    const theme = useTheme();
    const classes = useStyles()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const submit = event => {
        console.log(selectedDate)
        event.preventDefault()
    }
    const [form, setForm] = React.useState(
        {
            horaFechaInicio: null,
            horaFechaTermino: null,
            estadoInteraccion: 0,
            comentario: ''
        }
    )
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(date)
    };
    const handleForm = (value, key) => {
        const tempForm = {
            ...form,
            [key]: value
        }
        setForm({
            ...form,
            [key]: value
        })
        // if (validate) {
        //     validateForm(tempForm)
        // }
    }
    const handleSubmit = (event) => {

    }
    return (
        <Dialog fullWidth={true}
            maxWidth={'sm'}
            fullScreen={fullScreen}
            onClose={props.handleClose}
            aria-labelledby={"dialog-" + props.idUltimoPropsecto}
            open={props.open}
            scroll="paper">
            <DialogTitle id={"dialog-" + props.idUltimoPropsecto} disableTypography className={classes.root} >
                <Typography variant="h6">Agregar Prospecto</Typography>
                {props.handleClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} type="button" onClick={props.handleClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
            <DialogContent dividers>
                <form onSubmit={submit} autoComplete="off">
                    <div className={classes.form}>
                        <Grid container spacing={2}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid item xs={6}>
                                    <KeyboardDatePicker
                                        variant={fullScreen ? 'dialog' : 'inline'}
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="horaFechaInicioDate"
                                        label="Inicio Fecha"
                                        value={form.horaFechaInicio}
                                        onChange={(event) => { handleForm(event, 'horaFechaInicio') }}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        invalidDateMessage={'fecha invalida'}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <KeyboardTimePicker
                                        variant={fullScreen ? 'dialog' : 'inline'}
                                        margin="normal"
                                        id="horaFechaInicioTime"
                                        label="Inicio Hora"
                                        value={form.horaFechaInicio}
                                        onChange={(event) => { handleForm(event, 'horaFechaInicio') }}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                        invalidDateMessage={'hora invalida'}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <KeyboardDatePicker
                                        variant={fullScreen ? 'dialog' : 'inline'}
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="FechaTerminoDate"
                                        label="Final Fecha"
                                        value={form.horaFechaTermino}
                                        onChange={(event) => { handleForm(event, 'horaFechaTermino') }}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        invalidDateMessage={'fecha invalida'}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <KeyboardTimePicker
                                        variant={fullScreen ? 'dialog' : 'inline'}
                                        margin="normal"
                                        id="horaFechaTerminoTime"
                                        label="Final Hora"
                                        value={form.horaFechaTermino}
                                        onChange={(event) => { handleForm(event, 'horaFechaTermino') }}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                        invalidDateMessage={'hora invalida'}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth style={{ margin: 5 }}>
                                        <InputLabel>Estado de Interaccion</InputLabel>
                                        <Select
                                            value={form.estadoInteraccion}
                                            onChange={(event) => { handleForm(event.target.value, 'estadoInteraccion') }}
                                        >
                                            <MenuItem value={-1}>Negativo</MenuItem>
                                            <MenuItem value={0}>Neutro</MenuItem>
                                            <MenuItem value={1}>Positivo</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="comentarios"
                                        label="comentarios"
                                        multiline
                                        rows="3"
                                        value={form.comentario}
                                        onChange={(event) => { handleForm(event.target.value, 'comentario') }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
