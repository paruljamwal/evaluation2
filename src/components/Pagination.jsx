import axios from "axios";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [page,setPage]=useState(1)
  const [data,setData]=useState([])
  const [total,setTotal]=useState()
  const [limit,setLimit]=useState(3)
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const ButtonGroup = () => <div />;
  const Select = () => <div />;
 
  const getdata=()=>{
    let res= axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    setData(res.data)
    setTotal(Number(res.headers['x-total-count']))
   console.log(res)    
 
  }


  useEffect(()=>{
    getdata()
  },[page,limit])


  return (
    <ButtonGroup>
      <Button disabled={page<=1} data-cy="pagination-first-button" onClick={()=>setPage(page)} >First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>setPage(page-1)} >previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>setPage(page+1)} disabled={total<page*limit} >next</Button>
      <Button data-cy="pagination-last-button" onClick={()=>setPage(page.length-1)} >last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
