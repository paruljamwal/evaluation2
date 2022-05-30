import React, { useEffect, useState } from "react";
import axios from 'axios'
const Product = () => {

  const [pro,setPro]=useState([])
  const getdata=async()=>{
  let res=await axios(`http://localhost:8080/products `)
   setPro(res.data)  
}

useEffect(()=>{
  getdata()
},[])

  // TODO: Remove below const and instead import them from chakra
  const Text = () => <div />;
  const Image = () => <div />;
  const Box = () => <div />;
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={pro.imageSrc} />
      <Text data-cy="product-category" style={{'color':"white"}}>{pro.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{pro.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{pro.title}</Heading>
      <Box data-cy="product-price">{pro.price}</Box>
    </Stack>
  );
};

export default Product;
