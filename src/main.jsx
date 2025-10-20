import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import UserList from './page/UserList';
import HomePage from './page/client/HomePage';
import AboutPage from './page/client/AboutPage';
import ClientLayout from './page/layout/ClientLayout';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<ClientLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="sample-user-list" element={<UserList />}></Route>
      </Route>
      {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}
    </Routes>
  </BrowserRouter>,
)
