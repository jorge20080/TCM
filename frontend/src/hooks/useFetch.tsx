import { useState } from "react"

type TFetchParams = {
    url: string,
    method?: "POST" | "GET" | "PUT" | "PATCH" | "DELETE",
    credentials?: boolean,

}
export const useFetch = <T,>({ url, method, credentials }: TFetchParams) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState(false);

    const execute = async (payload?: object) => {
        const response = await fetch(url, {
            method: method || "GET",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(payload),
            credentials: credentials ? "include" : "omit"
        });
        if (!response.ok) {
            setError(true);
        }
        setData(await response.json());
    }
    return { execute, data, error }
}
