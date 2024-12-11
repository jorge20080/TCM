import { NavLink } from "react-router-dom";

type TProps = {
    children: string,
    href: string
}

const NavigationLink = ({ children, href }: TProps) => {
    return (
        <NavLink to={href} className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "font-bold"}>{children}</NavLink>
    )
}
export default NavigationLink;