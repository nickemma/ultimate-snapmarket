import { auth } from "@/server/auth"
import { UserButton } from "./user-button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function Nav() {
    const session = await auth();

    return (
        <header className="bg-slate-500 py-4">
            <nav>
                <ul className="flex justify-between">
                    <li>Logo</li>
                    {!session ? (
                      <Button asChild>
                        <Link className="flex gap-2" href="/auth/login">
                        <LogIn size={16}/>
                        <span>Login</span>
                        </Link>
                      </Button>
                    ): <li><UserButton expires={session?.expires} user={session?.user}/></li>}
                </ul>
            </nav>
        </header>
    )
}