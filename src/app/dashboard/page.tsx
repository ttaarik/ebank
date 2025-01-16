"use client";
import { MainNav } from "src/components/main-nav";
import { UserNav } from "src/components/user-nav";
import { CalendarDateRangePicker } from "src/components/date-range-picker";
import { Overview } from "src/components/overview";
import { RecentSales } from "src/components/recent-sales";
import { Button } from "src/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "src/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs";
import { Download, Users, CreditCard, Activity } from "lucide-react";
import { MobileNav } from "src/components/mobile-nav";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {jwtDecode} from "jwt-decode";
import LineChart from "src/components/LineChart";
import DashboardLineChart from "src/components/LineChart";
import { Expanses } from "@/src/components/expanses";

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<{ customerId: number} | null>(null);

    const validateToken = () => {
        const token = localStorage.getItem("token");
        if (!token) return false;

        try {
            const decodedToken: { exp: number } = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            return decodedToken.exp > currentTime; // Token ist gültig, wenn es nicht abgelaufen ist
        } catch (error) {
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        router.push("/");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const isValid = validateToken();

        if (isValid && token) {
            const decodedUser = jwtDecode<{ customerId: number;}>(token);
            setUser(decodedUser);

            async function getData() {
                const url = `https://localhost:7119/api/Users/${decodedUser.customerId}`;
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                    }

                    const json = await response.json();
                    console.log(json);
                } catch (error) {
                }
            }

        } else {
            localStorage.removeItem("token");
            router.push("/");
        }
    }, [router]);

    if (!user) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="flex flex-col">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MobileNav />
                    <MainNav className="mx-6 hidden md:flex" />
                    <div className="ml-auto flex items-center space-x-6">
                        <Link
                            href="/dashboard"
                            className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/accounts"
                            className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Account
                        </Link>
                        <Link
                            href="/cards"
                            className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Card
                        </Link>
                        <Link
                            href="/subscription"
                            className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Subscription
                        </Link>
                        <Link
                            href="/loan"
                            className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Loan
                        </Link>
                        <Link
                            href="/transaction"
                            className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Transaction
                        </Link>
                        <UserNav />
                        {/*<Button onClick={logout}>Logout</Button>*/}
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Balance</CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">$45,231.89</div>
                                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+2,350</div>
                                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Sparbuch</CardTitle>
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+12,234</div>
                                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Debit Card</CardTitle>
                                    <Activity className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+573</div>
                                    <p className="text-xs text-muted-foreground">+201 since last hour</p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="col-span-2"><DashboardLineChart/></div>
                    <div><Expanses/></div>
                </div>
            </div>
        </div>
    );
}
