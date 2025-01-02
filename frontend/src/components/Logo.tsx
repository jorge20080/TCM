import { Link } from "react-router-dom";

type TProps = {
    className?: string
}
const Logo = ({ className }: TProps) => {
    return <Link to="/" className={`grid tracking-widest text-3xl font-bold  w-fit ${className}`}>
        TCM
    </Link>
}
export default Logo;