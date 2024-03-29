import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../Layout/DashboardLayout";
import Main from "../../../Layout/Main";
import AddProduct from "../../AddProduct/AddProduct";
import AllUsers from "../../AllUsers/AllUsers";
import Blog from "../../Blog/Blog";
import Dashboard from "../../Dashboard/Dashboard";
import AllButtonPhones from "../../Home/Categories/AllButtonPhones";
import AndrowedPhones from "../../Home/Categories/AndrowedPhones";
import Iphones from "../../Home/Categories/Iphones";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import MyOrders from "../../MyOrders/MyOrders";
import MyProductPage from "../../MyProductPage/MyProductPage";
import Register from "../../Register/Register";
import AdminRoutes from "../PrivateRoutes/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import CoustomarReview from "../../Home/CoustomarReview/CoustomarReview";

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
                path: '/reviewPage',
                element: <PrivateRoutes><CoustomarReview></CoustomarReview></PrivateRoutes>
            },
            
        ]
    },

    {
        path: '/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoutes> <Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProductPage></MyProductPage>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            }
        ]
    },

    {
        path: '*',
        element: <div>Data Not Found</div>
    }    
])
