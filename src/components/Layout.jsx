import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import layoutcss from "./layout.module.css";
import TopNav from "./TopNav.jsx";
import SideNav from "./SideNav.jsx";
import Category from "../views/Category.jsx";
import Product from "../views/Product.jsx";
import Dashboard from "../views/Dashboard.jsx";
import Order from "../views/Order.jsx";
import Messages from "../views/Messages.jsx";

export default function Layout() {
  return (
    <div className={layoutcss.container}>
      <div className={layoutcss.nav}>
        <TopNav />
      </div>
      <div className={layoutcss.wrapper}>
        <div className={layoutcss.sidenav}>
          <SideNav />
        </div>
        <div className={layoutcss.main}>
          <div className={layoutcss.content}>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product" element={<Product />} />
              <Route path="category" element={<Category />} />
              <Route path="orders" element={<Order />} />
              <Route path="messages" element={<Messages />} />
              {/* Catch-all route inside /admin */}
              <Route path="*" element={<Navigate to="dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
