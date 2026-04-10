import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Catagory from "../Pages/Catagory";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Authentication from "../Layout/Authentication";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";

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
                    hydratedfallbackElement : <Loading></Loading>
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
            element: <PrivateRoute>
            <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader:()=> fetch('/news.json'),
            HydrateFallbackElement: <Loading></Loading>,
        },{
            path:'/*',
            element: <h2>Error404</h2>
        }
    ]
)

export default router;