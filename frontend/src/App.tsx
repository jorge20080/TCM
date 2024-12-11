import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"

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
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
