import {makeStyles}from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    Board:{
        border:'1px solid grey',
        // padding:8
    },
    Header:{
        padding:8,
        margin:0
    },
    List:{
        padding:8
    },
    draggingOver:{
        backgroundColor:theme.palette.primary.light
    }
})
)
export default useStyles;