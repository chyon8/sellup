/* eslint-disable @next/next/no-img-element */
"use client";

import { Box,Typography,useMediaQuery } from "@mui/material";
import Carousel from 'react-material-ui-carousel';


function ProductImage({product}) {

    const isLargeScreen = useMediaQuery('(min-width:1200px)');


  
    return  (
        <Box>
    
          {product.productImages && product.productImages.length > 0 ? (
            <Carousel sx={{ zIndex: 0 }} autoPlay={false}>
              {product.productImages.map((image, index) => (
                <img
                  key={index}
                  style={{ borderRadius: '20px', width: '100%', height: {xs:'400px' ,sm:'500px',md:'500px',lg:'500px'} }}
                  src={image}
                  alt={`productImage-${index}`}
                />
              ))}
            </Carousel>
          ) : (
            <Typography variant='answer'>이미지가 없습니다</Typography>
          )}
        
      </Box>
    
  )}
  
  export default ProductImage;
  