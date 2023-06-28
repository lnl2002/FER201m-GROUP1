import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import { FoodList } from "./components/FoodList";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: 'food/:type',
                element: <FoodList/>
            }
        ]
    }
])