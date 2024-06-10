"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { Container,Typography,Box } from "@mui/material";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <Container>
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={60}
          height={60}
          alt="user"
        />
        <Box sx={{disaply:'grid',gap:3}}>
        <Typography variant="answer" > {session?.user?.name}</Typography>
      <Typography variant="answer" >{session?.user?.email}</Typography>
  
        </Box>
      
      </Container>
     
    );
  } else {
    return ;
  }
}
