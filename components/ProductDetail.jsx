




/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BASE_URL from '@/app/config';
import { Typography, Box, Button } from '@mui/material';
import ProductDescBody from './ProductDescBody';
import ProductImage from './ProductImage';
import ProductThumbnail from './ProductThumbnail';
import ProductPrice from './ProductPrice';

const ProductDetail = () => {
  const router = useParams();
  const productId = router.productId;
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
    <Box display="grid" sx={{ border: '1px solid #777777', borderRadius: '20px', padding: '25px' }}>
   
      <ProductThumbnail product={product}/>

      <Box className="index" sx={{
        zIndex: 1, position: 'sticky', 
        //top: 0, 
        mt: '15px',
        gap: { xs: 1, sm: 5, md: 5, lg: 5 }, padding: '15px',
        bgcolor: '#191919', borderRadius: '15px',
        display: { xs: 'grid', sm: 'flex', md: 'flex', lg: 'flex' }
      }}>
        <Button><Typography fontSize='14px' fontWeight='700'>프로젝트 설명</Typography></Button>
        <Button><Typography fontSize='14px' fontWeight='700'> 프로젝트 이미지</Typography></Button>
        <Button><Typography fontSize='14px' fontWeight='700'>가격</Typography></Button>
      </Box>


      <Box className="projectDesc" sx={{ mt: '15px', borderRadius: '20px', bgcolor: '#252525', padding: '25px' }}>
      <ProductDescBody product={product}/>
      </Box>

      <Box className="projectImg" sx={{ mt: '15px', borderRadius: '20px', bgcolor: '#252525', padding: '25px' }}>
     <ProductImage product={product}/>
     </Box>

      <Box className="price" sx={{ mt: '15px', borderRadius: '20px', bgcolor: '#252525', padding: '25px' }}>
    <ProductPrice product={product}/>
      </Box>
    </Box>
  );
};

export default ProductDetail;




