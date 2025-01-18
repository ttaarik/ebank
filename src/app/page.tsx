"use client"
import { LoginForm } from 'src/components/login-form';

export default function Home() {
  return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
          <div className="flex w-full max-w-sm flex-col gap-6">
              <a href="#" className="flex items-center gap-2 self-center font-medium">
              </a>
              <LoginForm/>
          </div>
          <script src="path/to/chartjs/dist/chart.umd.js"></script>
      </div>
  );
}
