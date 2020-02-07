import { makeStyles } from '@material-ui/core/styles';
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
    Board: {
        border: '1px solid grey',
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.tertiary.main,
        // padding:8
    },
    Header: {
        padding: 8,
        margin: 0,
        textAlign: 'center'
    },
    Total: {
        textAlign: 'center',
        marginTop: 0
    },
    List: {
        padding: 8,
        // paddingRight: 18,
        flexGrow: 1,
        minHeight: 200,
        height: "100%",
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.9)',
            outline: '1px solid slategrey'
        },
        scrollbarColor:'black transparent',
        scrollbarWidth:'thin'
    },
    draggingOver: {
        backgroundColor: theme.palette.tertiary.dark
    },
    addButton: {
        backgroundColor: theme.palette.secondary.dark,
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        }
    },
})

export default useStyles;