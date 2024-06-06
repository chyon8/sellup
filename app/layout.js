import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./Providers";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sell Up",
  description: "Market place for side projects",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <NextAuthProvider>
          
<head>
<link rel="shortcut icon" href="images/favicon.ico" />
<script async src="https://tally.so/widgets/embed.js"></script>


</head>
      <body className={inter.className}>
      
          <div className="flex flex-col h-screen max-h-screen">
            <Navbar />
            <div className="flex-grow overflow-y-auto bg-page text-default-text p-10">
       <AppRouterCacheProvider>
       <ThemeProvider theme={theme}>
       {children}
       </ThemeProvider>
        </AppRouterCacheProvider>  
      
      


 
    </div>


   

          </div>
     
       
      </body>


    
        </NextAuthProvider>
    </html>
  );
}
