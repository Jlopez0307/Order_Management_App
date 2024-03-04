import React from 'react';
import { Link } from 'react-router-dom'

import invoices from './TestInvoices'

const OrderTable = () => {

    return (
        <table className="table-auto w-full border-collapse relative top-3 border-2">
                <thead>
                    <tr>
                        <th className="px-4 py-2">INVOICE #</th>
                        <th className="px-4 py-2">CUSTOMER NAME</th>
                        <th className="px-4 py-2">SALES PERSON</th>
                        <th className="px-4 py-2">DATE</th>
                    </tr>
                </thead>
                <tbody className="">
                    {invoices.map(invoice => {
                        return (
                            <tr key={invoice.invoiceNum}>
                            
                                <td className="border-y-2 px-4 py-4 text-center font-bold">
                                    <Link to={`invoices/${invoice.invoiceNum}`}>Invoice-#{invoice.invoiceNum}</Link>
                                </td>
                                <td className="border-y-2 px-4 py-4 text-center">{invoice.customerName}</td>
                                <td className="border-y-2 px-4 py-4 text-center">{invoice.salesPerson}</td>
                                <td className="border-y-2 px-4 py-4 text-center">{invoice.date}</td>

                        </tr>
                        )
                    })}
                </tbody>

            </table>
    )
};

export default OrderTable;