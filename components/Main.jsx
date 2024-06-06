"use client";

import { Box,Typography,Button } from "@mui/material";
import { useEffect,useState } from "react";
import CardItem from "./CardItem";
import BASE_URL from '../app/config.js'

function Main() {

  const [data,setData]=useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/Product`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
console.log(data)

    return (

    
  <Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 2,
            mt: 2,
            width: { xs: '100%' },
          }}
        >
          {data?.product? (data?.product.map((products,index)=>(
  <Box
  key={index}
  sx={{
    padding: '16px',
    border: '1px solid rgb(52, 52, 52)',
    borderRadius: '16px 16px 16px 16px',
  }}
>
  <CardItem 
  data={products} 

  />

</Box>
          )))
          :(
            <p>skelton</p>
          )}
            

        </Box>

<Box sx={{mt:'16px'}}>kk</Box>

</Box>
    
  )}
  
  export default Main;
  