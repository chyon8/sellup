
/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BASE_URL from '@/app/config';
import { Typography, Box, Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useSession,signIn } from "next-auth/react";

const ProductDetailLeft = () => {
  const router = useParams();
  const productId = router.productId;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { status,data: session } = useSession();



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
  

   
   <Box sx={{bgcolor: '#252525', borderRadius: '20px'}}>

{status === "authenticated" ?(
        <Box sx={{padding:'15px',display:'grid'}}>



{session?.user.id==product?.user._id && ( <Box sx={{display:'flex',justifyContent:'flex-end'}}>
               <Button> <EditIcon sx={{color:'#FFFFFF'}}/></Button>
       </Box>)}

       
       
        
       
       
       <Box sx={{display:'flex',gap:2}}>
           <LinkIcon sx={{color:'#FFFFFF'}}/>
           <Typography variant='question'>프로젝트 링크</Typography>
       </Box>
       
       <Box sx={{mt:'24px', ml:'38px'}}>
           <Link style={{textDecoration:'none'}} href=""><Typography sx={{color:'grey'}} variant='answer'>https://hypehop.co.kr</Typography></Link>
       </Box>
       
       
       <Box sx={{display:'flex',gap:2, mt:'50px'}}>
           <PeopleOutlineIcon sx={{color:'#FFFFFF'}}/>
           <Typography variant='question'>소셜 프로필</Typography>
         
       </Box>
       
       <Box sx={{mt:'24px', ml:'38px',display:'grid',gap:2}}>
           <Link style={{textDecoration:'none'}} href=""><Typography sx={{color:'grey'}} variant='answer'>https://hypehop.co.kr</Typography></Link>
           <Link style={{textDecoration:'none'}} href=""><Typography sx={{color:'grey'}} variant='answer'>https://hypehop.co.kr</Typography></Link>
           <Link style={{textDecoration:'none'}} href=""><Typography sx={{color:'grey'}} variant='answer'>https://hypehop.co.kr</Typography></Link>
           <Link style={{textDecoration:'none'}} href=""><Typography sx={{color:'grey'}} variant='answer'>https://hypehop.co.kr</Typography></Link>
       </Box>
       
       </Box>
):
 
<Box sx={{padding:'20px',display:'grid', gap:2}}>
<Typography textAlign='center' variant='answer'>로그인 하고 자세한 판매자 정보를 확인해보세요!</Typography>

<Button  onClick={() => signIn("google")} sx={{color:"#0A0A0A",bgcolor:'#00FF66'}}><Typography>로그인</Typography></Button>
</Box>

}



   </Box>

   


  );
};

export default ProductDetailLeft;




