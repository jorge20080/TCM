import { NavLink } from "react-router-dom";

type TProps = {
    children: string,
    href: string,
    className?: string
}

const NavigationLink = ({ children, href, className }: TProps) => {
    return (
        <NavLink to={href} className={({ isActive }) => isActive ? "text-blue-500 font-bold " + className : "font-bold " + className}>{children}</NavLink>
    )
}
export default NavigationLink;