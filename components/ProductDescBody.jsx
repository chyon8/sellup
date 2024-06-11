

import { Box,Typography,Card,CardActions,CardContent,Chip,Avatar } from "@mui/material";


function ProductDescBody({product}) {



  
    return  (
        <Box className="mainBody" sx={{ gap: 8, display: 'grid',mb:'35px' }}>

                    <Box><Typography sx={{ color: '#FFFFFF' }} fontSize='36px'>{product.title}</Typography></Box>
        <Box>
          <Typography sx={{ mb: '14px' }} variant='question'>프로젝트 종류</Typography>
          <Typography variant='answer'>{product.type.join(',')}</Typography>
        </Box>
        {product.stack && (
          <Box>
            <Typography sx={{ mb: '14px' }} variant='question'>기술 스택</Typography>
            <Typography variant='answer'>{product.stack}</Typography>
          </Box>
        )}
        <Box>
          <Typography sx={{ mb: '14px' }} variant='question'>프로젝트 카테고리</Typography>
          <Typography variant='answer'>{product.category.join(',')}</Typography>
        </Box>
        <Box>
          <Typography sx={{ mb: '14px' }} variant='question'>사이드 프로젝트에 대한 설명</Typography>
          <Typography variant='answer'>{product.description}</Typography>
        </Box>
        <Box>
          <Typography sx={{ mb: '14px' }} variant='question'>판매하는 이유</Typography>
          <Typography variant='answer'>{product.whysell}</Typography>
        </Box>
        {product.revenue == "Y" && (
          <Box>
            <Typography sx={{ mb: '14px' }} variant='question'>수익 설명 </Typography>
            <Typography variant='answer'>{product.revenueDesc}</Typography>
          </Box>
        )}
      </Box>
    
  )}
  
  export default ProductDescBody;
  