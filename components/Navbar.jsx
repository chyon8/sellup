"use client";

import { Box,Button } from "@mui/material";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
export default function Navbar() {
  const { status,data: session } = useSession();

  return (
    <Box className="p-1 pl-16 pr-16  flex justify-between items-center shadow-md bg-page">
    

      <Link className="font-bold text-lg" href={"/"} style={{color:'#234DA3'}}>
        Sell Up
      </Link>
     

      {status === "authenticated" ? (

<Box className="flex">


<a href={`/add`} style={{textDecoration:'none',color:'inherit'}}>
<Button variant="outlined">등록하기</Button>
</a>


        <Link className="font text-sm ml-2 mt-1" href={"/profile"}>
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={30}
          height={30}
          alt="user"
        />
            </Link>


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
  );
}
