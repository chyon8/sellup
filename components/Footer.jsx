/* eslint-disable @next/next/no-img-element */

import { Typography, Box,Container } from '@mui/material';

const Footer = () => {


  return (
  
<Container>

<Box className="Footer" sx={{ mt: '15px', borderRadius: '15px', bgcolor: '#191919', paddingTop:'20px',paddingRight:'30px',paddingBottom:'20px',paddingLeft:'30px',
boxShadow: '5px 5px 10px 0px #000000',mb:'28px'
 }}>
    

        

<Box sx={{display:'flex',justifyContent:'center'}}>
<img src="https://i.ibb.co/Bc10XpB/sellup.jpg" alt="logo" style={{width:'30px',height:'30px'}} />
<Typography textAlign='center' fontSize='20px' sx={{ mb: '14px',color:'#FFFFFF',ml:'10px',mt:'7px' }}>셀업</Typography>
</Box>


        <Box sx={{display:'flex',justifyContent:'center'}}>
        <Typography fontSize='14px' fontWeight='700px' sx={{mt:'3px',color:'#CCCCCC'}}>Copyright 2024 - All Right Reserved

</Typography></Box> 

     
      </Box>


</Container>


  );
};

export default Footer;




