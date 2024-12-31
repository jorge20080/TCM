import { Link } from "react-router-dom";

type TProps = {
    className?: string
}
const Logo = ({ className }: TProps) => {
    return <Link to="/" className={`grid text-3xl tracking-[4px] w-fit ${className}`}>
        TCM
        <span className=" text-xs -translate-y-1 text-center tracking-[1.5px] bg-blue-500 text-white rounded-full px-1">QUALITY</span>
    </Link>
}
export default Logo;