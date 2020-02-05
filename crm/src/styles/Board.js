import {makeStyles}from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';
// const useStyles = makeStyles(theme => ({
//     Board:{
//         border:'1px solid grey',
//         width:220,
//         display:'flex',
//         flexDirection:'column',
//         backgroundColor:'white'
//         // padding:8
//     },
//     Header:{
//         padding:8,
//         margin:0
//     },
//     List:{
//         padding:8,
//         flexGrow:1,
//         minHeight:100,
//     },
//     draggingOver:{
//         backgroundColor:theme.palette.primary.light
//     }
// })
// )
const useStyles = theme => ({
    Board:{
        border:'1px solid grey',
        width:220,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white'
        // padding:8
    },
    Header:{
        padding:8,
        margin:0
    },
    List:{
        padding:8,
        flexGrow:1,
        minHeight:200,
        height:"100%",
        overflow:'overlay'
    },
    draggingOver:{
        backgroundColor:theme.palette.primary.light
    },
    addButton:{
        backgroundColor:theme.palette.secondary.dark,
        color:'white',
        '&:hover':{
            backgroundColor: theme.palette.secondary.light,
        }
    }
})

export default useStyles;