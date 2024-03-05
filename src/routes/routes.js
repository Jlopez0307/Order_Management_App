import React from "react";
import {Route, Routes} from 'react-router-dom';
import {Switch} from 'react-router'

//Components
import Navbar from "../components/Navbar";
import OrderList from "../components/OrderList";
import OrderDetails from "../components/OrderDetails";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";

const AllRoutes = () => {
    return (
        <>
            <Navbar/>
            
            <Routes>
                <Route path="/" element={<OrderList/>} />
                <Route path="/login" element={<Login/>} />

                <Route path="/invoices/:invoiceNum" element={<OrderDetails/>} />

                {/* 404 Route */}
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        
        
        </>
    )
}

export default AllRoutes;