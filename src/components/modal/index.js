import * as React from 'react';
import { useState } from 'react';
import { Modal } from "antd";

const CustomModal=({Component,Childrens})=>{
    const [visible, setVisible]=useState(false)
    const handleCancel=()=>{
        setVisible(false);
    }
    const handleOk=()=>{
        setVisible(false);
    }
    const showModal=()=>{
        console.log("visible",visible)
        setVisible(true);
    }
return <>
    {
        Component(showModal)
    }
    <Modal
       footer={null}
       width={"70%"}
       visible={visible}
       onOk={handleOk}
       onCancel={handleCancel}
       maskClosable={false}
    >
        {Childrens(handleCancel)}
    </Modal>
    </>
}
export default CustomModal;