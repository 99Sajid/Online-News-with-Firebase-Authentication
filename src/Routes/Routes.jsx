import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Catagory from "../Pages/Catagory";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Authentication from "../Layout/Authentication";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },{
                    path:'/category/:id',
                    element:<Catagory></Catagory>,
                    loader:()=> fetch('/news.json'),
                }
            ]
        },{
            path:'/auth',
            element: <Authentication></Authentication>,
            children: [{
                path:'/auth/login',
                element:<Login></Login>
            },{
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
        },{
            path:'/news-details/:id',
            element: <NewsDetails></NewsDetails>,
            loader:()=> fetch('/news.json')
        },{
            path:'/*',
            element: <h2>Error404</h2>
        }
    ]
)

export default router;