import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import LoginPage from "./pages/Login"
import { AuthProvider } from "./components/provider/AuthProvider"
import ProtectedRoute from "./components/ProtectedRoute"
import Logout from "./components/Logout"
import { NotificationProvider } from "./components/provider/NotificationProvider"
import HomePage from "./pages/Home"
import SignupPage from "./pages/Signup"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "test",
          element:
            <ProtectedRoute>
              <p>test</p>
            </ProtectedRoute>
        }
      ]
    },
    {
      path: "login",
      element: <LoginPage />
    },
    {
      path: "signup",
      element: <SignupPage />
    },
    {
      path: "logout",
      element: <Logout />
    }
  ])
  return (
    <NotificationProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NotificationProvider>
  )
}

export default App
