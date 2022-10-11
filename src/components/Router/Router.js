import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import { loadDataFromApi } from "../Loaders/Loader";
import Quiz from "../Quiz/Quiz";
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
                loader: loadDataFromApi,
                element: <Topics/>
            },
            {
                path:'topics',
                loader: loadDataFromApi,
                element: <Topics></Topics>
            },
            {
                path: 'statistics',
                loader: loadDataFromApi,
                element: <Statistics></Statistics>
            },
            {
                path:'blog',
                element: <Blog></Blog>
            },
            {
                path:'/topic/:topicId',
                loader: async({params})=>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
                },
                element: <Quiz/>
            }
        ]
    }
]);