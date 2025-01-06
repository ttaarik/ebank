"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 3500,
    },
    {
        name: "Mar",
        total: 2500,
    },
    {
        name: "Apr",
        total: 4500,
    },
    {
        name: "May",
        total: 1250,
    },
    {
        name: "Jun",
        total: 3250,
    },
    {
        name: "Jul",
        total: 4000,
    },
    {
        name: "Aug",
        total: 3750,
    },
    {
        name: "Sep",
        total: 4250,
    },
    {
        name: "Oct",
        total: 4750,
    },
    {
        name: "Nov",
        total: 2750,
    },
    {
        name: "Dec",
        total: 3750,
    },
]

export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={250} minHeight={250}>
            <BarChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                />
                <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

