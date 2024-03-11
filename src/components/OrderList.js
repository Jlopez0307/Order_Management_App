import React, { useEffect, useState } from "react";
import QBapi from "../helpers/api";

//Table
import OrderTable from "./OrderTable";

const OrderList = () => {

    const [test, setTest] = useState([]);

    useEffect(() => {
        const getTestRes = async () => {
            console.log('Hello World')
        };

        getTestRes();
    }, [])

    console.log(test)


    return (
        <section className="container mx-auto p-10 relative top-5">
            <h2 className="text-4xl border-b-2">Invoices</h2>
            <OrderTable/>
            
        </section>
    )
};

export default OrderList;