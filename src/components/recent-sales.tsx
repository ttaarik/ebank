import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "src/components/ui/avatar"

export function RecentSales() {
    return (
        <div className="space-y-4 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
                <div className="flex items-center">
                    <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                        <AvatarImage alt="Avatar" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Olivia Martin</p>
                        <p className="text-sm text-muted-foreground">
                            olivia.martin@email.com
                        </p>
                    </div>
                </div>
                <div className="sm:ml-auto font-medium">+$1,999.00</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
                <div className="flex items-center">
                    <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                        <AvatarImage alt="Avatar" />
                        <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Jackson Lee</p>
                        <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                    </div>
                </div>
                <div className="sm:ml-auto font-medium">+$39.00</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
                <div className="flex items-center">
                    <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                        <AvatarImage alt="Avatar" />
                        <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                        <p className="text-sm text-muted-foreground">
                            isabella.nguyen@email.com
                        </p>
                    </div>
                </div>
                <div className="sm:ml-auto font-medium">+$299.00</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
                <div className="flex items-center">
                    <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                        <AvatarImage alt="Avatar" />
                        <AvatarFallback>WK</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">William Kim</p>
                        <p className="text-sm text-muted-foreground">will@email.com</p>
                    </div>
                </div>
                <div className="sm:ml-auto font-medium">+$99.00</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
                <div className="flex items-center">
                    <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                        <AvatarImage alt="Avatar" />
                        <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Sofia Davis</p>
                        <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
                    </div>
                </div>
                <div className="sm:ml-auto font-medium">+$39.00</div>
            </div>
        </div>
    )
}

