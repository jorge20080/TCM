import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import LoginPage from "./pages/Login"
import { AuthProvider } from "./components/provider/AuthProvider"
import ProtectedRoute from "./components/ProtectedRoute"
import Logout from "./components/Logout"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <p>home</p>
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
      path: "logout",
      element: <Logout />
    }
  ])
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
