/* eslint-disable @next/next/no-img-element */
import { Button, Typography } from '@mui/material';

export default function TallyFeedbackBtn() {
  return (
    // eslint-disable-next-line react/button-has-type
    <Button
      sx={{
        position: 'fixed',
        // right: '10%',
        right: { xs: '3vh', sm: '3vh', md: '15vh', lg: '15vh' },
        bottom: '5vh',
        // bottom: '1%',
        borderRadius: '100%',
        width: '60px',
        height: '60px',
        zIndex: 1,
        backgroundImage: "url('https://i.ibb.co/Bc10XpB/sellup.jpg')",
        backgroundSize: 'cover',
        transition: 'all 200ms',
        ':hover': {
          backgroundImage: "url('https://i.ibb.co/Bc10XpB/sellup.jpg')",
          backgroundSize: 'cover',
          boxShadow: '0px 0px 20px 0px #00FF66',
          borderRadius: '165px',
         
        },
      }}
      data-tally-open="3E18YA"
      data-tally-emoji-animation="wave"
      data-tally-auto-close="0"
    >
  
    </Button>
  );
}

