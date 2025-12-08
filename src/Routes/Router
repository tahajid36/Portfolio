import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Services from "../Pages/Service";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },{
                path: '/contact',
                Component: Contact
            },
            {
                path: '/services',
                Component: Services
            }
            
        ]
    }
])