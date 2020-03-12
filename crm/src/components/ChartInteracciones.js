import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { Grid } from '@material-ui/core';

export default function ChartInteracciones() {
    const [data, setData] = React.useState([
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
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
                name: 'Page A', uv: Math.floor(Math.random() * 10)*1000, pv: Math.floor(Math.random() * 10)*1000, amt: 5000,
            },
            {
                name: 'Page B', uv: Math.floor(Math.random() * 10)*1000, pv: Math.floor(Math.random() * 10)*1000, amt: 2210,
            },
            {
                name: 'Page C', uv: Math.floor(Math.random() * 10)*1000, pv: Math.floor(Math.random() * 10)*1000, amt: 2290,
            },
            {
                name: 'Page D', uv: Math.floor(Math.random() * 10)*1000, pv: Math.floor(Math.random() * 10)*1000, amt: 2000,
            },
            {
                name: 'Page E', uv: Math.floor(Math.random() * 10)*1000, pv: Math.floor(Math.random() * 10)*1000, amt: 2181,
            },
            {
                name: 'Page F', uv: Math.floor(Math.random() * 10)*1000, pv: Math.floor(Math.random() * 10)*1000, amt: 2500,
            },
            {
                name: 'Page G', uv: Math.floor(Math.random() * 10)*1000, pv: Math.floor(Math.random() * 10)*1000, amt: 2100,
            },
        ])
    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <ResponsiveContainer width="100%" height={350}>
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
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" animationDuration={250}/>
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div>
                        <h3>Top vendedores</h3>
                        <ol>
                            <li>Vendedor 1</li>
                            <li>Vendedor 2</li>
                            <li>Vendedor 3</li>
                            <li>Vendedor 4</li>
                        </ol>
                    </div>
                    <div>
                        <h3>Resumen Mensual</h3>
                        <ul>
                            <li>Vendedor 1</li>
                            <li>Vendedor 2</li>
                            <li>Vendedor 3</li>
                            <li>Vendedor 4</li>
                        </ul>
                    </div>
                    <button onClick={randomData}>Randomize data</button>
                </Grid>
            </Grid>
        </>
    );
}
