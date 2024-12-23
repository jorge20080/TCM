type TProps = {
    label: string,
    type: "text" | "password",
    placeholder?: string,
    name: string
}
const TextBox = ({ label, type, placeholder, name }: TProps) => {
    return (
        <label className="font-semibold text-gray-800">
            {label}
            <input
                className="border-b-2 font-normal border-gray-200 block focus:outline-none focus:border-blue-500 mb-6 w-full"
                type={type}
                placeholder={placeholder}
                name={name}
            />
        </label>
    )
}
export default TextBox;