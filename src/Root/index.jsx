import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/Login";
import PrivateRoute from "../utils/PrivateRoute";
import Dashboard from "../pages/Admin/Dashboard";
import AdminLayout from "../components/AdminLayout";
import Users from "../pages/Admin/Users";
import Menus from "../pages/Admin/Menus";
import NewsUz from "../pages/Admin/NewsUz";
import NewsEn from "../pages/Admin/NewsEn";
import NewsRu from "../pages/Admin/NewsRu";

const Root = () => {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Header />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/login' element={<LoginPage />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/admin' element={<AdminLayout />} />
                    <Route path='/admin/users' element={<Users />} />
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/menus' element={<Menus />} />
                    <Route path='/admin/news/uz' element={<NewsUz />} />
                    <Route path='/admin/news/en' element={<NewsEn />} />
                    <Route path='/admin/news/ru' element={<NewsRu />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Root;
