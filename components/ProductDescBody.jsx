

import { Box,Typography,Card,CardActions,CardContent,Chip,Avatar } from "@mui/material";


function ProductDescBody({product}) {



  
    return  (
        <Box className="mainBody" sx={{ gap: 8, display: 'grid',mb:'35px' }}>

                    <Box><Typography sx={{ color: '#FFFFFF' }} fontSize='36px'>{product.title}</Typography></Box>
        <Box>
          <Typography sx={{ mb: '14px' }} variant='question'>어떤 종류의 프로젝트인가요?</Typography>
          <Typography variant='answer'>{product.type.join(',')}</Typography>
        </Box>
        {product.stack && (
          <Box>
            <Typography sx={{ mb: '14px' }} variant='question'>기술 스택에 대해서 말씀해주세요</Typography>
            <Typography variant='answer'>{product.stack}</Typography>
          </Box>
        )}
        <Box>
          <Typography sx={{ mb: '14px' }} variant='question'>어떤 카테고리의 프로젝트인가요?</Typography>
          <Typography variant='answer'>{product.category.join(',')}</Typography>
        </Box>
        <Box>
          <Typography sx={{ mb: '14px' }} variant='question'>사이드 프로젝트에 대해 설명해주세요</Typography>
          <Typography variant='answer'>{product.description}</Typography>
        </Box>
        <Box>
          <Typography sx={{ mb: '14px' }} variant='question'>사이드 프로젝트를 판매하는 이유를 말씀해주세요</Typography>
          <Typography variant='answer'>{product.whysell}</Typography>
        </Box>
        {product.revenue == "Y" && (
          <Box>
            <Typography sx={{ mb: '14px' }} variant='question'>수익화 여부 및 설명 있으면</Typography>
            <Typography variant='answer'>{product.revenueDesc}</Typography>
          </Box>
        )}
      </Box>
    
  )}
  
  export default ProductDescBody;
  