import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://dragon-news-server-kappa-ten.vercel.app/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-kappa-ten.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-kappa-ten.vercel.app/news/${params.id}`
          ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/terms", element: <TermsAndConditions /> },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
