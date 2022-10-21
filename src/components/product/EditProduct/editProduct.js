import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Button, notification,Input } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import api from '@api/RequestInterCeptor';
const EditProduct= ({product ,onClose,fetchProducts})=> {
  const [submitting,setSubmitting]=useState(false)
    const toUpdate=product;
    return (
            <>
            <Row>
                <Col md={24} style={{ textAlign: "center" }}>
                  <h3>Edit  Product</h3>
                </Col>
              </Row>
              <br />
              <Formik
                initialValues={{
                  productName: toUpdate.productName||"",
                  price: toUpdate.price ||"",
                }}
                validationSchema={Yup.object({
                    productName: Yup.string().required("Required Field"),
                    price: Yup.string().required("Required Field"),
                })}
                onSubmit={async (values) => {
                  if (navigator.onLine) {
                  setSubmitting(true)
                  try {
                    console.log("calling put");
                    const payload={...values,_id:toUpdate._id};
                     await api.put("/products",payload);
                    notification.success({
                      message: `Success`,
                      description: "Product updated successfully!",
                      placement: "bottomRight",
                    });
                     setSubmitting(false);
                     onClose();
                     fetchProducts()
                  } catch (error) {
                    notification.error({
                      message: `Product could not updated!`,
                      description: "Please try latter!",
                      placement: "bottomRight",
                    });
                  }
                    
                  setSubmitting(false);
                  
                  } else {
                    notification.error({
                      message: `No internet connection`,
                      description: "Please check your internet connection",
                      placement: "bottomRight",
                    });
                  }
                }}
              >
                {({handleChange,handleSubmit,values,errors,touched}) => (
                  <Form>
                    <Row>
                      <Col md={24}>
                      <Input 
                        name="productName"
                        value={values["productName"]}
                        onChange={handleChange}
                        error={touched["productName"] && errors["productName"]}
                        placeholder="New Product Name" 
                        />
                      </Col>
                      <Col md={24}>
                      <Input 
                        name="price"
                        value={values["price"]}
                        onChange={handleChange}
                        error={touched["price"] && errors["price"]}
                        placeholder="New Product Price"
                        />
                      </Col>
                      <Col xs={12} className="d-flex justify-content-end">
                        <Button
                          type="primary"
                          onClick={(e) => {onClose()}}
                        >
                          Close
                        </Button>
                        <Button
                          type="submit"
                          disabled={submitting}
                          onClick={()=>handleSubmit()}
                        >
                          Update
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </>
          
      );
}

export default EditProduct ;