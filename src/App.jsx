import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layouts from "./Layouts/Layouts";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Work from "./Pages/Work/Work";
import Notfound from "./Pages/Notfound/Notfound";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layouts />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "skills", element: <Skills /> },
        { path: "experience", element: <Experience /> },
        { path: "work", element: <Work /> },
      ],
    },
    { path: "*", element: <Notfound /> },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
