/* eslint-disable no-restricted-globals */
import React from 'react';
import { Table } from 'react-bootstrap';

const Table420 = ({singleOrder}) => {
    // console.log(singleOrder)
    const {_id} = singleOrder
    
    const deleteCase = (event, id) => {
        const url = `https://glacial-brushlands-79275.herokuapp.com/delete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("delete");
          });
        // window.location.reload(false);
        console.log(id)
      };
      console.log(_id)
    return (
        <div>
             <Table striped bordered hover variant="dark">
                                        <tbody>
                                            <tr>
                                                <td className="bg-primary">{singleOrder.name}</td>
                                                <td className="bg-danger">{singleOrder.email}</td>
                                                <td className="bg-success">{singleOrder.weight}</td>
                                                <td className="bg-danger">{singleOrder.price}TK</td>
                                                <td >
                                                <button className="bg-warning" onClick={() => deleteCase(event, _id)}>delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
        </div>
    );
};

export default Table420;