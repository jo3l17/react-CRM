import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    card:{
        backgroundColor:theme.palette.secondary.main,
        marginBottom:8,
        padding:8,
        borderRadius:2,
        border:'2px solid grey',
        display:'flex',
        '&:focus':{
            outline:'none',
            borderColor:'blue',
        }
    },
    dragging:{
        backgroundColor:theme.palette.secondary.light
    },
    handle:{
        width:20,
        height:20,
        backgroundColor:theme.palette.primary.main,
        borderRadius:4,
        marginRight:8,
    },
    dragDisabled:{
        backgroundColor:theme.palette.secondary.light
    }
})
)
export default useStyles;