type TProps = {
    children: string
}
const Button = ({ children }: TProps) => {
    return (
        <button className="bg-blue-500 text-white w-full py-1.5">{children}</button>
    )
}
export default Button;