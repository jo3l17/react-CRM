import React from 'react'
import { Dialog, useMediaQuery, useTheme } from '@material-ui/core'

export default function AddInteraccion(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Dialog fullWidth={true}
            maxWidth={'sm'}
            fullScreen={fullScreen}
            onClose={props.handleClose}
            aria-labelledby={"dialog-" + props.modalId}
            open={props.open}
            scroll="paper">
            Holo
        </Dialog>
    )
}
