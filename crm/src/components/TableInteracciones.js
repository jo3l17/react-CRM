import React from 'react'
import MaterialTable, { MTableHeader } from 'material-table'
import { Button } from '@material-ui/core'

export default function TableInteracciones() {
    const ToolbarTitle = (props) => {
        // console.log(props.idUltimoPropsecto)
        return (<div><Button variant={'outlined'} onClick={() => { handleOpenAddInteraccion(props.idUltimoPropsecto) }} className={`${classes.interaccionesTableTitleButton} ${classes.interaccionesTableAgregar}`}
            startIcon={<DescriptionIcon />}>Agregar</Button> <Button variant={'outlined'} className={`${classes.interaccionesTableTitleButton} ${classes.interaccionesTableGenerar}`}
                startIcon={<AddIcon />}>Interactuar</Button></div>)
    }
    return (
        <MaterialTable
            tableRef={tableRefWhatsapp}
            style={styles.interaccionesTable}
            icons={tableIcons}
            title={<ToolbarTitle idUltimoPropsecto={rowData.cliente.props.data.ultimo_prospecto.id} />}
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
            data={query => {
                return new Promise((resolve, reject) => {
                    axios.post(BackUrl + 'vista_clientes/interacciones/obtener_por_canal', { query, token: userLogged(), idCliente: id, canal: consulta }).then(res => {
                        console.log(res)
                        const newData = res.data.content.map(data => ({
                            interaccion: data.comentario,
                            estado: <Estado estado={data.estado_interaccion} />,
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
                pageSize: pageSize,
                pageSizeOptions: pageSizeOptions
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
