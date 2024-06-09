/* eslint-disable @next/next/no-img-element */
"use client";

import { Box,Typography,useMediaQuery } from "@mui/material";
import Carousel from 'react-material-ui-carousel';


function ProductImage({product}) {

    const isLargeScreen = useMediaQuery('(min-width:1200px)');


  
    return  (
        <Box>
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
    
  )}
  
  export default ProductImage;
  