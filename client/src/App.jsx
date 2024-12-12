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

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-hidden">
      <Routes>
        <Route path="/auth" element={<Layout />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="admin-dashboard" element={<AdminDashboard />}></Route>
          <Route path="admin-products" element={<AdminProducts />}></Route>
          <Route path="admin-orders" element={<Orders />}></Route>
          <Route path="admin-features" element={<Features />}></Route>
        </Route>

        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="listing" element={<Listing />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="account" element={<Account />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
