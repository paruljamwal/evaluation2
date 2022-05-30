import React from "react";
import AddProduct from './AddProduct'
import Product from './Product'
import Pagination from './Pagination'

const Products = () => {

  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
 
  return (
    <Flex>
 
      <AddProduct></AddProduct>
      {/*  AddProduct */}
      <Grid>
 
      </Grid>
      <Product  ></Product>
      {/* Pagination */}
      <Pagination></Pagination>
    </Flex>
  );
};

export default Products;
