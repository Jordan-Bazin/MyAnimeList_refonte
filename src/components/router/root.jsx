import { createBrowserRouter } from "react-router-dom"
import App from "../../App";
import Home from "../pages/home";
import ErrorPage from "../pages/errorPage";
import Anime from "../pages/anime";
import Manga from "../pages/manga";
import Community from "../pages/community";
import About from "../pages/about";
import FocusAnimeContainer from "../pages/focusAnimeContainer";
import LoginContainer from "../pages/loginContainer";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement : <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/anime",
          element: <Anime />
        },
        {
          path: "/manga",
          element: <Manga />
        },
        {
          path: "/community",
          element: <Community />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/login",
          element: <LoginContainer />
        },
        {
          path: "/focusAnime/:id",
          element: <FocusAnimeContainer />
        },
      ]
    }
  ]);
  
  export default router;