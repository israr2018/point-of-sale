import React, { useEffect,useState } from "react"
import CustomTable from '@components/table'
import { Space,Button } from 'antd';
import CustomModal from '../../modal';
import EditProduct from '../EditProduct/editProduct';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import AddProduct from '../AddProduct/AddProduct';
import api from '../../../api/RequestInterCeptor';
const ProductList=()=>{
  const [products, setProducts]=useState([])
  const fetchProducts=async()=>{
    try {
      const {data:res}=await api.get('/products');
      setProducts([...res])
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(()=>{
  fetchProducts()
  },[])
    const columns=[
        {
            title:'Product ID',
            dataIndex:'_id',
            key:'_id',
        },
        {
            title:'Product Name',
            dataIndex:'productName',
            key:'productName',
        },
        {
            title:'Price',
            dataIndex:'price',
            key:'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
              <CustomModal Component={(onClick)=>(
                <Button onClick={onClick}>Edit</Button> 
                )
                }
                Childrens={(onClose)=>(<EditProduct 
                  product={record} 
                  onClose={onClose} 
                  fetchProducts={fetchProducts} />)}
                
                />
              <CustomModal Component={(onClick)=>(
                <Button onClick={onClick}>Delete</Button> 
                
                )
                }
                Childrens={(onClose)=>(<DeleteProduct onClose={onClose} fetchProducts={fetchProducts} id={record._id} />)}
                
                />
              </Space>
            ),
          },
    ]
    return ( 
      <>
      <h2>Product List</h2>
          <CustomModal Component={(onClick)=>(
                <Button onClick={onClick} type="primary">Add Product</Button> 
                
                )
                }
                Childrens={(onClose)=>(<AddProduct onClose={onClose} fetchProducts={fetchProducts} />)}
                
                />
      {
        products.length>0?<CustomTable   columns={columns} dataSource={products} />:<h3>No Products</h3>
      }   
      
      </>
    
    )
}
   
export default ProductList;