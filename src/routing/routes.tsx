import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Homepage from "../pages/Homepage";
import GameDetailPage from "../pages/GameDetailPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([{
    path: '/',          // location
    element: <Layout/>, // content that could be insert to the position of <Outlet /> component where it is in <Layout /> after <Nav />
    children: [         // contents selector
        {path: "/" , element: <Homepage />},
        {path : "games/:slug", element: <GameDetailPage />}
    ],
    errorElement: <ErrorPage />,
}])

export default router;