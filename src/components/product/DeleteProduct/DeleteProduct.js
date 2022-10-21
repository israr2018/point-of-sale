import * as React from 'react';
import { Row, Col, Button, notification } from "antd";
import api from '@api/RequestInterCeptor'
const DeleteProduct=({title, message,onClose,handleDelete,fetchProducts,id})=>{
    const deleteProduct=async()=>{
        try {
            const {data:res} =await api.delete(`/products/${id}`);
            notification.success({
                message: `Success`,
                description: res,
                placement: "bottomRight",
            })
            onClose();
            fetchProducts();

        } catch (error) {
             notification.error({
                message: `Error`,
                description: error,
                placement: "bottomRight",
            })
            onClose();
        }
    
      }
    return (
        <Row>
         <Col md={24}>
         <h1>{title ||"Delete Product?" }</h1>
         </Col>
        <Col md={24}>
             <h3> {message || "Are you sure to delete this prdouct?"}</h3>
        
        </Col>
        <Col md={24}>
           <Button
            type="primary"
            onClick={(e) => {onClose()}}
            >
            Close
            </Button>
            <Button
                type="button"
                onClick={()=>deleteProduct()}
            >
            Delete
         </Button>
        </Col>
        </Row>
      
    );
}

export default DeleteProduct;