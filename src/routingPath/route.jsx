import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";
import Projects from "../components/ph-tube/Project";

const route = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:([
            {
                path:'/',
                element: <Home></Home>
            },
            // {
            //     path:'/resume',
            //     element: <h2>resume</h2>
            // },
            {
                path:'/skills',
                element: <Skills></Skills>
            },
            {
                path:'/projects',
                element: <Projects></Projects>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
        ])
    }
])

export default route