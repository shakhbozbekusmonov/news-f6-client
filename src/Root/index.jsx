import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";

const Root = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Root;
