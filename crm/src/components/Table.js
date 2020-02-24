import React, { forwardRef, useEffect, useState } from 'react'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Save from '@material-ui/icons/Save';
import Delete from '@material-ui/icons/delete';
import MaterialTable, { MTableCell, MTableActions } from "material-table";
import axios from 'axios'
import { BackUrl } from '../utilities/const';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from '../styles/Table';
import AdjustIcon from '@material-ui/icons/Adjust';
import { Button, Badge } from '@material-ui/core';
import { userLogged } from '../services/UserService';
import EventIcon from '@material-ui/icons/Event';

export default function Table() {
    let tableRef = React.createRef()
    const classes = useStyles()
    let pageSize = 5
    const [pageSizeOptions, setPageSizeOptions] = React.useState([5, 10, 20])
    // const [pageSize, setPageSize] = useAsyncState(5)
    const onToggleDetailPanel = (id) => {
        // console.log(tableRef)
        const idArray = tableRef.current.state.data
        const newArray = idArray.map(data => data.cliente.props.data.id)
        tableRef.current.onToggleDetailPanel([newArray.indexOf(id)],
            rowData => {
                return (
                    <MaterialTable
                        icons={tableIcons}
                        title="Positioning Actions Column Preview"
                        columns={[
                            { title: 'Interaccion', field: 'interaccion' },
                            { title: 'Estado', field: 'estado' },
                            { title: 'Fecha de Inicio', field: 'startDate', type: 'date' },
                            {
                                title: 'Fecha de Finalizacion',
                                field: 'endDate',
                                type: 'date'
                            },
                        ]}
                        data={[
                            { interaccion: 'Mehmet', estado: 'Baran', startDate: 1987, endDate: 2020 },
                            { interaccion: 'Zerya Betül', estado: 'Baran', startDate: 2017, endDate: 2020 },
                        ]}
                        actions={[
                            {
                                icon: () => <Edit />,
                                tooltip: 'Editar',
                                onClick: (event, rowData) => alert("editar" + rowData.interaccion)
                            },
                            rowData => ({
                                icon: () => <Delete />,
                                tooltip: 'Delete User',
                                onClick: (event, rowData) => confirm("You want to delete " + rowData.interaccion),
                                disabled: rowData.birthYear < 2000
                            }),
                            rowData => ({
                                icon: () => <EventIcon />,
                                tooltip: 'Delete User',
                                onClick: (event, rowData) => confirm("You want to delete " + rowData.interaccion),
                                disabled: rowData.birthYear < 2000
                            })
                        ]}
                        localization={{
                            header: {
                                actions: 'acciones'
                            }
                        }}
                        options={{
                            actionsColumnIndex: -1,
                            pageSize: pageSize,
                            pageSizeOptions: pageSizeOptions
                        }}
                    >
                    </MaterialTable>
                )
            }
        )
    }
    const onToggleDetailPanel2 = (id) => {
        // console.log(tableRef)
        const idArray = tableRef.current.state.data
        const newArray = idArray.map(data => data.cliente.props.data.id)
        tableRef.current.onToggleDetailPanel([newArray.indexOf(id)],
            rowData => {
                return <div>otra gata</div>
            }
        )
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
                    <Button className={classes.interaccionesButton} onClick={() => { onToggleDetailPanel(props.data.id) }}>
                        <Badge badgeContent={props.data.interacciones.whastapp} classes={{ badge: classes.badge }} showZero>
                            <WhatsAppIcon />
                        </Badge>
                    </Button>
                    <Button className={classes.interaccionesButton} onClick={() => { onToggleDetailPanel2(props.data.id) }}>
                        <Badge badgeContent={props.data.interacciones.telefono} classes={{ badge: classes.badge }} showZero>
                            <PhoneIcon />
                        </Badge>
                    </Button>
                    <Button className={classes.interaccionesButton} onClick={() => { onToggleDetailPanel(props.data.id) }}>
                        <Badge badgeContent={props.data.interacciones.correo} classes={{ badge: classes.badge }} showZero>
                            <MailOutlineIcon />
                        </Badge>
                    </Button>
                </div>
            </div>
        )
    }
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    };
    const [data, setData] = React.useState(
        [
            {
                cliente: <Nombre
                    data={
                        {
                            id: 25,
                            tipo: "empresa",
                            nombres: "",
                            apellidos: "",
                            genero: "",
                            empresa: "La iberica",
                            ruc: 212390,
                            telefono: 999999999,
                            correo: 'asd@gmail.com',
                            estado_cliente: 'Prospecto',
                            intencion_compra: 0,
                            numero_interacciones: 6,
                            cantidad_cierres: 1,

                            observacion: "",
                            hora_fecha_creacion: "2020-02-18T17:32:53.000Z",
                            direccion: "",
                            web: null,
                            interacciones: {
                                whatsapp: 1,
                                telefono: 2,
                                correo: 0
                            },
                            t_prospectos: {
                                id: 14,
                                id_cliente: 25,
                                porcentaje_cierre: 0.7,
                                prioridad: 5,
                                hora_fecha_creacion: "2020-02-18T17:32:53.000Z",
                                hora_fecha_contacto: "2020-02-05T05:00:00.000Z",
                                estado_finalizacion: "pendiente",
                                comentario: null,
                                id_estado_embudo_venta: 4
                            }
                        }
                    }
                />,
                prioridad: 5,
                estadoCliente: "Prospecto",
                IntencionCompra: 0,
                NumeroInteracciones: 3,
                CantidadCierres: 1
            },
            {
                cliente: <Nombre
                    data={
                        {
                            id: 25,
                            tipo: "persona",
                            nombres: "Andres Alejandro",
                            apellidos: "Juarez Jimenez",
                            genero: "H",
                            empresa: "",
                            ruc: null,
                            correo: 'and.all.jua.jim@hotmail.com',
                            telefono: 954651219,
                            estado_cliente: 'Prospecto',
                            intencion_compra: 1,
                            numero_interacciones: 9,
                            cantidad_cierres: 3,

                            observacion: "",
                            hora_fecha_creacion: "2020-02-18T17:32:53.000Z",
                            direccion: "",
                            web: null,
                            interacciones: {
                                whatsapp: 1,
                                telefono: 2,
                                correo: 0
                            },
                            t_prospectos: {
                                id: 14,
                                id_cliente: 25,
                                porcentaje_cierre: 0.7,
                                prioridad: 5,
                                hora_fecha_creacion: "2020-02-18T17:32:53.000Z",
                                hora_fecha_contacto: "2020-02-05T05:00:00.000Z",
                                estado_finalizacion: "pendiente",
                                comentario: null,
                                id_estado_embudo_venta: 4
                            }
                        }
                    }
                />,
                prioridad: 5,
                estadoCliente: "Prospecto",
                IntencionCompra: 1,
                NumeroInteracciones: 9,
                CantidadCierres: 3
            },
            {
                cliente: <Nombre
                    data={
                        {
                            id: 25,
                            tipo: "persona",
                            nombres: "Joel",
                            apellidos: "Valdez",
                            genero: "H",
                            empresa: "",
                            ruc: null,
                            correo: 'cvo523@hotmail.com',
                            telefono: 979957017,
                            estado_cliente: 'Cliente',
                            intencion_compra: 2,
                            numero_interacciones: 5,
                            cantidad_cierres: 2,

                            observacion: "",
                            hora_fecha_creacion: "2020-02-18T17:32:53.000Z",
                            direccion: "",
                            web: null,
                            interacciones: {
                                whatsapp: 1,
                                telefono: 2,
                                correo: 0
                            },
                            t_prospectos: {
                                id: 14,
                                id_cliente: 25,
                                porcentaje_cierre: 0.7,
                                prioridad: 10,
                                hora_fecha_creacion: "2020-02-18T17:32:53.000Z",
                                hora_fecha_contacto: "2020-02-05T05:00:00.000Z",
                                estado_finalizacion: "pendiente",
                                comentario: null,
                                id_estado_embudo_venta: 4
                            }
                        }
                    }
                />,
                prioridad: 10,
                estadoCliente: "Cliente",
                IntencionCompra: 2,
                NumeroInteracciones: 5,
                CantidadCierres: 2
            }
        ]
    )
    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
                tableRef={tableRef}
                icons={tableIcons}
                columns={[
                    { title: "Clientes", field: "cliente", cellStyle: { width: '500px', display: 'block' }, sorting: false },
                    { title: "Prioridad", field: "prioridad", type: "numeric", cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } },
                    { title: "Estado", field: "estadoCliente", cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } },
                    // { title: "Intencion de compra", field: "birthCity", lookup: { 34: "İstanbul", 63: "Şanlıurfa" } }
                    { title: "Intencion de compra", field: "IntencionCompra", type: 'numeric', cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } },
                    { title: "Numero de interacciones", field: "NumeroInteracciones", type: 'numeric', cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } },
                    { title: "Cantidad de cierres", field: "CantidadCierres", type: 'numeric', cellStyle: { textAlign: 'center' }, headerStyle: { textAlign: 'center' } }
                ]}
                data={query => {
                    console.log(query)
                    return new Promise((resolve, reject) => {
                        axios.post(BackUrl + 'vista_clientes/obtener', { query, token: userLogged() }).then(res => {
                            console.log(res)
                            const newData = res.data.content.map(data => ({
                                cliente: <Nombre
                                    data={data}
                                />,
                                prioridad: data.ultimo_prospecto.prioridad,
                                estadoCliente: data.estado_cliente,
                                IntencionCompra: data.intencion_compra,
                                NumeroInteracciones: data.numero_interacciones,
                                CantidadCierres: data.cantidad_cierres
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
                // data={data}
                title="Demo Title"
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
            // detailPanel={rowData => {
            //     return (
            //         <Button onClick={() => {
            //             tableRef.current.onToggleDetailPanel(
            //                 [rowData.tableData.id],
            //                 tableRef.current.props.detailPanel
            //             )
            //         }} >Close</Button>
            //     )
            // }}
            // detailPanel={[{
            //     icon: null,
            //     render: rowData => (
            //         <iframe
            //             width="100%"
            //             height="315"
            //             src="https://www.youtube.com/embed/C0DPdy98e4c"
            //             frameborder="0"
            //             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            //             allowFullScreen
            //         />
            //     )
            // }]}
            />
            <button onClick={() => { console.log(tableRef) }}>Print table ref</button>
        </div >
    );
}
