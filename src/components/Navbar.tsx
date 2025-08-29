import {LogOut, Moon, Settings, SquareMenu, User} from "lucide-react";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className={"flex items-center justify-between p-4"}>
      {/*LEFT*/}
      collapseButton

      {/*Right*/}
      <div className="flex items-center gap-4">
        <Link href={"/"}>Dashboard</Link>

        <Moon/>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/70487766?v=4"/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={15}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <User className={"h-[1.2rem] w-[1.2rem] mr-2"}/> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className={"h-[1.2rem] w-[1.2rem] mr-2"}/> Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className={"h-[1.2rem] w-[1.2rem] mr-2"}/> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

         <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size={"icon"}>
              <SquareMenu />
              <span className={"sr-only"}>Open Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={15}>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
