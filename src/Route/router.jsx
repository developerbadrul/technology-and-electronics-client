import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const myRoute = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            // {
            //     path: "/",
            //     element: <Home></Home>
            // },
            // {
            //     path: "/",
            //     element: <Home></Home>
            // },
        ]
    }
])