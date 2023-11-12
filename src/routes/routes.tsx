import App from "@/App";
import Home from "@/components/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])
export default routes;