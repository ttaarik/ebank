"use client"
import { useEffect } from 'react';
import { LoginForm } from 'src/components/login-form';
import { toast } from "sonner";


export default function Req() {
  useEffect(() => {
    fetch('https://e-banking-api.onrender.com/WeatherForecast')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          toast("Nora Maus");
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }, []);

  return (
      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
          <div className="w-full max-w-sm md:max-w-3xl">
              <LoginForm/>
          </div>
      </div>
  );
}
