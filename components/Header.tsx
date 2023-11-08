import { getServerSession } from "next-auth";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import Logo from "./logo";
import { authOptions } from "@/auth";
import { MessagesSquareIcon } from "lucide-react";
import Link from "next/link";


async function Header() {
    const session = await getServerSession(authOptions);

    return ( 
        <header className="sticky top-0 z-50 bg-white dark:bg-grey-900">
            <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-grey-900 max-w-7xl mx-auto">
                <Logo />

                <div className="flex-1 flex items-center justify-end space-x-4">
                    {/* Language select */}

                    {session ? (
                        <>
                            <Link href={'/chat'} prefetch={false}>
                                <MessagesSquareIcon className="text-black dark:text-white" />
                            </Link>
                        </>
                    ) : (
                        <Link href="pricing" prefetch={false}>Pricing</Link>
                    )}

                    <DarkModeToggle />
                    <UserButton />
                </div>
            </nav>

            {/* Upgrade banner */}
        </header>
  );
}

export default Header