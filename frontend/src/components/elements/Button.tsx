type TProps = {
    children: string,
    className?: string,
    disabled?: boolean
}
const Button = ({ children, className, disabled }: TProps) => {
    return (
        <button disabled={disabled} className={`bg-blue-500 text-white px-6 py-1.5 ${className} ${disabled ? "bg-gray-300" : null}`}>{children}</button>
    )
}
export default Button;