import { use } from "react";
import { notificationContext } from "../context/notification-context";

const NotificationBanner = () => {
    const { notification, clearNotification } = use(notificationContext);
    return (
        <>
            <aside className={
                `${notification.type === "ERROR" ? "bg-red-500" : "bg-green-50"} max-h-[100px] overflow-y-auto absolute top-4 right-4 w-[350px] text-gray-50
                px-4 transition-all ease-in-out scale-0 duration-300 z-20
                shadow-md text-sm flex items-center gap-4 overflow-hidden origin-top-right
                ${notification.messages.length > 0 ? " scale-100 py-3" : null}`}
            >
                <svg width="40px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#ffffff" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g></svg>
                <div>
                    <p className="block font-extrabold">{notification.type}</p>
                    <p >{notification.messages[0]}</p>
                    <button onClick={clearNotification} className="absolute top-0 right-2 text-2xl">x</button>
                </div>

            </aside >
        </>
    )
}
export default NotificationBanner;