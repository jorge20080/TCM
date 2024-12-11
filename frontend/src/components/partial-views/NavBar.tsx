import NavigationLink from "../NavLink";

const NavBar = () => {
    return (
        <nav className="flex justify-between px-10 mb-6 items-center py-4">
            <h2 className="text-3xl font-extrabold">LOGO</h2>
            <ul className="flex gap-8">
                <li>
                    <NavigationLink href="/">Home</NavigationLink>
                </li>
                <li>
                    <NavigationLink href="/test">Test</NavigationLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;