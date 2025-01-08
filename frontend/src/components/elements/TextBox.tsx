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
            <div className="relative">
                <input
                    className={`border-b-2 font-normal "border-gray-200 block focus:outline-none focus:border-blue-500 mb-6 w-full`}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    {...rest}
                />
                {error &&
                    <div className="group">
                        <svg className="absolute right-0 bottom-1" width="25px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>alarm</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#ff0000" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C330.943502,3.55271368e-14 426.666667,95.7231591 426.666667,213.333333 C426.666667,330.943502 330.943502,426.666667 213.333333,426.666667 C95.7231591,426.666667 3.55271368e-14,330.943502 3.55271368e-14,213.333333 C3.55271368e-14,95.7231591 95.7231591,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C118.87459,42.6666667 42.6666667,118.87459 42.6666667,213.333333 C42.6666667,307.792077 118.87459,384 213.333333,384 C307.792077,384 384,307.792077 384,213.333333 C384,118.87459 307.792077,42.6666667 213.333333,42.6666667 Z M213.333333,272.042667 C228.571429,272.042667 240,283.306667 240,298.666667 C240,314.026667 228.571429,325.290667 213.333333,325.290667 C197.748918,325.290667 186.666667,314.026667 186.666667,298.325333 C186.666667,283.306667 198.095238,272.042667 213.333333,272.042667 Z M234.666667,85.3333333 L234.666667,234.666667 L192,234.666667 L192,85.3333333 L234.666667,85.3333333 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
                        <p className="hidden absolute -top-8 right-0 font-normal bg-red-500 py-1 px-2 text-white group-hover:block">{error}</p>
                    </div>
                }
            </div>
        </label>
    )
}
export default TextBox;