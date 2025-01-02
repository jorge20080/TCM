type TProps = {
    label: string,
    type: "text" | "password",
    placeholder?: string,
    name: string
    error?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & { [rest: string]: any }

const TextBox = (props: TProps) => {
    const { label, type, placeholder, name, error, ...rest } = props;
    return (
        <label className="font-semibold text-gray-800">
            {label}
            {error && <p className="text-red-400 text-sm font-extrabold">{error}</p>}
            <input
                className={`border-b-2 font-normal "border-gray-200 block focus:outline-none focus:border-blue-500 mb-6 w-full`}
                type={type}
                placeholder={placeholder}
                name={name}
                {...rest}
            />
        </label>
    )
}
export default TextBox;