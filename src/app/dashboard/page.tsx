"use client"
import { MainNav } from "src/components/main-nav"
import { Search } from "src/components/search"
import { UserNav } from "src/components/user-nav"
import { CalendarDateRangePicker } from "src/components/date-range-picker"
import { Overview } from "src/components/overview"
import { RecentSales } from "src/components/recent-sales"
import { Button } from "src/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "src/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs"
import { Download, Users, CreditCard, Activity } from 'lucide-react'
import { MobileNav } from "src/components/mobile-nav"
import Link from "next/link";
import {useEffect} from "react";
import {router} from "next/client";
import {jwtDecode} from "jwt-decode";

export default function DashboardPage() {
    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                const response = await fetch("/api/auth/validate", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    router.push("/login"); // Ungültiger Token, Weiterleitung
                }
            } else {
                router.push("/login"); // Kein Token, Weiterleitung
            }
        };

        validateToken();
    }, []);

    const token = localStorage.getItem("token");
    if (token) {
        const user = jwtDecode<{ customerId: number; firstname: string }>(token);
        console.log(`Welcome, ${user.firstname}`);
    }

    return (
        <div className="flex flex-col">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MobileNav />
                    <MainNav className="mx-6 hidden md:flex" />
                    <div className="ml-auto flex items-center space-x-6">
                        <Link href="/dashboard" className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Dashboard
                        </Link>
                        <Link href="/accounts" className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Account
                        </Link>
                        <Link href="/cards" className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Card
                        </Link>
                        <Link href="/subscription" className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Subscription
                        </Link>
                        <Link href="/loan" className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Loan
                        </Link>
                        <Link href="/transaction" className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Transaction
                        </Link>
                        <UserNav/>
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <div className="flex items-center space-x-2">
                        <CalendarDateRangePicker />
                        <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                        </Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="reports">Reports</TabsTrigger>
                        <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Revenue
                                    </CardTitle>
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
                                    <p className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Subscriptions
                                    </CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+2,350</div>
                                    <p className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+12,234</div>
                                    <p className="text-xs text-muted-foreground">
                                        +19% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Active Now
                                    </CardTitle>
                                    <Activity className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+573</div>
                                    <p className="text-xs text-muted-foreground">
                                        +201 since last hour
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>
                                        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">
                                            pLatin
                                        </h1>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                <Overview />
                                </CardContent>
                            </Card>
                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                    <CardDescription>
                                        You made 265 sales this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentSales />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

