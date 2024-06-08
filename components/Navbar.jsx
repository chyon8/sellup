"use client";

import { Box,Button,Typography,Container } from "@mui/material";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
export default function Navbar() {
  const { status,data: session } = useSession();

  return (
    <Container>
    <Box sx={{ bgcolor:'#191919',border:'1px solid #252525', boxShadow: '5px 6px 20px #000000',height:'auto',
      borderRadius:'15px',paddingTop:'15px',paddingRight:'35px',paddingBottom:'15px',paddingLeft:'35px', mt:'35px',mb:'35px'}} 
    className="  flex justify-between items-center shadow-md bg-page">
    

      <Link className="font-bold text-lg" href={"/"} style={{textDecoration:'none',color:'white'}}>
       <Typography fontWeight='500' fontSize='20px'>Sell Up</Typography> 
      </Link>
     

      {status === "authenticated" ? (

<Box className="flex">





        <Link className="font text-sm ml-2 mt-1" href={"/profile"}>
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={30}
          height={30}
          alt="user"
        />
            </Link>

            <a href={`/add`} style={{textDecoration:'none',color:'inherit'}}>
<Button sx={{bgcolor:'#252525',ml:'10px', borderRadius:'10px',pt:'10px',pr:'20px',pb:'10px',pl:'20px'}} ><Typography fontWeight='700' fontSize='14px'>등록하기</Typography></Button>
</a>

</Box>


      ) : (

    
        <button
          onClick={() => signIn("google")}

          className="text-white px-4 py-2 border border-gray-800 rounded-xl"
        >
          Sign In
        </button>
      


        

           
      )}
    </Box>
    </Container>
  );
}
