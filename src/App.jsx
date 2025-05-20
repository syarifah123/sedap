import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./Admin/assets/tailwind.css";
// const Dashboard = React.lazy(() => import("./Admin/pages/Dashboard"));
// const Produk = React.lazy(() => import("./Admin/pages/Produk"));
// const Artikel = React.lazy(() => import("./Admin/pages/Artikel"));
// const Karyawan = React.lazy(() => import("./Admin/pages/Karyawan"));
// const MainLayout = React.lazy(() => import("./Admin/layouts/MainLayout"));
// const AuthLayout = React.lazy(() => import("./Admin/layouts/AuthLayout"));
// const Login = React.lazy(() => import("./Admin/pages/auth/Login"));
// const Register = React.lazy(() => import("./Admin/pages/auth/Register"));
// const Forgot = React.lazy(() => import("./Admin/pages/auth/Forgot"));
import Loading from "./Admin/components/Loading";
// import NotFound from "./Admin/pages/NotFound";
// import ErrorPage400 from "./Admin/pages/ErrorPage400";
// import ErrorPage401 from "./Admin/pages/ErrorPage401";
// import ErrorPage403 from "./Admin/pages/ErrorPage403";
// const UserList = React.lazy(() => import("./Admin/pages/UserList"));


const NotFound = React.lazy(() => import("./Admin/pages/NotFound"));
const ErrorPage403 = React.lazy(() => import("./Admin/pages/ErrorPage403"));
const ErrorPage401 = React.lazy(() => import("./Admin/pages/ErrorPage401"));
const ErrorPage400 = React.lazy(() => import("./Admin/pages/ErrorPage400"));
const UserList = React.lazy(() => import("./Admin/pages/UserList"));
const Dashboard = React.lazy(() => import("./Admin/pages/Dashboard"));
const Produk = React.lazy(() => import("./Admin/pages/Produk"));
const Artikel = React.lazy(() => import("./Admin/pages/Artikel"));
const Karyawan = React.lazy(() => import("./Admin/pages/Karyawan"));
const MainLayout = React.lazy(() => import("./Admin/layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./Admin/layouts/AuthLayout"));
const Login = React.lazy(() => import("./Admin/pages/auth/Login"));
const Register = React.lazy(() => import("./Admin/pages/auth/Register"));
const Forgot = React.lazy(() => import("./Admin/pages/auth/Forgot"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/karyawan" element={<Karyawan />} />
          <Route path="/UserList" element={<UserList />} />
        </Route>
        {/* Error Pages */}
        <Route path="/ErrorPage400" element={<ErrorPage400 />} />
        <Route path="/ErrorPage401" element={<ErrorPage401 />} />
        <Route path="/ErrorPage403" element={<ErrorPage403 />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
