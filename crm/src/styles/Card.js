import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    card:{
        backgroundColor:theme.palette.secondary.main,
        margin:8,
        padding:15,
        borderRadius:2
    },
    dragging:{
        backgroundColor:theme.palette.primary.main
    }
})
)
export default useStyles;