import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";

export const ConfirmationDialog = ({
    open,
    title,
    variant,
    description,
    onSubmit,
    onClose,
    confirmButtonText,
    cancelButtonText,
    infoButtonText
}) => {
    return (
        <Dialog open={open}>
            <DialogTitle id="alert-dialog-title">{title?title:'Confirmar'}</DialogTitle>
            <DialogContent>
                <DialogContentText>{description}</DialogContentText>
            </DialogContent>
            <DialogActions>
                {variant === "danger" && (
                    <>
                        <Button color="primary" onClick={onSubmit}>
                            {confirmButtonText ? confirmButtonText : 'Si'}
                        </Button>
                        <Button color="primary" onClick={onClose} autoFocus>
                            {cancelButtonText ? cancelButtonText : 'Cancelar'}
                        </Button>
                    </>
                )}
                {variant === "info" && (
                    <Button color="primary" onClick={onSubmit}>
                        {infoButtonText ? infoButtonText : 'OK'}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};
