import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    interaccionesContainer: {
        display: 'flex',
    },
    containerCell: {
        display: 'flex',
    },
    persona: {
        width: '60%',
        marginLeft: 5
    },
    leftButtonsContainer: {
        maxWidth: 64,
        borderRight: '1px solid black'
    },
    badge: {
        backgroundColor: theme.palette.tertiary.dark,
        color: 'black'
    },
    interaccionesButton: {
        border:`1px solid black`,
        borderRadius:0
    }
}))
export default useStyles