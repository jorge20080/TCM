import { createContext } from "react"

export type TNotificationContext = {
    notification: TNotification,
    sendNotification: (notification: TNotification) => void,
    clearNotification: () => void
}
export type TNotification = {
    messages: string[],
    fixed: boolean,
    duration?: number,
    type: "ERROR" | "WARNING" | "SUCCESS"
}

export const notificationContext = createContext({} as TNotificationContext);