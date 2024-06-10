"use client"
import {Container,Box } from '@mui/material';
import ProductDetail from '@/components/ProductDetail';


const ProductPage = () => {




  return (
    <Container>
   
   {/*<Box sx={{display:{xs:'grid',sm:'grid',md:'grid',lg:'flex'} }}>  </Box>*/}


   <ProductDetail/>

  
 
     </Container>
  );
};

export default ProductPage;
