"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button,Typography } from "@mui/material";


export default function SignInBtn() {
  return (
    <div className="p-4">

<div className="flex">

<Button sx={{ color:'#0A0A0A', backgroundColor: '#00FF66',}}
onClick={() => signIn("google")} 
    ><Typography >로그인</Typography>
  </Button>
</div>

    </div>

  );


}
