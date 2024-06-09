/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BASE_URL from '@/app/config';
import { Typography, Box, Button, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ProductDetail = () => {
  const router = useParams();
  const productId = router.productId;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use media query to detect large screens
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

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
      <Box className="productImg" sx={{
        width: '100%', height: '350px',
        background: 'linear-gradient(180.00deg, rgba(25, 25, 25, 0) 49.967%,rgba(25, 25, 25, 0.7) 100%)'
      }}>
        <img style={{ borderRadius: '20px', width: '100%', height: '100%' }}
          src={product?.thumbnail && product.thumbnail.length > 0 ? product.thumbnail : "https://i.ibb.co/Bc10XpB/sellup.jpg"}
          alt='product'
        />
      </Box>

      <Box className="index" sx={{
        zIndex: 1, position: 'sticky', top: 0, mt: '15px',
        gap: { xs: 1, sm: 5, md: 5, lg: 5 }, padding: '15px',
        bgcolor: '#191919', borderRadius: '15px',
        display: { xs: 'grid', sm: 'flex', md: 'flex', lg: 'flex' }
      }}>
        <Button><Typography fontSize='14px' fontWeight='700'>프로젝트 설명</Typography></Button>
        <Button><Typography fontSize='14px' fontWeight='700'> 프로젝트 이미지</Typography></Button>
        <Button><Typography fontSize='14px' fontWeight='700'>가격</Typography></Button>
      </Box>

      <Box className="projectDesc" sx={{ mt: '15px', borderRadius: '20px', bgcolor: '#252525', padding: '25px' }}>
        <Box className="textBox">
          <Box sx={{ mb: '40px' }}><Typography sx={{ color: '#FFFFFF' }} fontSize='36px'>{product.title}</Typography></Box>
          <Box className="mainBody" sx={{ gap: 8, display: 'grid' }}>
            <Box>
              <Typography sx={{ mb: '14px' }} variant='question'>어떤 종류의 프로젝트인가요?</Typography>
              <Typography variant='answer'>{product.type.join(',')}</Typography>
            </Box>
            {product.stack && (
              <Box>
                <Typography sx={{ mb: '14px' }} variant='question'>기술 스택에 대해서 말씀해주세요</Typography>
                <Typography variant='answer'>{product.stack}</Typography>
              </Box>
            )}
            <Box>
              <Typography sx={{ mb: '14px' }} variant='question'>어떤 카테고리의 프로젝트인가요?</Typography>
              <Typography variant='answer'>{product.category.join(',')}</Typography>
            </Box>
            <Box>
              <Typography sx={{ mb: '14px' }} variant='question'>사이드 프로젝트에 대해 설명해주세요</Typography>
              <Typography variant='answer'>{product.description}</Typography>
            </Box>
            <Box>
              <Typography sx={{ mb: '14px' }} variant='question'>사이드 프로젝트를 판매하는 이유를 말씀해주세요</Typography>
              <Typography variant='answer'>{product.whysell}</Typography>
            </Box>
            {product.revenue == "Y" && (
              <Box>
                <Typography sx={{ mb: '14px' }} variant='question'>수익화 여부 및 설명 있으면</Typography>
                <Typography variant='answer'>{product.revenueDesc}</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Box className="projectImg" sx={{ mt: '15px', borderRadius: '20px', bgcolor: '#252525', padding: '25px' }}>
        {isLargeScreen ? (
              product.productImages && product.productImages.length > 0 ? (
                <Box sx={{ zIndex: 0, display: 'flex', gap: '20px', flexWrap: 'wrap',justifyContent:'center' }}>

                {product.productImages.map((image, index) => (
                  <Box
                  component="img"
                    key={index}
                    style={{ borderRadius: '20px',
                      flex: product.productImages.length === 1 ? '' : 1, 
                     width: product.productImages.length === 1 ? '400px' : 'calc(33.33% - 20px)',
                      height: '500px' }}
                    src={image}
                    alt={`productImage-${index}`}
                  />
                ))}
              </Box>
              ) : (
                <Typography variant='answer'>이미지가 없습니다</Typography>
              )

        ) : (
          product.productImages && product.productImages.length > 0 ? (
            <Carousel sx={{ zIndex: 0 }} autoPlay={false}>
              {product.productImages.map((image, index) => (
                <img
                  key={index}
                  style={{ borderRadius: '20px', width: '100%', height: '500px' }}
                  src={image}
                  alt={`productImage-${index}`}
                />
              ))}
            </Carousel>
          ) : (
            <Typography variant='answer'>이미지가 없습니다</Typography>
          )
        )}
      </Box>

      <Box className="price" sx={{ mt: '15px', borderRadius: '20px', bgcolor: '#252525', padding: '25px' }}>
        <Typography sx={{ mb: '14px' }} variant="question">가격</Typography>
        {product.price ?
        <Box sx={{display:'flex'}}><LocalOfferIcon sx={{mr:'6px',color:'#FFFFFF'}} />
        <Typography variant='answer' sx={{mt:'3px'}}>{product.price.toLocaleString()}원</Typography></Box> 
        : <Typography  variant='answer'>합의 가능</Typography>}
      </Box>
    </Box>
  );
};

export default ProductDetail;

