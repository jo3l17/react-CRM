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
        marginLeft:5
    },
    leftButtonsContainer: {
        maxWidth: 64,
        borderRight:'1px solid black'
    }
}))
export default useStyles