/* eslint-disable no-restricted-globals */
import React from 'react';
import { Table } from 'react-bootstrap';

const TableForOrder = ({singleOrder}) => {
    return (
        <div>
             <Table striped bordered hover variant="dark">
                                        <tbody>
                                            <tr>
                                                <td className="bg-primary">{singleOrder.name}</td>
                                                <td className="bg-danger">{singleOrder.email}</td>
                                                <td className="bg-success">{singleOrder.weight}</td>
                                                <td className="bg-danger">{singleOrder.price}TK</td>
                                            </tr>
                                        </tbody>
                                    </Table>
        </div>
    );
};

export default TableForOrder;