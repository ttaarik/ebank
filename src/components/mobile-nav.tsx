"use client"

import { Button } from "src/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "src/components/ui/sheet"
import { Menu } from 'lucide-react'
import { MainNav } from "./main-nav"

export function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] pt-10">
                <MainNav className="flex flex-col space-y-4" />
            </SheetContent>
        </Sheet>
    )
}

