'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/actions/auth.actions";
import { Button } from "./ui/button";

const UserDropdown = ({ user }: { user: User }) => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="ghost" 
                    className="flex items-center gap-3 text-zinc-400 hover:bg-[#18181f] transition-colors duration-200"
                >
                    <Avatar className="h-8 w-8 ring-1 ring-zinc-800/80">
                        <AvatarImage src={user?.image} />
                        <AvatarFallback className="bg-[#0C0C10] text-zinc-200 font-medium border border-zinc-800">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-sm font-medium text-zinc-200">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
                align="end"
                className="w-[280px] p-2 bg-[#0C0C10] text-zinc-200 border border-zinc-800 shadow-xl shadow-black/20 backdrop-blur-sm"
            >
                <DropdownMenuLabel className="p-0">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800/50 transition-colors duration-200">
                        <Avatar className="h-10 w-10 ring-1 ring-zinc-800/80">
                            <AvatarImage src={user?.image} />
                            <AvatarFallback className="bg-[#0C0C10] text-zinc-200 font-medium border border-zinc-800">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-medium text-zinc-200">
                                {user.name}
                            </span>
                            <span className="text-xs text-zinc-400">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="my-2 bg-zinc-800/80" />
                <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-red-400 hover:text-red-300 focus:text-red-300 cursor-pointer rounded-md transition-colors duration-200 hover:bg-red-950/30 focus:bg-red-950/30"
                >
                    <LogOut className="h-4 w-4" />
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown;