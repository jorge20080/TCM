import { use } from "react";
import Logo from "../Logo";
import NavigationLink from "../NavLink";
import { authContext } from "../../context/auth-context";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";

const NavBar = () => {
    const navigate = useNavigate();
    const { isUserLogged, logout } = use(authContext);
    const { error, execute } = useFetch({
        url: "http://localhost:3000/api/auth/logout",
        method: "POST",
        credentials: true
    });

    const logoutAction = async () => {
        const answer = confirm("Are you sure you want to logout?")
        if (answer) {
            await execute(undefined, true);
            if (error === undefined) {
                logout();
                navigate("/login");
                return;
            }
        }
    }

    return (
        !isUserLogged ?
            <nav className="flex justify-between px-10 mb-6 items-center py-4">
                < Logo />
                <ul className="flex gap-8 items-center">
                    <li>
                        <NavigationLink href="/test">Test</NavigationLink>
                    </li>
                    <li>
                        <Button
                            onClick={() => navigate("/login")}
                            className="!py-1 !px-3"
                        >
                            Log In
                        </Button>
                    </li>
                </ul >
            </nav >
            :
            <nav className="h-screen bg-blue-500 fixed left-0 pt-4">
                < Logo className="text-white px-2 text-[1.5rem]" />
                <ul className="flex flex-col items-center gap-6 mt-8">
                    <li className="bg-[rgba(0,0,0,0.5)] p-2 rounded-full">
                        <NavigationLink href="/dashboard">
                            <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#ffffff"></path> </g></svg>
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink href="/sprint">
                            <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Iteration-Filled"> <path d="M15,24H0V9h2v13h13V24z M19,20H4V5h2v13h13V20z"></path> <path d="M24,16H8V0h16V16z"></path> </g> </g></svg>
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink href="/testsuite">
                            <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M452.269,76.8h-204.8c-9.097,0-17.314,4.659-21.982,12.476c-4.659,7.808-4.864,17.254-0.563,25.259 c0.375,0.691,0.836,1.323,1.382,1.877l42.325,43.921c13.867,14.387,21.504,33.314,21.504,53.299V486.4 c0,14.114,11.486,25.6,25.6,25.6h136.533c14.114,0,25.6-11.486,25.6-25.6v-384C477.869,88.286,466.383,76.8,452.269,76.8z M358.402,477.867h-25.6c-4.719,0-8.533-3.823-8.533-8.533s3.814-8.533,8.533-8.533h25.6c4.719,0,8.533,3.823,8.533,8.533 S363.121,477.867,358.402,477.867z M384.002,443.733h-51.2c-4.719,0-8.533-3.823-8.533-8.533s3.814-8.533,8.533-8.533h51.2 c4.719,0,8.533,3.823,8.533,8.533S388.721,443.733,384.002,443.733z M324.269,401.067c0-4.71,3.814-8.533,8.533-8.533h25.6 c4.719,0,8.533,3.823,8.533,8.533s-3.814,8.533-8.533,8.533h-25.6C328.083,409.6,324.269,405.777,324.269,401.067z M384.002,375.467h-51.2c-4.719,0-8.533-3.823-8.533-8.533s3.814-8.533,8.533-8.533h51.2c4.719,0,8.533,3.823,8.533,8.533 S388.721,375.467,384.002,375.467z M324.269,332.8c0-4.71,3.814-8.533,8.533-8.533h25.6c4.719,0,8.533,3.823,8.533,8.533 c0,4.71-3.814,8.533-8.533,8.533h-25.6C328.083,341.333,324.269,337.51,324.269,332.8z M384.002,307.2h-51.2 c-4.719,0-8.533-3.823-8.533-8.533s3.814-8.533,8.533-8.533h51.2c4.719,0,8.533,3.823,8.533,8.533S388.721,307.2,384.002,307.2z M324.269,264.533c0-4.71,3.814-8.533,8.533-8.533h25.6c4.719,0,8.533,3.823,8.533,8.533c0,4.71-3.814,8.533-8.533,8.533h-25.6 C328.083,273.067,324.269,269.244,324.269,264.533z M384.002,238.933h-51.2c-4.719,0-8.533-3.823-8.533-8.533 s3.814-8.533,8.533-8.533h51.2c4.719,0,8.533,3.823,8.533,8.533S388.721,238.933,384.002,238.933z"></path> <path d="M273.066,213.632c0-15.548-5.939-30.268-16.725-41.455l-42.334-43.921c-1.562-1.621-2.944-3.499-4.062-5.547 c-7.228-13.431-6.878-29.167,0.879-42.18c7.782-13.022,21.478-20.796,36.642-20.796h179.174V25.6c0-14.114-11.477-25.6-25.6-25.6 H59.742c-9.455,0-18.108,5.18-22.571,13.517c-4.471,8.346-3.977,18.415,1.263,26.283l36.25,54.366 c7.253,10.88,10.624,24.414,10.624,42.607V486.4c0,14.114,11.486,25.6,25.6,25.6h170.914c-5.419-7.151-8.755-15.957-8.755-25.6 V213.632z M155.853,477.867h-25.6c-4.719,0-8.533-3.823-8.533-8.533s3.814-8.533,8.533-8.533h25.6 c4.719,0,8.533,3.823,8.533,8.533S160.572,477.867,155.853,477.867z M181.453,443.733h-51.2c-4.719,0-8.533-3.823-8.533-8.533 s3.814-8.533,8.533-8.533h51.2c4.719,0,8.533,3.823,8.533,8.533S186.172,443.733,181.453,443.733z M121.719,401.067 c0-4.71,3.814-8.533,8.533-8.533h25.6c4.719,0,8.533,3.823,8.533,8.533s-3.814,8.533-8.533,8.533h-25.6 C125.534,409.6,121.719,405.777,121.719,401.067z M181.453,375.467h-51.2c-4.719,0-8.533-3.823-8.533-8.533 s3.814-8.533,8.533-8.533h51.2c4.719,0,8.533,3.823,8.533,8.533S186.172,375.467,181.453,375.467z M121.719,332.8 c0-4.71,3.814-8.533,8.533-8.533h25.6c4.719,0,8.533,3.823,8.533,8.533c0,4.71-3.814,8.533-8.533,8.533h-25.6 C125.534,341.333,121.719,337.51,121.719,332.8z M181.453,307.2h-51.2c-4.719,0-8.533-3.823-8.533-8.533s3.814-8.533,8.533-8.533 h51.2c4.719,0,8.533,3.823,8.533,8.533S186.172,307.2,181.453,307.2z M121.719,264.533c0-4.71,3.814-8.533,8.533-8.533h25.6 c4.719,0,8.533,3.823,8.533,8.533c0,4.71-3.814,8.533-8.533,8.533h-25.6C125.534,273.067,121.719,269.244,121.719,264.533z M181.453,238.933h-51.2c-4.719,0-8.533-3.823-8.533-8.533s3.814-8.533,8.533-8.533h51.2c4.719,0,8.533,3.823,8.533,8.533 S186.172,238.933,181.453,238.933z"></path> </g> </g> </g> </g></svg>
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink href="/testrun">
                            <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 52 52" enable-background="new 0 0 52 52"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.4,11.6h17.3c0.9,0,1.6-0.7,1.6-1.6V6.8c0-2.6-2.1-4.8-4.7-4.8h-11c-2.6,0-4.7,2.2-4.7,4.8V10 C15.8,10.9,16.5,11.6,17.4,11.6z"></path> <path d="M43.3,6h-1.6c-0.5,0-0.8,0.3-0.8,0.8V10c0,3.5-2.8,6.4-6.3,6.4H17.4c-3.5,0-6.3-2.9-6.3-6.4V6.8 c0-0.5-0.3-0.8-0.8-0.8H8.7C6.1,6,4,8.2,4,10.8v34.4C4,47.8,6.1,50,8.7,50h34.6c2.6,0,4.7-2.2,4.7-4.8V10.8C48,8.2,45.9,6,43.3,6z M36.7,27.1l-12,12c-0.5,0.5-1,0.7-1.6,0.7c-0.5,0-1.2-0.2-1.6-0.7l-5.8-5.8c-0.5-0.5-0.5-1.2,0-1.6l1.6-1.6c0.5-0.5,1.2-0.5,1.6,0 l4.2,4.2L33.4,24c0.5-0.5,1.2-0.5,1.6,0l1.6,1.6C37.1,25.9,37.1,26.7,36.7,27.1z"></path> </g> </g></svg>
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink href="/report">
                            <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.615 472.615" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="351.738,9.848 351.738,88.615 430.504,88.615 "></polygon> </g> </g> <g> <g> <path d="M332.045,108.308V0H32.265v472.615H440.35V108.308H332.045z M157.068,422.141H84.453V213.73h72.615V422.141z M272.615,422.141h-72.615V272.807h72.615V422.141z M388.162,422.141h-72.615v-90.257h72.615V422.141z"></path> </g> </g> </g></svg>
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink href="/users">
                            <svg viewBox="0 0 24 24" height="20px" width="20px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.5 6.5C1.5 3.46243 3.96243 1 7 1C10.0376 1 12.5 3.46243 12.5 6.5C12.5 9.53757 10.0376 12 7 12C3.96243 12 1.5 9.53757 1.5 6.5Z" fill="#ffffff"></path> <path d="M14.4999 6.5C14.4999 8.00034 14.0593 9.39779 13.3005 10.57C14.2774 11.4585 15.5754 12 16.9999 12C20.0375 12 22.4999 9.53757 22.4999 6.5C22.4999 3.46243 20.0375 1 16.9999 1C15.5754 1 14.2774 1.54153 13.3005 2.42996C14.0593 3.60221 14.4999 4.99966 14.4999 6.5Z" fill="#ffffff"></path> <path d="M0 18C0 15.7909 1.79086 14 4 14H10C12.2091 14 14 15.7909 14 18V22C14 22.5523 13.5523 23 13 23H1C0.447716 23 0 22.5523 0 22V18Z" fill="#ffffff"></path> <path d="M16 18V23H23C23.5522 23 24 22.5523 24 22V18C24 15.7909 22.2091 14 20 14H14.4722C15.4222 15.0615 16 16.4633 16 18Z" fill="#ffffff"></path> </g></svg>
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink href="settings">
                            <svg viewBox="0 0 24 24" height="20px" width="20px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" fill="#ffffff"></path> </g></svg>
                        </NavigationLink>
                    </li>
                    <li>
                        <svg className="cursor-pointer" onClick={() => isUserLogged ? logoutAction() : undefined} viewBox="0 0 24 24" height="20px" width="20px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.2929 14.2929C16.9024 14.6834 16.9024 15.3166 17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071L21.6201 12.7941C21.6351 12.7791 21.6497 12.7637 21.6637 12.748C21.87 12.5648 22 12.2976 22 12C22 11.7024 21.87 11.4352 21.6637 11.252C21.6497 11.2363 21.6351 11.2209 21.6201 11.2059L18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289C16.9024 8.68342 16.9024 9.31658 17.2929 9.70711L18.5858 11H13C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13H18.5858L17.2929 14.2929Z" fill="#ffffff"></path> <path d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H14.5C15.8807 22 17 20.8807 17 19.5V16.7326C16.8519 16.647 16.7125 16.5409 16.5858 16.4142C15.9314 15.7598 15.8253 14.7649 16.2674 14H13C11.8954 14 11 13.1046 11 12C11 10.8954 11.8954 10 13 10H16.2674C15.8253 9.23514 15.9314 8.24015 16.5858 7.58579C16.7125 7.4591 16.8519 7.35296 17 7.26738V4.5C17 3.11929 15.8807 2 14.5 2H5Z" fill="#ffffff"></path> </g></svg>
                    </li>
                </ul>
            </nav>

    )
}
export default NavBar;