import Link from "next/link"

import { cn } from "src/lib/utils"

export function MainNav({
                            className,
                            ...props
                        }: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-2 lg:space-x-6", className)}
            {...props}
        >
            <Link
                href="/"
                className="text-xs sm:text-sm font-medium transition-colors hover:text-primary"
            >
                Overview
            </Link>
            <Link
                href="/customers"
                className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Customers
            </Link>
            <Link
                href="/products"
                className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Products
            </Link>
            <Link
                href="/settings"
                className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Settings
            </Link>
        </nav>
    )
}

