import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import Logo from "./logo";

function Header() {
  return ( 
    <header className="sticky top-0 z-50 bg-white dark:bg-grey-900">
        <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-grey-900 max-w-7xl mx-auto">
            <Logo />

            <div className="flex-1 flex items-center justify-end space-x-4">
                {/* Language select */}
                {/*  Session && {}
                    ....
                */}
                <DarkModeToggle />
                <UserButton />
            </div>
        </nav>

        {/* Upgrade banner */}
    </header>
  );
}

export default Header