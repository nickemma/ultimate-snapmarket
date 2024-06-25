import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";

export default async function Nav() {
  const session = await auth();

  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <Logo />
            </Link>
          </li>
          {!session ? (
            <Button asChild>
              <Link className="flex gap-2" href="/auth/login">
                <LogIn size={16} />
                <span>Login</span>
              </Link>
            </Button>
          ) : (
            <li>
              <UserButton expires={session?.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
