import { Link } from "react-router-dom";

type TProps = {
    className?: string
}
const Logo = ({ className }: TProps) => {
    return <Link to="/" className={`text-3xl font-bold block ${className}`}>TCM</Link>
}
export default Logo;