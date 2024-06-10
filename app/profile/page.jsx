"use client"

import UserInfo from "@/components/UserInfo";

import { signOut,useSession  } from "next-auth/react";
import { Button,Typography } from "@mui/material";


const getUserProfile = async () => {
    try {
     
// user 결제, 구독 정도 

  
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };


const Profile = () => {
  
  const { status } = useSession();


  return (


    <div className="p-4">

<UserInfo/>


{ status !== 'unauthenticated' && (

<Button sx={{ color:'#0A0A0A', backgroundColor: '#00FF66',}}
onClick={() => signOut()} 
    ><Typography >로그아웃</Typography>
  </Button>

)}    
     </div>



          )
 
 
};

export default Profile;



