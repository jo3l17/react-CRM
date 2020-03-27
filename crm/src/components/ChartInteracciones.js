import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text, Customized, BarChart,
} from 'recharts';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TopSellers from './TopSellers';
import Summary from './Summary';

export default function ChartInteracciones() {
    const [data, setData] = React.useState([
        {
            name: 'Page A', ventas: 4000, conversiones: 2400, contactos: 2400,
        },
        {
            name: 'Page B', ventas: 3000, conversiones: 1398, contactos: 2210,
        },
        {
            name: 'Page C', ventas: 2000, conversiones: 4000, contactos: 2290,
        },
        {
            name: 'Page D', ventas: 2780, conversiones: 3908, contactos: 2000,
        },
        {
            name: 'Page E', ventas: 1890, conversiones: 4800, contactos: 2181,
        },
        {
            name: 'Page F', ventas: 2390, conversiones: 3800, contactos: 2500,
        },
        {
            name: 'Page G', ventas: 3490, conversiones: 4300, contactos: 2100,
        },
    ])
    const randomData = () => {
        setData([
            {
                name: 'Page A', ventas: Math.floor(Math.random() * 10) * 1000, conversiones: Math.floor(Math.random() * 10) * 1000, contactos: 5000,
            },
            {
                name: 'Page B', ventas: Math.floor(Math.random() * 10) * 1000, conversiones: Math.floor(Math.random() * 10) * 1000, contactos: 2210,
            },
            {
                name: 'Page C', ventas: Math.floor(Math.random() * 10) * 1000, conversiones: Math.floor(Math.random() * 10) * 1000, contactos: 2290,
            },
            {
                name: 'Page D', ventas: Math.floor(Math.random() * 10) * 1000, conversiones: Math.floor(Math.random() * 10) * 1000, contactos: 2000,
            },
            {
                name: 'Page E', ventas: Math.floor(Math.random() * 10) * 1000, conversiones: Math.floor(Math.random() * 10) * 1000, contactos: 2181,
            },
            {
                name: 'Page F', ventas: Math.floor(Math.random() * 10) * 1000, conversiones: Math.floor(Math.random() * 10) * 1000, contactos: 2500,
            },
            {
                name: 'Page G', ventas: Math.floor(Math.random() * 10) * 1000, conversiones: Math.floor(Math.random() * 10) * 1000, contactos: 2100,
            },
        ])
    }
    const [filters, setFilters] = React.useState({
        typeDate: 'S',
        canal: 'A'
    })
    const handleFilters = (value, prop) => {
        const newFilters = {
            ...filters,
            [prop]: value
        }
        setFilters(newFilters)
    }
    const Filters = () => {
        return (
            <Grid container >
                <Grid item xs={12}>
                    <FormControl style={{ margin: 5, width: 100 }}>
                        {/* <InputLabel>Semanal</InputLabel> */}
                        <Select
                            value={filters.typeDate}
                            onChange={(event) => { handleFilters(event.target.value, 'typeDate') }}
                        >
                            <MenuItem value={"S"}>Semanal</MenuItem>
                            <MenuItem value={"M"}>Mensual</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{ margin: 5, width: 170 }}>
                        {/* <InputLabel>Canal</InputLabel> */}
                        <Select
                            value={filters.canal}
                            onChange={(event) => { handleFilters(event.target.value, 'canal') }}
                        >
                            <MenuItem value={"A"}>Todos los canales</MenuItem>
                            <MenuItem value={"L"}>Llamada</MenuItem>
                            <MenuItem value={"W"}>Whatsapp</MenuItem>
                            <MenuItem value={"E"}>Email</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        )
    }
    return (
        <>
            <button onClick={() => { randomData() }}>random data</button>
            <Filters />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <ResponsiveContainer width="100%" height='100%' minHeight="300px" >
                        <LineChart
                            data={data}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="ventas" stroke="#8884d8" activeDot={{ r: 8 }} animationDuration={250} />
                            <Line type="monotone" dataKey="conversiones" stroke="#82ca9d" animationDuration={250} />
                            <Line type="monotone" dataKey="contactos" stroke="#4e4e4e" animationDuration={250} />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div>
                        <TopSellers />
                    </div>
                    <div>
                        <Summary timeType={'Mensual'} />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
