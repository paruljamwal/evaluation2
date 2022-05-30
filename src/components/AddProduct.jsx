import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [form,setform]=useState({
    title:"",
    gender:'',
    category:'',
    price:""
  })
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const Modal = () => <div />;
  const ModalBody = () => <div />;
  const Input = () => <div />;
  const Select = () => <div />;
  const RadioGroup = () => <div />;
  const Radio = () => <div />;

  const handelput=(e)=>{
    console.log(e.target.value)
    let {value,name}=e.target;
    setform({
      ...form,
      [name]:value
    })
  }

 const [data,setData]=useState([])
 const getdata=()=>{
   axios.get(`http://localhost:8080/products`).then((res)=>setData(res.data))
 }

  const handelSubmit=()=>{
     axios.post(`http://localhost:8080/products`,form)
     .then(()=>getdata())

  }

  return (
    <>
      <Button my={4} data-cy="add-product-button">Add Products</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" value={form.title} name='title' onChange={handelput} />
          <Select data-cy="add-product-category" onChange={handelput} name='category' value={form.category}>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" name='gender' value={form.gender} onChange={handelput}>
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" name='price' onChange={handelput} value={form.price} />
          <Button data-cy="add-product-submit-button" onClick={handelSubmit} >Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
