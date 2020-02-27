import React from 'react'
import MaterialTable, { MTableCell, MTableActions, MTableToolbar, MTableHeader } from "material-table";
import axios from 'axios'
import { BackUrl } from '../utilities/const';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EditIcon from '@material-ui/icons/Edit';
import useStyles, { styles } from '../styles/Table';
import AdjustIcon from '@material-ui/icons/Adjust';
import { Button, Badge } from '@material-ui/core';
import { userLogged } from '../services/UserService';
import tableIcons from '../utilities/TableIcons';
import AddInteraccion from './AddInteraccion';
import TableInteracciones from './TableInteracciones';

export default function Table() {
    let tableRef = React.createRef()
    let tableRefWhatsapp = React.createRef()
    const classes = useStyles()
    let pageSize = 5

    const [pageSizeOptions, setPageSizeOptions] = React.useState([5, 10, 20])
    let panelOpen = {
        whatsapp: false,
        telefono: false,
        correo: false
    }
    let idOpen
    let consulta = 'whatsapp'
    const printTableRef = () => {
        console.log(tableRef)
    }
    const togglePanelWhatsapp = (id, tipo) => {
        const idArray = tableRef.current.state.data
        const newArray = idArray.map(data => data.cliente.props.data.id)
        if (idOpen == id) {
            if (panelOpen[tipo] == true) {
                panelOpen = {
                    whatsapp: false,
                    telefono: false,
                    correo: false
                }
                idOpen = null
                tableRef.current.onToggleDetailPanel([newArray.indexOf(id)], rowData => {
                    console.log(rowData)
                    return (<div></div>)
                })
            } else {
                panelOpen = {
                    whatsapp: false,
                    telefono: false,
                    correo: false
                }
                panelOpen[tipo] = true
                return tableRefWhatsapp.current && tableRefWhatsapp.current.onQueryChange({tipo:tipo})
            }
        } else {
            console.log(tipo)
            if (idOpen) {
                console.log('here')
                tableRef.current.onToggleDetailPanel([newArray.indexOf(idOpen)], rowData => (<div></div>))
            }
            idOpen = id
            tableRef.current.onToggleDetailPanel([newArray.indexOf(id)],
                rowData => {
                    return (
                        <TableInteracciones consulta={tipo} rowData={rowData} styles={styles.interaccionesTable} icons={tableIcons} tableRef={tableRefWhatsapp} id={id} />
                    )
                }
            )
        }
        panelOpen[tipo] = true
    }
    const Nombre = function (props) {
        return (
            <div className={classes.containerCell}>
                <div className={classes.leftButtonsContainer}>
                    <Button>
                        <EditIcon />
                    </Button>
                    <Button>
                        <AdjustIcon />
                    </Button>
                </div>
                <div className={classes.persona}>
                    <h3 style={{ margin: 0 }}>{props.data.tipo == 'persona' ? props.data.nombres + ' ' + props.data.apellidos : props.data.empresa + ' ' + (props.data.ruc ? props.data.ruc : '')}<br /></h3>
                    Telefono:{props.data.telefono}<br />
                    Correo:{props.data.correo}
                </div>
                <div className={classes.interaccionesContainer}>
                    <Button disabled={props.data.ultimo_prospecto.id ? false : true} className={classes.interaccionesButton} onClick={() => { togglePanelWhatsapp(props.data.id, 'whatsapp') }}>
                        <Badge badgeContent={props.data.interacciones.whastapp} classes={{ badge: classes.badge }} showZero>
                            <WhatsAppIcon />
                        </Badge>
                    </Button>
                    <Button disabled={props.data.ultimo_prospecto.id ? false : true} className={classes.interaccionesButton} onClick={() => { togglePanelWhatsapp(props.data.id, 'telefono') }}>
                        <Badge badgeContent={props.data.interacciones.telefono} classes={{ badge: classes.badge }} showZero>
                            <PhoneIcon />
                        </Badge>
                    </Button>
                    <Button disabled={props.data.ultimo_prospecto.id ? false : true} className={classes.interaccionesButton} onClick={() => { togglePanelWhatsapp(props.data.id, 'correo') }}>
                        <Badge badgeContent={props.data.interacciones.correo} classes={{ badge: classes.badge }} showZero>
                            <MailOutlineIcon />
                        </Badge>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
                tableRef={tableRef}
                icons={tableIcons}
                columns={[
                    { title: "Clientes", field: "cliente", cellStyle: { width: '500px', display: 'block' }, sorting: false },
                    { title: "Prioridad", field: "prioridad", type: "numeric", cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } },
                    { title: "Estado", field: "estadoCliente", cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } },
                    { title: "Intencion de compra", field: "intencionCompra", type: 'numeric', cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } },
                    { title: "Numero de interacciones", field: "numeroInteracciones", type: 'numeric', cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } },
                    { title: "Cantidad de cierres", field: "cantidadCierres", type: 'numeric', cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } }
                ]}
                data={query => {
                    idOpen = null
                    return new Promise((resolve, reject) => {
                        axios.post(BackUrl + 'vista_clientes/obtener', { query, token: userLogged() }).then(res => {
                            console.log(res)
                            const newData = res.data.content.map(data => ({
                                cliente: <Nombre
                                    data={data}
                                />,
                                prioridad: data.ultimo_prospecto.prioridad,
                                estadoCliente: data.estado_cliente,
                                intencionCompra: data.intencion_compra,
                                numeroInteracciones: data.numero_interacciones,
                                cantidadCierres: data.cantidad_cierres
                            }))
                            pageSize = res.data.content.length
                            resolve({
                                data: newData,
                                page: res.data.page,
                                totalCount: res.data.totalCount
                            })
                        }).catch(error => {
                            console.log(error)
                        })
                    })
                }
                }
                title="Clientes"
                localization={{
                    pagination: {
                        labelRowsSelect: 'columnas',
                        labelDisplayedRows: '{from}-{to} de {count}'
                    },
                    toolbar: {
                        nRowsSelected: '{0} columna(s) seleccionadas'
                    },
                    body: {
                        emptyDataSourceMessage: 'No hay data',
                        filterRow: {
                            filterTooltip: 'Filtrar'
                        }
                    }
                }}
                components={{
                    Cell: props => {
                        var newProps = {
                            ...props,
                        }
                        if (props.value?.props?.data.tipo == 'persona') {
                            newProps.value = props.value?.props?.data.nombres + ' ' + props.value?.props?.data.apellidos + ' ' + props.value?.props?.data.correo + ' ' + props.value?.props?.data.telefono
                        } else if (props.value?.props?.data.tipo == 'empresa') {
                            newProps.value = props.value?.props?.data.empresa + ' ' + props.value?.props?.data.ruc + ' ' + props.value?.props?.data.correo + ' ' + props.value?.props?.data.telefono
                        }
                        return (
                            <MTableCell {...props} style={{ padding: 0 }} />
                        )
                    }
                }}
            />
            <button onClick={() => { printTableRef() }}>Print table ref</button>
        </div >
    );
}
