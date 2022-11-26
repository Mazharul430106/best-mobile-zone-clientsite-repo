import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import AddProduct from "../../AddProduct/AddProduct";
import Blog from "../../Blog/Blog";
import AllButtonPhones from "../../Home/Categories/AllButtonPhones";
import AndrowedPhones from "../../Home/Categories/AndrowedPhones";
import Iphones from "../../Home/Categories/Iphones";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import MyProductPage from "../../MyProductPage/MyProductPage";
import Register from "../../Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/iPhone',
                element: <PrivateRoutes><Iphones></Iphones></PrivateRoutes>
            },
            {
                path: '/buttonPhone',
                element: <PrivateRoutes><AllButtonPhones></AllButtonPhones></PrivateRoutes>
            },
            {
                path: '/AndrowedPhone',
                element:<PrivateRoutes><AndrowedPhones></AndrowedPhones></PrivateRoutes>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myProduct',
                element: <MyProductPage></MyProductPage>
            }


        ]
    },
    {
        path: '*',
        element: <div>Data Not Found</div>
    }    
])
