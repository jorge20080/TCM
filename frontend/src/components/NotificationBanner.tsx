import { use } from "react";
import { notificationContext } from "../context/notification-context";

const NotificationBanner = () => {
    const { notification, clearNotification } = use(notificationContext);
    return (
        <>
            <aside className={
                `bg-red-50 absolute top-4 right-4 w-[350px] text-red-600
                px-4 transition-all ease-in-out scale-0 duration-300 rounded-lg
                shadow-md text-sm flex items-center gap-4 overflow-hidden origin-top-right
                ${notification.messages.length > 0 ? "scale-100 py-3" : null}`}
            >
                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#ee2f2f"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ee2f2f"></path> </g></svg>
                <div>
                    <span className="block font-extrabold">{notification.type}</span>
                    <p>{notification.messages}</p>
                    <button onClick={clearNotification} className="absolute top-0 right-2 text-2xl">x</button>
                </div>

            </aside>
        </>
    )
}
export default NotificationBanner;