import React, { forwardRef, useEffect } from 'react'
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
import MaterialTable from "material-table";
import axios from 'axios'
import { BackUrl } from '../utilities/const';

export default function Table() {
    // useEffect(() => {
    //     axios.get(BackUrl + 'clientes/obtener/1').then(res => {
    //         // console.log(res.data)
    //         console.log(res.data.content)
    //         console.log(JSON.stringify(res.data.content[24]))
    //         console.log(JSON.stringify(res.data.content[0]))
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, []);
    const Nombre = function (props) {
        return (
            <div>
                <h3 style={{ margin: 0 }}>{props.data.tipo == 'persona' ? props.data.nombres + ' ' + props.data.apellidos : props.data.empresa + ' ' + props.data.ruc}<br /></h3>
                Telefono:{props.data.telefono}<br />
                Correo:{props.data.correo}
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
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
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
                icons={tableIcons}
                columns={[
                    { title: "Clientes", field: "cliente" },
                    { title: "Prioridad", field: "prioridad", type: "numeric" },
                    { title: "Estado", field: "estadoCliente" },
                    // { title: "Intencion de compra", field: "birthCity", lookup: { 34: "İstanbul", 63: "Şanlıurfa" } }
                    { title: "Intencion de compra", field: "IntencionCompra", type: 'numeric' },
                    { title: "Numero de interacciones", field: "NumeroInteracciones", type: 'numeric' },
                    { title: "Cantidad de cierres", field: "CantidadCierres", type: 'numeric' }
                ]}
                data={data}
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
            />
        </div>
    );
}
