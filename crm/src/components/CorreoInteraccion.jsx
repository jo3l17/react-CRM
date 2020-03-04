import React from 'react'
import { Dialog, useMediaQuery, DialogTitle, Typography, IconButton, DialogContent, Grid, DialogActions, TextField, Button } from '@material-ui/core'
import theme from '../theme';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../styles/CorreoInteraccion';

export default function CorreoInteraccion(props) {
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles();
    const submit = event => {
        event.preventDefault()
    }
    const [files, setFiles] = React.useState([])
    const [filesToUpload, setFilesToUpload] = React.useState()

    const FilesPreview = (props) => {
        let arrayFiles = []
        if (filesToUpload) {
            // for (let i = 0; i < filesToUpload.length; i++) {
            //     const element = filesToUpload[i];
            //     arrayFiles.push(element)
            // }
            console.log(filesToUpload)
            arrayFiles = Array.from(filesToUpload)
        }
        return (
            <Grid item xs={12}>
                {arrayFiles && arrayFiles.map((file, index) => <div key={index}>{file.name}
                    <IconButton aria-label="close" type="button"
                        onClick={() => { deleteAdjunto(index) }}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>)}
                <button onClick={() => { console.log(filesToUpload); console.log(files) }}>holo</button>
            </Grid>
        )
    }
    const handleEvent = event => {
        console.log(event.target.files)
        setFilesToUpload(event.target.files)
    }
    const deleteAdjunto = (index) => {
        let obj = {
            0: 'holo',
            1: 'nelll'
        }
        delete obj[1]
        console.log(obj)
        const arrayTempFiles = files
        const objTempFiles = { ...filesToUpload }
        console.log(objTempFiles)
        console.log(objTempFiles[index])
        delete objTempFiles[index]
        console.log(objTempFiles)
        arrayTempFiles.splice(index, 1)
        setFilesToUpload(objTempFiles)
        setFiles(arrayTempFiles)
    }
    return (
        <Dialog
            fullWidth={true}
            maxWidth={'md'}
            fullScreen={fullScreen}
            onClose={props.handleClose}
            aria-labelledby={"dialog-" + props.id}
            open={props.open}
            scroll="paper"
        >
            <DialogTitle id={"dialog-" + props.id} disableTypography className={classes.root} >
                <Typography variant="h6">Enviar Correo</Typography>
                {props.handleClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} type="button" onClick={() => { props.handleClose() }}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
            <DialogContent dividers>
                <form onSubmit={submit} autoComplete="off">
                    <div className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Destinatario" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Asunto" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth multiline rows="5" label="Mensaje" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="adjuntos"
                                    multiple
                                    type="file"
                                    onChange={(e) => { handleEvent(e) }}
                                />
                                <label htmlFor="adjuntos">
                                    <Button variant="outlined" component="span">
                                        Subir Archivos adjuntos
                                    </Button>
                                </label>
                            </Grid>
                            <FilesPreview />
                        </Grid>
                    </div>
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" className={classes.cancelButton} type="button" onClick={() => { restartValidation(); props.handleClose() }}>
                    Cancelar
                </Button>
                <Button variant="outlined" className={classes.successButton} autoFocus onClick={submit}>
                    Enviar Correo
                </Button>
            </DialogActions>
        </Dialog>
    )
}
