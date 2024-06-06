"use client";

import { Box,Typography,Button } from "@mui/material";



function CardItem({data}) {

  
  
  
    return  (
  <Box>


   <p>제목:{data.title}</p>
   <p>카테고리:{data.category}</p>
   <p>설명:{data.description}</p>
   <p>종류:{data.type}</p>
   <p>수익여부:{data.revenue}</p>
   <p>수익설명:{data.revenueDesc}</p>
   <p>판매 이유:{data.whysell}</p>
   <p>가격:{data.price}</p>
   <p>최소 가격:{data.minPrice}</p>
  

  
  </Box>
    
  )}
  
  export default CardItem;
  