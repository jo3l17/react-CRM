import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.secondary.main,
        marginBottom: 8,
        // padding:8,
        borderRadius: 2,
        border: '2px solid black',
        // display: 'flex',
        '&:focus': {
            outline: 'none',
            borderColor: 'blue',
        }
    },
    dragging: {
        backgroundColor: theme.palette.secondary.light
    },
    handle: {
        width: 20,
        height: 20,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 4,
        marginRight: 8,
    },
    dragDisabled: {
        backgroundColor: theme.palette.secondary.light
    },
    title: {
        textAlign: 'left',
        marginLeft:5
    },
    leftList: {
        padding: 0
    },
    leftListIcon: {
        padding: 0,
        minWidth:0,
        borderRight: '2px solid black',
    },
    divider:{
        height:2,
        backgroundColor:'black'
    },
    container:{
        display:'flex',
        height:'100%',
        width:'100%'
    },
    interacciones:{
        borderTop:'2px solid black'
    },
    interaccionesButtons:{
        textAlign:'center'
    }
})
)
export default useStyles;