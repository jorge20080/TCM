type TProps = {
    className?: string
}
const Logo = ({ className }: TProps) => {
    return <h2 className={`text-2xl font-bold ${className}`}>TCM</h2>
}
export default Logo;