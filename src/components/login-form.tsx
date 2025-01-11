"use client"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {Input} from "@nextui-org/input";
import { Label } from "../components/ui/label"
import {Spinner} from "@nextui-org/spinner";


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from 'next/navigation';

const schema = yup.object().shape({
  customernumber: yup.number().min(6, "Ungültige Nummber").required("Nummer ist erforderlich"),
  customerpin: yup.number().min(6, "Mindestens 6 Zeichen").required("Pin ist erforderlich"),
});




export function LoginForm(){
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const onSubmit = async (data: { customernumber: number; customerpin: number }) => {
    console.log(data.customernumber);
    const response = await fetch("/api/Auth2/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("token", result.token);
      router.push("/dashboard"); // Weiterleitung nach Dashboard
    } else {
      console.error("Fehler bei der Anmeldung");
    }
  };

    return (
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center m-5">
              <CardTitle className="text-xl">
                <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">
                  pLatin
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                  <div className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="customernumber">Customer Number</Label>

                      <Input
                          id="customernumber"
                          required placeholder="123456"
                          type="number"
                          {...register("customernumber")}
                      />
                      {errors.customernumber && <p>{errors.customernumber.message}</p>}

                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="customerpin">Pin</Label>
                        <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                          Forgot your pin?
                        </a>
                      </div>
                      <Input
                          id="customerpin"
                          required placeholder="123456"
                          type="password"
                          {...register("customerpin")}
                      />
                      {errors.customerpin && <p>only numbers!</p>}

                    </div>
                    <Button type="submit" className="w-full">
                      Login
                      <Spinner color="default" labelColor="foreground"/>
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div
              className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </div>
        </div>
    )
  }


