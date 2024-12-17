import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/auth/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashboard from "./pages/admin-view/AdminDashboard";
import AdminProducts from "./pages/admin-view/AdminProducts";
import Orders from "./pages/admin-view/Orders";
import Features from "./pages/admin-view/Features";

import ShoppingLayout from "./components/shopping-view/ShoppingLayout";

import NotFound from "./pages/not-found/NotFound";
import Home from "./pages/shopping-view/Home";
import Listing from "./pages/shopping-view/Listing";
import Checkout from "./pages/shopping-view/Checkout";
import Account from "./pages/shopping-view/Account";
import CheckAuth from "./components/common/CheckAuth";
import UnAuthPage from "./pages/unAuthPage/UnAuthPage";
import { useDispatch, useSelector } from "react-redux";
// import { checkAuth } from "./store/auth-slice";

const App = () => {
  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, [dispatch]);
  return (
    <div className="flex flex-col overflow-hidden bg-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Layout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="admin-dashboard" element={<AdminDashboard />}></Route>
          <Route path="admin-products" element={<AdminProducts />}></Route>
          <Route path="admin-orders" element={<Orders />}></Route>
          <Route path="admin-features" element={<Features />}></Route>
        </Route>

        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<Home />}></Route>
          <Route path="listing" element={<Listing />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="account" element={<Account />}></Route>
        </Route>
        <Route path="/unauth-page" element={<UnAuthPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
