type TProps = {
    label: string,
    type: "text" | "password",
    placeholder?: string
}
const TextBox = ({ label, type, placeholder }: TProps) => {
    return (
        <label className="font-semibold text-gray-800">
            {label}
            <input
                className="border-b-2 border-gray-200 block focus:outline-none focus:border-blue-500 mb-6 w-full"
                type={type}
                placeholder={placeholder}
            />
        </label>
    )
}
export default TextBox;