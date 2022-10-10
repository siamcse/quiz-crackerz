import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element: <Topics></Topics>
            },
            {
                path:'topics',
                element: <Topics></Topics>
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>
            },
            {
                path:'blog',
                element: <Blog></Blog>
            },
            {
                path:'about',
                element: <About></About>
            }
        ]
    }
]);