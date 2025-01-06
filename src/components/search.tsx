import { Input } from "src/components/ui/input"
import { SearchIcon } from 'lucide-react'

export function Search() {
    return (
        <div className="relative">
            <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search..."
                className="w-[150px] sm:w-[200px] pl-8"
            />
        </div>
    )
}

