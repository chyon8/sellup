"use client";

import { Box,Typography,Button } from "@mui/material";
import CardItem from "./CardItem";

function Main() {

  
  
    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ ml: '4px' }} variant="h1">
            최근리뷰{' '}
          </Typography>
       
        </Box>
  
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 2,
            mt: 2,
            width: { xs: '100%' },
          }}
        >
              <Box
                sx={{
                  padding: '16px',
                  border: '1px solid rgb(52, 52, 52)',
                  borderRadius: '16px 16px 16px 16px',
                }}
              >
                <CardItem/>
              </Box>


              <Box
                sx={{
                  padding: '16px',
                  border: '1px solid rgb(52, 52, 52)',
                  borderRadius: '16px 16px 16px 16px',
                }}
              >
                <CardItem/>
              </Box>

              <Box
                sx={{
                  padding: '16px',
                  border: '1px solid rgb(52, 52, 52)',
                  borderRadius: '16px 16px 16px 16px',
                }}
              >
                <CardItem/>
              </Box>
        


        </Box>
      </>
   
  )}
  
  export default Main;
  