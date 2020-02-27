import React from 'react'
import { Dialog, useMediaQuery, useTheme, DialogTitle, Typography, IconButton, Grid, DialogContent } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from '../styles/AddInteraccion';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function AddInteraccion(props) {
    console.log(props)
    const theme = useTheme();
    const classes = useStyles()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const submit = event => {
        event.preventDefault()
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [dateTime, setDateTime] = React.useState({ date: null, time: null })
    const handleDateChange = date => {
        setSelectedDate(date);
    };
    const handleTime = time => {
        setDateTime({ ...dateTime, time })
    }
    const handleDate = date => {
        setDateTime({ ...dateTime, date })
    }
    const handleSubmit = (event) => {
        let momentTime = moment(this.state.time);
        let momentDate = moment(this.state.date);
        let renderedDateTime = moment({
            year: momentDate.year(),
            month: momentDate.month(),
            day: momentDate.date(),
            hour: momentTime.hours(),
            minute: momentTime.minutes()
        });
        const newChore = {
            date_time: renderedDateTime,
        }
        props.actions.addEvent(newChore)
        setDateTime({ date: null, time: null });
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
                                <DatePicker onChange={handleDate} value={dateTime.date} hintText="Date to be completed by" />
                                <TimePicker onChange={handleTime} value={dateTime.time} hintText="Time to be completed by" />
                                {/* <KeyboardDateTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time picker"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            /> */}
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
