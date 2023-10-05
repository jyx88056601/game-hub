import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Homepage from "../pages/Homepage";
import GameDetailPage from "../pages/GameDetailPage";


const router = createBrowserRouter([{
    path: '/',          // location
    element: <Layout/>, // content that could be insert to the position of <Outlet /> component where it is in <Layout /> after <Nav />
    children: [         // contents selector
        {index:true, element: <Homepage />},
        {path : 'games/:id', element: <GameDetailPage />}
    ]
}])

export default router;