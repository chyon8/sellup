'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BASE_URL from '@/app/config';
import { Typography,Box,Container } from '@mui/material';


const ProductDetail = () => {
const router = useParams();
const  productId  = router.productId;
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/Product/${productId}`);
        const result = await response.json();
        setProduct(result.product);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }



  return (
    <Box>
   
   <Box sx={{mt:'40px', mb:'40px'}}><Typography fontSize='30px'>{product.title}</Typography></Box>
   
   <Box><Typography fontSize='14px' >{product.description}</Typography></Box>
   <Box sx={{mt:'40px', mb:'40px'}}><Typography fontSize='14px' >가격:{product.price? product.price :"합의가능"}</Typography></Box>
   


      </Box>
 
 

  );
};

export default ProductDetail;
