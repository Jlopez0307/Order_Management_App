import React, { useState, useEffect } from "react";
import axios from 'axios';

import {useParams} from 'react-router-dom';
import Invoices from './TestInvoices';

const OrderDetails = () => {
    const { invoiceNum } = useParams();
    const [info, setInfo] = useState([]);


    return (
        <section className="container mx-auto p-10 relative top-5">
            <h1 className="text-4xl border-b-2">Invoice-#{Invoices[0].invoiceNum} Details</h1>

            <div className="container mx-auto flex gap-4">
                <div class="relative bg-white py-6 px-6 rounded-3xl w-2/4 shadow-xl">
            
                    <div class="mt-8">
                        <p class="text-2xl font-semibold my-2">Delivery Address</p>
                        <div class="grid grid-cols-2 gap-4">

                            <p className="text-lg font-semibold">Customer Name:</p>
                            <p>Marc</p>

                            <p className="text-lg font-semibold">Company:</p>
                            <p>{Invoices[0].customerName}</p>


                            <p className="text-lg font-semibold">Address:</p>
                            <a href="https://www.google.com/maps/place/35+Tripp+St,+Framingham,+MA+01702/@42.2694356,-71.4156276,17z/data=!3m1!4b1!4m6!3m5!1s0x89e38824b1443cab:0x294e1a0942901110!8m2!3d42.2694317!4d-71.4130527!16s%2Fg%2F11bw40q5v6?entry=ttu">
                                35 Tripp Street, Framingham MA 01702
                            </a>

                            <p className="text-lg font-semibold">Phone:</p> 
                            <a href="tel:5088751122">508-875-1122</a>

                        </div>
                    </div>
                </div>

                <div class="relative bg-white py-6 px-6 rounded-3xl w-2/4 my-4 shadow-xl">
        
                    <div class="mt-8">
                        <p class="text-2xl font-semibold my-2">Invoice Details</p>
                        <div class="grid grid-cols-2 gap-4">

                            <p className="text-lg font-semibold">Invoice #:</p>
                            <p>#{Invoices[0].invoiceNum}</p>


                            <p className="text-lg font-semibold">Sales Person:</p>
                            <p>{Invoices[0].salesPerson}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl">
        
                    <div class="mt-8">
                        <p class="text-2xl font-semibold my-2">Invoice Items</p>
                        <table className="table-auto w-full border-collapse relative top-3 border-2">
                <thead>
                    <tr>
                        <th className="px-4 py-2">SKU</th>
                        <th className="px-4 py-2">DESCRIPTION</th>
                        <th className="px-4 py-2">QTY</th>
                        <th className="px-4 py-2">PRICE</th>
                    </tr>
                </thead>
                <tbody className="">
            
                    <tr>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].sku}</td>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].itemDescriptions}</td>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].qty}</td>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].price}</td>

                    </tr>

                    <tr>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].sku}</td>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].itemDescriptions}</td>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].qty}</td>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].price}</td>

                    </tr>

                    <tr>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].sku}</td>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].itemDescriptions}</td>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].qty}</td>
                        <td className="border-y-2 px-4 py-4 text-center">{Invoices[0].items[0].price}</td>

                    </tr>
                       
                </tbody>

            </table>
                    </div>
                </div>

            


            
            
            
            
        </section>
    );
};

export default OrderDetails;