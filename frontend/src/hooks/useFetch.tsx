import { use, useState } from "react"
import { notificationContext } from "../context/notification-context";

type TFetchParams = {
    url: string,
    method?: "POST" | "GET" | "PUT" | "PATCH" | "DELETE",
    credentials?: boolean,

}
export const useFetch = <T,>({ url, method, credentials }: TFetchParams) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<{ [key: string]: string }>();
    const { sendNotification } = use(notificationContext);

    const execute = async (payload?: object) => {
        const response = await fetch(url, {
            method: method || "GET",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(payload),
            credentials: credentials ? "include" : "omit"
        });
        const result = await response.json();
        if (!response.ok) {
            sendNotification({ messages: [result.message], fixed: true, type: "ERROR" });
            setError(result.error);

        }
        setData(result);
    }
    return { execute, data, error }
}
