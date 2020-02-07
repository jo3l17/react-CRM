import { makeStyles, useTheme } from '@material-ui/core/styles';
// import theme from '../theme';
const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.tertiary.light,
        marginBottom: 8,
        // padding:8,
        borderRadius: 2,
        border: '2px solid',
        borderColor: theme.palette.tertiary.main,
        // display: 'flex',
        '&:focus': {
            outline: 'none',
            borderColor: 'black',
        }
    },
    dragging: {
        backgroundColor: theme.palette.tertiary.main,
        height: 'auto !important'
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
        fontSize: '1.2em'
    },
    cardInfo: {
        textAlign: 'left',
        marginLeft: 5,
        width:'100%'
    },
    leftList: {
        padding: 0
    },
    leftListItem: {
        padding: 0,
        borderRightColor: theme.palette.tertiary.main,
        borderRight: '2px solid',
    },
    leftListIcon: {
        minWidth: 0
    },
    divider: {
        height: 2,
        backgroundColor: theme.palette.tertiary.main
    },
    container: {
        display: 'flex',
        height: '100%',
        width: '100%'
    },
    interacciones: {
        borderTop: '2px solid',
        borderColor: theme.palette.tertiary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    interaccionesButtons: {
        width: '33.3%',
        textAlign: 'center'
    },
    porcentajeWrapper: {
        position:'relative',
        width:'100%',
    },
    porcentaje:{
        position:'absolute',
        top:'5px',
        right:'5px'
    },
    porcentajeCierre:{
        position:'absolute',
        top:'6px',
        right:'10px',
        zIndex:2,
        fontWeight:'bold'
    }
})
)
export default useStyles;