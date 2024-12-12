import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import LoginPage from "./pages/Login"

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
          element: <p>test</p>
        }
      ]
    },
    {
      path: "login",
      element: <LoginPage />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
