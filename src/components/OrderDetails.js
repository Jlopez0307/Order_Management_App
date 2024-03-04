import React, { useState } from "react";

import {useParams} from 'react-router-dom'

const OrderDetails = () => {
    const { invoiceNum } = useParams();
    const [info, setInfo] = useState([]);


    return (
        <section>
            
        </section>
    );
};

export default OrderDetails;