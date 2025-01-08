type TProps = {
    children: string,
    className?: string,
    disabled?: boolean
    [key: string]: string | undefined | number | boolean | object
}
const Button = ({ children, className, disabled, ...rest }: TProps) => {
    return (
        <button {...rest} disabled={disabled} className={`bg-blue-500 text-white px-6 py-1.5 rounded ${className} ${disabled ? "bg-gray-300" : null}`}>
            {children}
        </button>
    )
}
export default Button;