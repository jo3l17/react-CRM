import React from 'react'
import { Button } from '@material-ui/core';
import useStyles from '../styles/Table';
import DescriptionIcon from '@material-ui/icons/Description';
import AddIcon from '@material-ui/icons/Add';
import AddInteraccion from './AddInteraccion';
import CorreoInteraccion from './CorreoInteraccion';

export default function ToolbarTitle(props) {
    const { idUltimoPropsecto, canal } = props
    const classes = useStyles();
    const [openDialogAdd, setOpenDialogAdd] = React.useState(false)
    const [openDialogCorreoInteraccion, setOpenDialogCorreoInteraccion] = React.useState(false)
    const handleOpenAddInteraccion = () => {
        setOpenDialogAdd(true)
    }
    const handleCloseAddInteraccion = result => {
        console.log(result);
        if(result=='OK'){
            props.refreshData()
        }
        setOpenDialogAdd(false)
    }
    const handleOpenCorreoInteraccion = () =>{
        setOpenDialogCorreoInteraccion(true)
    }
    const handleCloseCorreoInteraccion = result =>{
        setOpenDialogCorreoInteraccion(false)
    }
    return (<div>
        <CorreoInteraccion id={idUltimoPropsecto} open={openDialogCorreoInteraccion} handleClose={handleCloseCorreoInteraccion}/>
        <AddInteraccion canal={canal} id={idUltimoPropsecto} open={openDialogAdd} handleClose={handleCloseAddInteraccion} />
        <Button variant={'outlined'} onClick={() => { handleOpenAddInteraccion() }} className={`${classes.interaccionesTableTitleButton} ${classes.interaccionesTableAgregar}`}
            startIcon={<DescriptionIcon />}>Agregar</Button> <Button variant={'outlined'} onClick={() => { handleOpenCorreoInteraccion() }} className={`${classes.interaccionesTableTitleButton} ${classes.interaccionesTableGenerar}`}
                startIcon={<AddIcon />}>Interactuar</Button>
    </div>)
}
