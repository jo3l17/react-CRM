import React from 'react'
import { Button } from '@material-ui/core';
import useStyles from '../styles/Table';
import DescriptionIcon from '@material-ui/icons/Description';
import AddIcon from '@material-ui/icons/Add';
import AddInteraccion from './AddInteraccion';

export default function ToolbarTitle(props) {
    const { idUltimoPropsecto, canal } = props
    const classes = useStyles();
    const [openDialogAdd, setOpenDialogAdd] = React.useState(false)
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
    return (<div>
        <AddInteraccion canal={canal} id={idUltimoPropsecto} open={openDialogAdd} handleClose={handleCloseAddInteraccion} />
        <Button variant={'outlined'} onClick={() => { handleOpenAddInteraccion(props.idUltimoPropsecto) }} className={`${classes.interaccionesTableTitleButton} ${classes.interaccionesTableAgregar}`}
            startIcon={<DescriptionIcon />}>Agregar</Button> <Button variant={'outlined'} className={`${classes.interaccionesTableTitleButton} ${classes.interaccionesTableGenerar}`}
                startIcon={<AddIcon />}>Interactuar</Button>
    </div>)
}
