import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Dialog, Typography, Button, IconButton, TextField, Grid, Hidden, InputLabel, FormControl, Select, MenuItem, RadioGroup, FormControlLabel, Radio, DialogTitle, DialogContent, DialogActions, InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../styles/AddCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { lengthValidation, minMaxValidation, emailValidation } from '../utilities/validator'
import { formatDate } from '../utilities/formaters'

function AddCard(props) {
    const [validate, setValidate] = React.useState(false)
    const validateForm = (formulario) => {
        const validation = {
            nombres: '',
            apellidos: '',
            ruc: '',
            empresa: '',
            correo: '',
            telefono: '',
            prioridad: '',
            porcentajeCierre: '',
            fechaContacto: '',
        }
        let formValidationTemp = {}
        if (formulario.tipo == "persona") {
            formValidationTemp = {
                ...FormValidation,
                empresa: '',
                ruc: '',
                nombres: lengthValidation(formulario.nombres, 3),
                apellidos: lengthValidation(formulario.apellidos, 3),
                correo: emailValidation(formulario.correo),
                telefono: lengthValidation(formulario.telefono, 9),
                prioridad: (!formulario.prioridad || formulario.prioridad.length == 0) ? lengthValidation(formulario.prioridad, 0) : minMaxValidation(formulario.prioridad, 1, 10),
                porcentajeCierre: (!formulario.porcentajeCierre || formulario.porcentajeCierre.length == 0) ? '' : minMaxValidation(formulario.porcentajeCierre, 0, 100),
                // fechaContacto: formulario.fechaContacto == 'NaN-NaN-NaNT00:00:00' ? 'Fecha Invalida' : lengthValidation(formulario.fechaContacto, 0),
                fechaContacto: '',
            }
            setFormValidation(
                {
                    ...FormValidation,
                    empresa: '',
                    ruc: '',
                    nombres: lengthValidation(formulario.nombres, 3),
                    apellidos: lengthValidation(formulario.apellidos, 3),
                    correo: emailValidation(formulario.correo),
                    telefono: lengthValidation(formulario.telefono, 9),
                    prioridad: (!formulario.prioridad || formulario.prioridad.length == 0) ? lengthValidation(formulario.prioridad, 0) : minMaxValidation(formulario.prioridad, 1, 10),
                    porcentajeCierre: (!formulario.porcentajeCierre || formulario.porcentajeCierre.length == 0) ? '' : minMaxValidation(formulario.porcentajeCierre, 0, 100),
                    // fechaContacto: formulario.fechaContacto == 'NaN-NaN-NaNT00:00:00' ? 'Fecha Invalida' : lengthValidation(formulario.fechaContacto, 0),
                    fechaContacto: '',
                }
            )
        } else {
            formValidationTemp = {
                ...FormValidation,
                nombres: '',
                apellidos: '',
                empresa: lengthValidation(formulario.empresa, 3),
                ruc: '',
                correo: emailValidation(formulario.correo),
                telefono: lengthValidation(formulario.telefono, 9),
                prioridad: (!formulario.prioridad || formulario.prioridad.length == 0) ? lengthValidation(formulario.prioridad, 0) : minMaxValidation(formulario.prioridad, 1, 10),
                porcentajeCierre: (!formulario.porcentajeCierre || formulario.porcentajeCierre.length == 0) ? '' : minMaxValidation(formulario.porcentajeCierre, 0, 100),
                // fechaContacto: formulario.fechaContacto == 'NaN-NaN-NaNT00:00:00' ? 'Fecha Invalida' : lengthValidation(formulario.fechaContacto, 0),
                fechaContacto: '',
            }
            setFormValidation(
                {
                    ...FormValidation,
                    nombres: '',
                    apellidos: '',
                    empresa: lengthValidation(formulario.empresa, 3),
                    ruc: '',
                    correo: emailValidation(formulario.correo),
                    telefono: lengthValidation(formulario.telefono, 9),
                    prioridad: (!formulario.prioridad || formulario.prioridad.length == 0) ? lengthValidation(formulario.prioridad, 0) : minMaxValidation(formulario.prioridad, 1, 10),
                    porcentajeCierre: (!formulario.porcentajeCierre || formulario.porcentajeCierre.length == 0) ? '' : minMaxValidation(formulario.porcentajeCierre, 0, 100),
                    // fechaContacto: formulario.fechaContacto == 'NaN-NaN-NaNT00:00:00' ? 'Fecha Invalida' : lengthValidation(formulario.fechaContacto, 0),
                    fechaContacto: '',
                }
            )
        }
        if (JSON.stringify(validation) != JSON.stringify(formValidationTemp)) {
            return false
        } else {
            return true
        }
    }
    const submit = result => {
        setValidate(true)
        result.preventDefault()
        if (validateForm(Form)) {
            let sendedForm = {
                ...Form,
                titulo: Form.tipo == 'persona' ? Form.nombres + ' ' + Form.apellidos : Form.empresa + ' ' + Form.ruc,
                prioridad: parseInt(Form.prioridad),
                porcentajeCierre: (Form.porcentajeCierre && Form.porcentajeCierre == '') ? null : parseInt(Form.porcentajeCierre)
            }
            props.handleClose({ message: 'OK', content: { id: props.modalId, content: sendedForm } })
        } else {
            return false
        }
    }

    const [FormValidation, setFormValidation] = React.useState(
        {
            nombres: '',
            apellidos: '',
            ruc: '',
            empresa: '',
            correo: '',
            telefono: '',
            prioridad: '',
            porcentajeCierre: '',
            fechaContacto: '',
        }
    )
    const [Form, setForm] = React.useState(
        {
            tipo: 'persona',
            titulo: '',
            nombres: '',
            apellidos: '',
            ruc: '',
            empresa: '',
            genero: '',
            telefono: '',
            correo: '',
            porcentajeCierre: '',
            prioridad: '',
            fechaContacto: null,
            direccion: '',
            comentario: ''
        }
    );
    const handleForm = (value, key) => {
        if (key == "fechaContacto") {
            value = (value != '' && value != null) ? formatDate(value) : ''
        }
        const tempForm = {
            ...Form,
            [key]: value
        }
        setForm({
            ...Form,
            [key]: value
        })
        if (validate) {
            validateForm(tempForm)
        }
    }
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
                <form onSubmit={submit} autoComplete='off'>
                    <div className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={classes.gridRadio}>
                                <FormControl>
                                    <RadioGroup className={classes.radioGroup} aria-label="tipo" name="tipo" value={Form.tipo} onChange={(event) => setForm({ ...Form, tipo: event.target.value })} >
                                        <FormControlLabel value={"persona"} control={<Radio color="default" className={classes.radioButton} />} label="Persona" />
                                        <FormControlLabel value={"empresa"} control={<Radio color="default" className={classes.radioButton} />} label="Empresa" />
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
                                                onChange={(event) => { handleForm(event.target.value, 'nombres') }}
                                                margin="normal"
                                                error={validate && FormValidation.nombres != ''}
                                                helperText={FormValidation.nombres}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"Apellidos" + props.modalId}
                                                label="Apellidos"
                                                style={{ margin: 5 }}
                                                fullWidth
                                                onChange={(event) => { handleForm(event.target.value, 'apellidos') }}
                                                margin="normal"
                                                error={validate && FormValidation.apellidos != ''}
                                                helperText={FormValidation.apellidos}
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={6}>
                                            <FormControl fullWidth style={{ margin: 5 }}>
                                                <InputLabel>Genero</InputLabel>
                                                <Select
                                                    value={Form.genero}
                                                    onChange={(event) => { handleForm(event.target.value, 'genero') }}
                                                >
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
                                                onChange={(event) => { handleForm(event.target.value, 'telefono') }}
                                                type="number"
                                                fullWidth
                                                margin="normal"
                                                error={validate && FormValidation.telefono != ''}
                                                helperText={FormValidation.telefono}
                                            />
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <TextField
                                                id={"Correo" + props.modalId}
                                                label="Correo"
                                                style={{ margin: 5 }}
                                                defaultValue={Form.correo}
                                                onChange={(event) => { handleForm(event.target.value, 'correo') }}
                                                type="email"
                                                fullWidth
                                                margin="normal"
                                                error={validate && FormValidation.correo != ''}
                                                helperText={FormValidation.correo}
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
                                                onChange={(event) => { handleForm(event.target.value, 'empresa') }}
                                                margin="normal"
                                                error={validate && FormValidation.empresa != ''}
                                                helperText={FormValidation.empresa}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"ruc-" + props.modalId}
                                                label="RUC"
                                                style={{ margin: 5 }}
                                                fullWidth
                                                type="number"
                                                defaultValue={Form.ruc}
                                                onChange={(event) => { handleForm(event.target.value, 'ruc') }}
                                                margin="normal"
                                                error={validate && FormValidation.ruc != ''}
                                                helperText={FormValidation.ruc}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"Telefono" + props.modalId}
                                                label="Telefono"
                                                style={{ margin: 5 }}
                                                defaultValue={Form.telefono}
                                                onChange={(event) => { handleForm(event.target.value, 'telefono') }}
                                                type="number"
                                                fullWidth
                                                margin="normal"
                                                error={validate && FormValidation.telefono != ''}
                                                helperText={FormValidation.telefono}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id={"Correo" + props.modalId}
                                                label="Correo"
                                                style={{ margin: 5 }}
                                                defaultValue={Form.correo}
                                                onChange={(event) => { handleForm(event.target.value, 'correo') }}
                                                type="email"
                                                fullWidth
                                                margin="normal"
                                                error={validate && FormValidation.correo != ''}
                                                helperText={FormValidation.correo}
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
                                    onChange={(event) => { handleForm(event.target.value, 'prioridad') }}
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                    error={validate && FormValidation.prioridad != ''}
                                    helperText={FormValidation.prioridad}
                                />
                            </Grid>
                            <Grid item sm={4} xs={6}>
                                <TextField
                                    id={"porcentajeCierre" + props.modalId}
                                    label="Porcentaje de cierre"
                                    style={{ margin: 5 }}
                                    defaultValue={Form.porcentajeCierre}
                                    onChange={(event) => { handleForm(event.target.value, 'porcentajeCierre') }}
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                    error={validate && FormValidation.porcentajeCierre != ''}
                                    helperText={FormValidation.porcentajeCierre}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">%</InputAdornment>
                                    }}
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
                                            onChange={(event) => { handleForm(event, 'fechaContacto') }}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            error={validate && FormValidation.fechaContacto != ''}
                                            helperText={FormValidation.fechaContacto}
                                        />
                                    </Hidden>
                                    <Hidden mdUp>
                                        <KeyboardDatePicker
                                            style={{ margin: 5, width: '100%' }}
                                            id={"date-picker-dialog" + props.modalId}
                                            label="Fecha de contacto"
                                            format="dd/MM/yyyy"
                                            value={Form.fechaContacto}
                                            onChange={(event) => { handleForm(event, 'fechaContacto') }}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            error={validate && FormValidation.fechaContacto != ''}
                                            helperText={FormValidation.fechaContacto}
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