import React from 'react'
import axios from 'axios'
import MaterialTable, { MTableHeader } from 'material-table'
import { userLogged } from '../services/UserService'
import ToolbarTitle from './ToolbarTitle'
import { BackUrl } from '../utilities/const';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import EventIcon from '@material-ui/icons/Event';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import useStyles from '../styles/TableInteracciones';
import { withStyles } from '@material-ui/core'
import { useConfirmation } from '../services/ConfimationService';

function TableInteracciones(props) {
    const confirm = useConfirmation();
    const { rowData, styles, tableRef, icons, consulta, id, classes } = props;
    const [canal, setCanal] = React.useState(consulta)
    const Estado = function (props) {
        if (props.estado == 1) {
            return (
                <SentimentSatisfiedAltIcon style={{ color: 'green' }} />
            )
        } else if (props.estado == 0) {
            return (
                <SentimentSatisfiedIcon style={{ color: 'gray' }} />
            )
        } else {
            return (
                <SentimentVeryDissatisfiedIcon style={{ color: 'red' }} />
            )
        }
    }
    const confirmar = (id) => {
        confirm({
            variant: "danger",
            catchOnCancel: true,
            title: 'Seguro que quieres eliminar esta interaccion',
            description: 'Si borras esta interaccion ya fuiste'
        })
            .then(() => {
                axios.post(BackUrl + 'interacciones/eliminar', {
                    id,
                    token: userLogged()
                }).then(res => {
                    refreshData()
                    console.log(res)
                }).catch(error => {
                    refreshData()
                    console.log(error)
                })
            })
            .catch(() => { console.log('nel prro') })
    }
    const refreshData = () => {
        return tableRef.current && tableRef.current.onQueryChange()
    }
    return (
        <MaterialTable
            tableRef={tableRef}
            style={styles}
            icons={icons}
            title={<ToolbarTitle refreshData={refreshData} idUltimoPropsecto={rowData.cliente.props.data.ultimo_prospecto.id} canal={canal} />}
            columns={[
                { title: 'Interaccion', field: 'interaccion' },
                { title: 'Estado', field: 'estado' },
                { title: 'Fecha de Inicio', field: 'startDate', type: 'datetime' },
                {
                    title: 'Fecha de Finalizacion',
                    field: 'endDate',
                    type: 'datetime'
                },
            ]}
            data={query => {
                setCanal(query.tipo ? query.tipo : consulta)
                return new Promise((resolve, reject) => {
                    axios.post(BackUrl + 'vista_clientes/interacciones/obtener_por_canal', { query, token: userLogged(), idCliente: id, canal: query.tipo ? query.tipo : consulta }).then(res => {
                        console.log(res)
                        const newData = res.data.content.map(data => ({
                            interaccion: data.comentario,
                            estado: <Estado estado={data.estado_interaccion} id={data.id} />,
                            startDate: data.hora_fecha_inicio,
                            endDate: data.hora_fecha_termino
                        }))
                        resolve({
                            data: newData,
                            page: res.data.page,
                            totalCount: res.data.totalCount
                        })
                    }).catch(error => {
                        console.log(error)
                    })
                })
            }}
            actions={[
                {
                    icon: () => <Edit />,
                    tooltip: 'Editar',
                    onClick: (event, rowData) => alert("editar" + rowData.interaccion)
                },
                rowData => ({
                    icon: () => <Delete />,
                    tooltip: 'Delete User',
                    onClick: (event, rowData) => {
                        confirmar(rowData.estado.props.id);
                        console.log(rowData)
                    },
                }),
                rowData => ({
                    icon: () => <EventIcon className={rowData.endDate ? '' : classes.error} />,
                    tooltip: 'Delete User',
                    onClick: (event, rowData) => alert("You want to delete " + rowData.interaccion),
                })
            ]}
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
                },
                header: {
                    actions: 'acciones'
                }
            }}
            options={{
                actionsColumnIndex: -1,
                pageSize: 5,
                pageSizeOptions: [3, 5, 10]
            }}
            components={{
                Header: props => (
                    <MTableHeader style={styles.interaccionesTableHeader} {...props} />
                )
            }}
        >
        </MaterialTable>
    )
}
export default withStyles(useStyles)(TableInteracciones)