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
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 4000, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ])
    const randomData = () => {
        setData([
            {
                name: 'Page A', uv: Math.floor(Math.random() * 10) * 1000, pv: Math.floor(Math.random() * 10) * 1000, amt: 5000,
            },
            {
                name: 'Page B', uv: Math.floor(Math.random() * 10) * 1000, pv: Math.floor(Math.random() * 10) * 1000, amt: 2210,
            },
            {
                name: 'Page C', uv: Math.floor(Math.random() * 10) * 1000, pv: Math.floor(Math.random() * 10) * 1000, amt: 2290,
            },
            {
                name: 'Page D', uv: Math.floor(Math.random() * 10) * 1000, pv: Math.floor(Math.random() * 10) * 1000, amt: 2000,
            },
            {
                name: 'Page E', uv: Math.floor(Math.random() * 10) * 1000, pv: Math.floor(Math.random() * 10) * 1000, amt: 2181,
            },
            {
                name: 'Page F', uv: Math.floor(Math.random() * 10) * 1000, pv: Math.floor(Math.random() * 10) * 1000, amt: 2500,
            },
            {
                name: 'Page G', uv: Math.floor(Math.random() * 10) * 1000, pv: Math.floor(Math.random() * 10) * 1000, amt: 2100,
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
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} animationDuration={250} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" animationDuration={250} />
                            <Line type="monotone" dataKey="amt" stroke="#4e4e4e" animationDuration={250} />
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
