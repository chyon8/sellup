"use client";

import { Box, Typography, Button } from "@mui/material";
import { useState,useEffect } from "react";


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
    const response = await fetch(`/api/Product?${params}`);
    const data = await response.json();
    onDataReceived(data);

  };

  

  return (
    <Box sx={{ mb: '40px' }}>
      <Box sx={{ mb: '30px' }}>
        <Typography variant="h1" sx={{ mb: '10px' }}>종류</Typography>
        {fileter_type.map((type, index) => (
          <Button
            onClick={() => handleTypeClick(type)}
            sx={{ padding: '4px', mt: '5px', mr: '5px', bgcolor: typeValue?.includes(type) ? 'grey' : 'white' }}
            key={index}
            size="small"
            variant="outlined"
          >
            <Typography>{type}</Typography>
          </Button>
        ))}
      </Box>

      <Box>
        <Typography variant="h1" sx={{ mb: '10px' }}>카테고리</Typography>
        {fileter_category.map((cat, index) => (
          <Button
            onClick={() => handleCategoryClick(cat)}
            sx={{ padding: '4px', mt: '5px', mr: '5px', bgcolor: catValue?.includes(cat) ? 'grey' : 'white' }}
            key={index}
            size="small"
            variant="outlined"
          >
            <Typography>{cat}</Typography>
          </Button>
        ))}
      </Box>

      <Box sx={{ mt: '40px' }}>
        <Button onClick={handleSearchClick} variant="outlined">찾기</Button>

      </Box>
    </Box>
  );
}
