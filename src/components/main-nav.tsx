import Link from "next/link"

import { cn } from "src/lib/utils"

export function MainNav({
                            className,
                            ...props
                        }: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav className={cn("flex items-center space-x-2 lg:space-x-6", className)} {...props}>
            <Link href="/" className="text-xs sm:text-sm font-medium transition-colors hover:text-primary">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl">
                    pLatin
                </h1>
            </Link>
        </nav>
    )
}

