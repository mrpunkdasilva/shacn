import {Moon} from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className={"flex items-center justify-between p-4"}>
            {/*LEFT*/}
            collapseButton

            {/*Right*/}
            <div className="flex items-center gap-4">
                <Link href={"/"}>Dashboard</Link>
                <Moon/>
            </div>
        </nav>
    )
}
