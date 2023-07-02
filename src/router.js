import { createBrowserRouter, redirect } from "react-router-dom";
import AppLayout from "layouts/AppLayout";
import Login from "smart/Login";
import Register from "smart/Register";
import Dashboard from "smart/Dashboard";
import Profile from "smart/Profile";
import Logout from "smart/Logout";
import ShowUserDetails from "smart/ShowUserDatails";
import { AppProvider } from "contexts/app.context";
import LoginAndRegisterLayout from "layouts/LoginAndRegisterLayout";
import { checkIsAuth } from "helpers/auth.helper";
import { notification } from "helpers/notification.helper";
import BookingPage from "smart/Booking/smart/BookingPage"
import PrivateRoute from "smart/PrivateRoute";
import Order from "smart/Order/smart/Order"
import BookingDetails from "smart/Booking/smart/BookingDetails"
import ProductPage from "smart/Product/smart/ProductPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppProvider>
        <AppLayout />
      </AppProvider>
    ),
    //   errorElement: <ErrorPage />,
    children: [
      {path: "/", element: < PrivateRoute><BookingPage/></PrivateRoute> },
      {path: "/order/:bookingId", element: < PrivateRoute><Order/></PrivateRoute> },
      { path: "/logout", element: <Logout /> },
      {path: "/bookingDetails/:bookingId", element: < PrivateRoute><BookingDetails /></PrivateRoute> },
      {
        path: "/dashboard",
        element:  < PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/product/",
        element: < PrivateRoute><ProductPage /></PrivateRoute> ,
      },
      {
        path: "/user/:userId",
        element: <ShowUserDetails />,
      },
      {
        element: <LoginAndRegisterLayout />,
        loader: () => {
          const isAuth = checkIsAuth();
          if (isAuth) {
            notification({
              type: "warning",
              message: "Warning",
              description: "You already have loged in into the system!",
            });
            return redirect("/dashboard");
          }
          return null;
        },
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
