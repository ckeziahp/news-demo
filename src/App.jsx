import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import ForYou from "./pages/forYou"
import Health from "./pages/health"
import Sports from "./pages/sports"
import Local from "./pages/local"
import World from "./pages/world"

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/foryou",
    element:<ForYou/>
  },
  {
    path:"/health",
    element:<Health/>
  },
  {
    path:"/sports",
    element:<Sports/>
  },
  {
    path:"/local",
    element:<Local/>
  },
  
  {
    path:"/world",
    element:<World/>
  },
])
  return (
    <>
  <RouterProvider router={router}/>p
    </>
  )
};

export default App
