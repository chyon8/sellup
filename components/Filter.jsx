"use client";

import { Box, Typography, Button } from "@mui/material";
import { useState,useEffect } from "react";
import Link from "next/link";

export default function Filter({onDataReceived}) {
  const [typeValue, setTypeValue] = useState([]);
  const [catValue, setCatValue] = useState([]);
  const [refresh, setRefresh] = useState(false)



  const fileter_type = [
    "웹사이트", "웹앱", "모바일앱", "이커머스", "랜딩페이지", "유튜브 채널", "뉴스레터", "기타"
  ];

  const fileter_category = [
    "AI", "생산성", "플랫폼", "라이프스타일", "금융", "소셜", "미디어", "교육", "블록체인", "노코드",
    "커뮤니티", "디자인", "개발", "마케팅", "게임", "여행", "건강", "기타"
  ];

  const handleTypeClick = (type) => {
    setTypeValue((prev) =>
      prev?.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleCategoryClick = (cat) => {
    setCatValue((prev) =>
      prev?.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleSearchClick = async () => {
    const params = new URLSearchParams({
      type: typeValue.join(','),
      category: catValue.join(',')
    });
    const response = await fetch(`/api/product?${params}`);
    const data = await response.json();
    onDataReceived(data);

  };

  

  return (
    <Box sx={{ mb: '40px' }}>
      <Box sx={{ mb: '30px' }}>
        <Typography fontSize='15px' fontWeight='600' sx={{ mb: '10px',color:'#FFFF' }}>종류</Typography>
        {fileter_type.map((type, index) => (
          <Button
            onClick={() => handleTypeClick(type)}
            sx={{ pt: '8px',pr:'20px',pb:'8px',pl:'20px', mt: '10px', mr: '10px', bgcolor: typeValue?.includes(type) ? '#00FF66' : '#252525' }}
            key={index}
            size="small"
          
          >
            <Typography fontSize='14px' fontWeight='700' sx={{color:typeValue?.includes(type) ? '#0A0A0A': '#F0F0F0'}}>{type}</Typography>
          </Button>
        ))}
      </Box>

      <Box>
        <Typography fontWeight='600' fontSize='15px' sx={{ mb: '10px',color:'#FFFF' }}>카테고리</Typography>
        {fileter_category.map((cat, index) => (
          <Button
            onClick={() => handleCategoryClick(cat)}
            sx={{ pt: '8px',pr:'20px',pb:'8px',pl:'20px', mt: '10px', mr: '10px', bgcolor: catValue?.includes(cat) ? '#00FF66' : '#252525' }}
            key={index}
            size="small"
           
          >
            <Typography fontSize='14px' fontWeight='700' sx={{color: catValue?.includes(cat) ? '#0A0A0A' :'#F0F0F0'}}>{cat}</Typography>
          </Button>
        ))}
      </Box>

      <Box sx={{ mt: '35px', gap:2, display:'flex' }}>
        <Button sx={{ bgcolor:'#00FF66'}} onClick={handleSearchClick} >
<Typography fontWeight='500' fontSize='14px' sx={{color:'#0A0A0A'}} >찾기</Typography>
        </Button>

        <a style={{textDecoration:'none'}} href={'/'}>
        <Button sx={{ bgcolor:'#00FF66'}}>
        
<Typography fontWeight='500' fontSize='14px' sx={{color:'#0A0A0A'}} >리셋</Typography>
</Button></a> 

      </Box>
    </Box>
  );
}

