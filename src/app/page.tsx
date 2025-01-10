"use client"
import { useEffect } from 'react';
import { LoginForm } from 'src/components/login-form';
import { toast } from "sonner";


export default function Home() {
  useEffect(() => {
    fetch('https://e-banking-api.onrender.com/WeatherForecast')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          toast("Fetch was successfull");
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }, []);

  return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
          <div className="flex w-full max-w-sm flex-col gap-6">
              <a href="#" className="flex items-center gap-2 self-center font-medium">

              </a>
                <LoginForm/>
          </div>
      </div>
  );
}
