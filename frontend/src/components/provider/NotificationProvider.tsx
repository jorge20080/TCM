import { ReactNode, useState } from "react";
import { notificationContext, TNotification } from "../../context/notification-context";

type TProps = {
    children: ReactNode
}
const emptyNotification: TNotification = {
    messages: [],
    type: 'SUCCESS',
    duration: 10,
    fixed: false
}

export const NotificationProvider = ({ children }: TProps) => {
    const [notification, setNotification] = useState<TNotification>(emptyNotification);
    const sendNotification = (notificationData: TNotification) => {
        setNotification(notificationData);
    }

    const clearNotification = () => {
        setNotification(emptyNotification);
    }
    return (
        <notificationContext.Provider value={{ notification, sendNotification, clearNotification }}>
            {children}
        </notificationContext.Provider>
    )
}
