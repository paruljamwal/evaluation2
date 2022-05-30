import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import axios from 'axios'
import Pagination from "./components/Pagination";
import styled from "@emotion/styled";
const App = () => {
  const [datas,setDatas]=useState([])
  const getdata=async()=>{
    let res=await axios.get(`http://localhost:8080/products`)
    setDatas(res.data)
  }
  useEffect(()=>{
    getdata()
    
  },[])
 
  const template=styled.div`
  display: flex;
  `; 
  


return <div style={{'color':'black'}}>{/* TODO: Code here */}

    {datas.map((e)=>(
    <div  className='temp' style={{'display':'grid', "textAlign":"center"}} key={e.id}>{e.title} 
    <div>
    <img src={e.imageSrc}></img>

    </div>
    <div style={{'display':'flex'}}>

    <div>{e.category}</div>
    <div>{e.gender}</div>
    <div>{e.price}</div>
    </div>
    </div>
    
    ))}
   <Products ></Products>
  </div>;
};

export default App;
