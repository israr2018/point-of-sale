import * as React from 'react';
import { useEffect,useState } from 'react';
import { Row, Col, Button, notification,Input } from "antd";
// const { TextArea } = Input;
import { Formik, Form } from "formik";
import * as Yup from "yup";
import api from '@api/RequestInterCeptor'
const AddProduct= ({onClose,fetchProducts})=> {
 const initialValues={
  productName:'',
  price:''
 }
  const addProduct=async(payload)=>{
    try {
      const {data:res}=await api.post("/products",payload)
      notification.success({
        message: `Success`,
        description: "Product is added!",
        placement: "bottomRight",
      });
    } catch (error) {
      notification.error({
        message: `Error`,
        description: error,
        placement: "bottomRight",
      });
    }

  }
    return (
            <>
            <Row>
                <Col md={24} style={{ textAlign: "center" }}>
                  <h3>Create New Product</h3>
                </Col>
              </Row>
              <br />
              <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    productName: Yup.string().required("Required Field"),
                    price: Yup.string().required("Required Field"),
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  if (navigator.onLine) {
                    console.log("product added.....")
                    addProduct(values);
                    fetchProducts();
                    resetForm({values:""})
                    onClose();
                  } else {
                    notification.error({
                      message: `No internet connection`,
                      description: "Please check your internet connection",
                      placement: "bottomRight",
                    });
                  }
                }}
                
              >
                {({handleChange,handleSubmit,values,resetForm,errors,touched}) => (
                  <Form>
                    <Row>
                    <Col>
                      <Input 
                          name="productName"
                          value={values["productName"]}
                          onChange={handleChange}
                          error={touched["productName"] && errors["productName"]}
                          placeholder="New Product Name" 
                          autoComplete='off'
                         
                          />
                      </Col>
                      <Col md={24}>
                      <Input 
                        name="price"
                        value={values["price"]}
                        onChange={handleChange}
                        error={touched["price"] && errors["price"]}
                        placeholder="New Product Price"
                        autoComplete='off'
                        />
                      </Col>
                      <Col xs={12} className="d-flex justify-content-end">
                        <Button
                          type="primary"
                          onClick={(e) => { resetForm({values:""});onClose()}}
                        >
                          Close
                        </Button>
                        <Button
                          type="submit"
                          onClick={()=>handleSubmit()}
                        >
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </>
          
      );
}

export default AddProduct ;