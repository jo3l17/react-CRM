import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Dialog, Typography, Button, IconButton, TextField, Grid, Hidden, InputLabel, FormControl, Select, MenuItem, RadioGroup, FormControlLabel, Radio, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../styles/AddCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function AddCard(props) {

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

    const [Form, setForm] = React.useState(
        {
            tipo: 'persona',
            nombres: '',
            apellidos: '',
            ruc: '',
            empresa: '',
            sexo: '',
            telefono: '',
            correo: '',
            porcentajeCierre: null,
            prioridad: null,
            fechaContacto: null,
            direccion: '',
            comentario: ''
        }
    );
    const { classes } = props;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Dialog fullWidth={true}
            maxWidth={'sm'}
            fullScreen={fullScreen}
            onClose={props.handleClose}
            aria-labelledby={"dialog-" + props.modalId}
            open={props.open}
            scroll="paper">
            <DialogTitle id={"dialog-" + props.modalId} disableTypography className={classes.root} >
                <Typography variant="h6">Agregar Prospecto</Typography>
                {props.handleClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} type="button" onClick={props.handleClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
            <DialogContent dividers>
                <form onSubmit={submit} autocomplete='off'>
                    <div className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={classes.gridRadio}>
                                <FormControl>
                                    <RadioGroup className={classes.radioGroup} aria-label="tipo" name="tipo" value={Form.tipo} onChange={(event) => setForm({ ...Form, tipo: event.target.value })} >
                                        <FormControlLabel value={"persona"} control={<Radio />} label="Persona" />
                                        <FormControlLabel value={"empresa"} control={<Radio />} label="Empresa" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                {(Form.tipo == 'persona') ?
                                    (<Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"Nombres" + props.modalId}
                                                label="Nombres"
                                                style={{ margin: 5 }}
                                                fullWidth
                                                value={Form.nombres}
                                                onChange={(event) => { setForm({ ...Form, nombres: event.target.value }) }}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"Apellidos" + props.modalId}
                                                label="Apellidos"
                                                style={{ margin: 5 }}
                                                fullWidth
                                                onChange={(event) => setForm({ ...Form, apellidos: event.target.value })}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={6}>
                                            <FormControl fullWidth style={{ margin: 5 }}>
                                                <InputLabel>Genero</InputLabel>
                                                <Select value={Form.sexo} onChange={(event) => { setForm({ ...Form, sexo: event.target.value }) }}>
                                                    <MenuItem value="">Ninguno</MenuItem>
                                                    <MenuItem value={"H"}>Hombre</MenuItem>
                                                    <MenuItem value={"M"}>Mujer</MenuItem>
                                                    <MenuItem value={"NA"}>Prefiero no decirlo</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={4} xs={6}>
                                            <TextField
                                                id={"Telefono" + props.modalId}
                                                label="Telefono"
                                                style={{ margin: 5 }}
                                                defaultValue={Form.telefono}
                                                onChange={(event) => setForm({ ...Form, telefono: event.target.value })}
                                                type="number"
                                                fullWidth
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <TextField
                                                id={"Correo" + props.modalId}
                                                label="Correo"
                                                style={{ margin: 5 }}
                                                defaultValue={Form.correo}
                                                onChange={(event) => setForm({ ...Form, correo: event.target.value })}
                                                type="email"
                                                fullWidth
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>) : (<Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"Razon-social-" + props.modalId}
                                                label="Razon social"
                                                style={{ margin: 5 }}
                                                fullWidth
                                                type="text"
                                                value={Form.empresa}
                                                onChange={(event) => setForm({ ...Form, empresa: event.target.value })}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"ruc-" + props.modalId}
                                                label="RUC"
                                                style={{ margin: 5 }}
                                                fullWidth
                                                type="number"
                                                value={Form.ruc}
                                                onChange={(event) => setForm({ ...Form, ruc: event.target.value })}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"Telefono" + props.modalId}
                                                label="Telefono"
                                                style={{ margin: 5 }}
                                                defaultValue={Form.telefono}
                                                onChange={(event) => setForm({ ...Form, telefono: event.target.value })}
                                                type="number"
                                                fullWidth
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"Correo" + props.modalId}
                                                label="Correo"
                                                style={{ margin: 5 }}
                                                defaultValue={Form.correo}
                                                onChange={(event) => setForm({ ...Form, correo: event.target.value })}
                                                type="email"
                                                fullWidth
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>)}
                            </Grid>
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
                                            value={Form.fechaContacto}
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
                                            value={Form.fechaContacto}
                                            onChange={(event) => setForm({ ...Form, fechaContacto: formatDate(event) })}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Hidden>
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id={"direccion" + props.modalId}
                                    label="Direccion"
                                    fullWidth
                                    value={Form.direccion}
                                    onChange={(event) => setForm({ ...Form, direccion: event.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id={"comentarios" + props.modalId}
                                    label="Comentarios"
                                    multiline
                                    fullWidth
                                    rows="3"
                                    value={Form.comentario}
                                    onChange={(event) => setForm({ ...Form, comentario: event.target.value })}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" className={classes.cancelButton} type="button" onClick={props.handleClose}>
                    Cancelar
                </Button>
                <Button variant="outlined" className={classes.successButton} autoFocus onClick={submit}>
                    Guardar Cambios
                </Button>
            </DialogActions>
        </Dialog >
    )
}
export default withStyles(useStyles)(AddCard);