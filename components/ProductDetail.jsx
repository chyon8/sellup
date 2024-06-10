
/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BASE_URL from '@/app/config';
import { Typography, Box, Button,Avatar } from '@mui/material';
import ProductDescBody from './ProductDescBody';
import ProductImage from './ProductImage';
import ProductThumbnail from './ProductThumbnail';
import ProductPrice from './ProductPrice';
import ProductDetailLeft from './ProductDetailLeft';
import TimeSincePost from './TImeSincePost';

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
  
<Box sx={{display:'grid'}}>

<ProductThumbnail product={product}/>

    <Box className="productDetail"  sx={{ display:{xs:'grid',sm:'grid',md:'grid',lg:'flex'},border: '1px solid #222222', borderRadius: '20px', padding: '25px',borderTop:'0px' }}>

      <Box className="productDetailLeft" sx={{flex:2}}>

{/*
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
      */}

<Box className="index" sx={{
        zIndex: 1, position: 'sticky', 
        top: 0, 
        mt: '15px',
        gap: { xs: 1, sm: 5, md: 5, lg: 5 }, padding: '15px',
        bgcolor: '#191919', borderRadius: '15px',
        display: { xs: 'grid', sm: 'flex', md: 'flex', lg: 'flex' }
      }}>

        <Box sx={{display:'flex'}}>
        <Avatar src={product.user.image}/>
        <Typography sx={{mt:'13px',ml:'13px'}} variant='answer'>{product.user.name}</Typography>
        <Typography fontWeight='600' sx={{color: 'rgb(168, 168, 168)', ml: '4px',textAlign: 'left',alignContent: 'center',}}>
                 <TimeSincePost createdAt={product.createdAt} /> 
                      </Typography>
        </Box>

     
      </Box>


      <Box className="price" sx={{ mt: '15px', borderRadius: '20px', bgcolor: '#252525', padding: '25px' }}>
    <ProductPrice product={product}/>
      </Box>

    
      <Box className="projectDesc" sx={{ mt: '15px', borderRadius: '20px', bgcolor: '#252525', padding: '25px' }}>
      <ProductDescBody product={product}/>
      </Box>

      <Box className="projectImg" sx={{ mt: '15px', borderRadius: '20px', bgcolor: '#252525', padding: '25px' }}>
     <ProductImage product={product}/>
     </Box>
     </Box>



     <Box  className="productRight" display="grid" sx={{flex:1, borderRadius: '20px', mt:'25px', flex:1,
    mb:'15px',ml:{lg:'30px'}, height:'fit-content' }}>
<ProductDetailLeft/>
</Box>


    </Box>

</Box>


  );
};

export default ProductDetail;



