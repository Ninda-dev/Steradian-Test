import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cms from "./pages/Cms";
import Edit from "./pages/Edit";
import ClaimTable from "./components/ClaimTable";
import Input from "./pages/Input";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        // loader: () => {
        //     const access_token = localStorage.getItem("access_token");
        //     if (access_token) {
        //         return null;
        //     }
        //     throw redirect("/login");
        // },
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "cms",
                element: <Cms/>
            },
            {
                path: "edit",
                element: <Edit />
            },
            {
                path: "input",
                element: <Input />
            }
        ]
    },
    {
        path: "/login",
        element: < Login />,
        // loader: () => {
        //     const access_token = localStorage.getItem("access_token");
        //     if (access_token) {
        //         throw redirect("/");
        //     }
        //     return null;
        // },
    },
    {
        path: "/register",
        element: <div>wrong question</div>
    }
]);

export const DeclaredRouter = () => {
    return <RouterProvider router={router} />
}