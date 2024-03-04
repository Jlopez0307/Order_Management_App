import React from "react";

//Table
import OrderTable from "./OrderTable";

const OrderList = () => {
    return (
        <section className="container mx-auto p-10 relative top-5">
            <h2 className="text-4xl border-b-2">Invoices</h2>
            <OrderTable/>
            
        </section>
    )
};

export default OrderList;