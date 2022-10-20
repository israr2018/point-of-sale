import React, { useEffect,useState } from "react"
import { Image,Row,Col, Input} from 'antd';
import AppLayout from "../../components/layout";
const { Search } = Input;
const Flickr = require('flickr-sdk');

const GalleryPage=()=>{
    const flickrApiKey=process.env.REACT_APP_FLICKER_API_KEY ||"de0a6d9328d910b5556b9401bd20556d"
    const flickr=new Flickr(flickrApiKey);
    const [images,setImages]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    const onSearch=(value)=>{
       setSearchTerm(value)
    }
    const createImageUrl=(img)=>{
        const url=`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`
        console.log("url",url);
        return url;
    };

    const getFlickImages=()=>{
        flickr.photos.search({
            text:searchTerm,
            perPage:10,
            page:1
        })
        .then((res)=>{
            console.log('yay!', res.body);
            const {photos:photo}=res.body
            console.log("photo",photo);
            setImages(photo.photo);
        })
        .catch((err)=>{
        console.error('bonk', err);
        })
    };
    useEffect(()=>{
    getFlickImages();
    },[searchTerm]);

    return <AppLayout>
            <div style={{   
                display:"flex",
                justifyContent:"center",
                marginTop:"10px",
                paddingBottom:"10px"
                }}>
                <Search
                    placeholder="Type to search on flicker"
                    onSearch={onSearch}
                    style={{
                    width: 500,
                }}
                />
            </div>
        
           <Row>
            {
            images.map((img)=>(
            <Col md={6}>
            <Image
                width={300}
                height={300}
                src={createImageUrl(img)}
            />
            </Col>
            ))
}
           </Row>
        </AppLayout>

}
export default GalleryPage