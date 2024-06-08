"use client";

import { Box,Typography,Button } from "@mui/material";
import { useEffect,useState } from "react";
import CardItem from "./CardItem";
import BASE_URL from '../app/config.js'
import PaginationRounded from "./Pagination"; 
import Filter from '../components/Filter'

function Main() {

  const [data,setData]=useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);


  const handleDataFromFilter = (data) => {
   
    setData(data)
   
  };



  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
 
};


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/Product?page=${currentPage}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);


  const openFilter = () =>{
    setIsOpen(!isOpen)
  }



    return (

    
  <Box sx={{mb:'30px'}}>
    <Typography sx={{color:'#F0F0F0'}} fontWeight='600' fontSize='34px'>프로젝트</Typography>
    <Button onClick={openFilter} sx={{mb:'24px',bgcolor:'#00FF66',mt:'15px'}} >
     {isOpen ? <Typography fontWeight='700' fontSize='14px' sx={{color:'#0A0A0A'}} >필터 닫기</Typography> : <Typography fontSize='14px' fontWeight='700' sx={{color:'#0A0A0A'}}>필터 열기</Typography>} 
      </Button>
{isOpen && ( 

<Filter onDataReceived={handleDataFromFilter}/>
)}


   


        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 2,
            mt: 2,
            width: { xs: '100%'},
          }}
        >
          
          {data?.product? (data?.product.map((products,index)=>(
  <Box
  key={index}
  
  sx={{
    padding: '16px',
    border: '1px solid rgb(52, 52, 52)',
    borderRadius: '16px 16px 16px 16px',
    width:{lg:'300px'}
  }}
>
  <CardItem 
  data={products} 

  />


</Box>
          )))
          :(
            <p>skelton</p>
          )}

          {data?.totalCount === 0 && (<Typography sx={{color:'#FFFFFFF'}}>No Result Found</Typography>)} 

        </Box>


        <Box sx={{mt:'50px'}}>
     <PaginationRounded onPageChange={handlePageChange} totalPages={data?.totalPages}/>

     </Box>

</Box>
    
  )}
  
  export default Main;
  