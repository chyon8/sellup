"use client"

import { Box,Typography,Button } from "@mui/material";
import { signIn } from "next-auth/react";

const LogInBox = () => {

  
    return (

        <Box display='grid' sx={{gap:3,mt:'80px',mb:'100px', justifyContent:'center'}}>
        <Typography sx={{textAlign:'center', color:'#FFFFFF'}} fontSize="18px">안녕하세요! </Typography>
       
        <Button onClick={() => signIn("google")}  sx={{ color: '#0A0A0A', backgroundColor: '#00FF66', }}><Typography>구글로 로그인하기</Typography></Button>

     </Box>

  
    );
  };
  
  
  
  export default LogInBox;