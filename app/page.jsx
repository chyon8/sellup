"use client"

import { Container,Box } from "@mui/material";
import Main from "@/components/Main";
import LeftMenu from "@/components/LeftMenu";

const Home = () => {


  return (
    <Container>
     
     <Box sx={{display:'flex'}}>
    <LeftMenu/>
     <Main/>

     </Box>
     

    </Container>
  );
};

export default Home;
