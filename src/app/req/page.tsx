"use client"
import { useEffect } from 'react';

export default function Req() {
    useEffect(() => {
        fetch('https://e-banking-api.onrender.com/WeatherForecast')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='text-center mt-[50vh]'>
            <h1>Hi</h1>
        </div>
    );
}
