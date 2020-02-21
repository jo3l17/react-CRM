import { makeStyles } from "@material-ui/core";

const useStyles = theme => ({
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
    interaccionesbadge: {
        backgroundColor:'black',
        color:'blue'
    }
})
export default useStyles