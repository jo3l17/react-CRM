import React, { useEffect } from 'react'
import { Container, TextField, InputLabel, FormControl, Input, InputAdornment, IconButton, Grid, Button } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from '../styles/login';
import axios from 'axios';
import { BackUrl } from '../utilities/const';
import Router from 'next/router'
import { islogged } from '../services/UserService';

export default function login() {
    useEffect(() => {
        islogged('/tablero')
    }, [])
    const submit = e => {
        e.preventDefault()
        const form = {
            usuario: values.usuario,
            password: values.password
        }
        axios.post(BackUrl + 'usuarios/login', form).then(respuesta => {
            console.log(respuesta)
            if (respuesta.data.message == 'OK') {
                Router.push('/tablero')
                localStorage.setItem('token', respuesta.data.token)
            } else {
                setValues({ ...values, password: '', passwordError: true })
            }
        }).catch(error => {
            console.log(error)
        })
    }
    const classes = useStyles()
    const [values, setValues] = React.useState({
        usuario: '',
        password: '',
        showPassword: false,
        passwordError: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleForm = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <div className={classes.fullContainer}>
            <Container maxWidth="sm" className={classes.container}>
                <h3>Login</h3>
                <form onSubmit={submit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="usuario o correo"
                                id="usuario"
                                margin="normal"
                                value={values.usuario}
                                onChange={handleForm('usuario')}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                fullWidth>
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleForm('password')}
                                    error={values.passwordError && values.password == ""}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={event => { event.preventDefault() }}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" onClick={submit}>
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    )
}
