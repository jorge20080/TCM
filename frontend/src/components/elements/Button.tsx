type TProps = {
    children: string,
    className?: string
}
const Button = ({ children, className }: TProps) => {
    return (
        <button className={`bg-blue-500 text-white px-6 py-1.5 ${className}`}>{children}</button>
    )
}
export default Button;