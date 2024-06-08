

import { useParams } from 'next/navigation';
import BASE_URL from '@/app/config';
import { Typography,Box,Container } from '@mui/material';
import ProductDetail from '@/components/ProductDetail';

const ProductPage = () => {


  return (
    <Container>
   
   <ProductDetail/>
    
    <Box sx={{mt:'80px'}}>
  
  
  <Typography variant="h1">Contact</Typography>

   <iframe data-tally-src={`https://tally.so/embed/m6kOvA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
   loading="lazy" width="100%" height="200" frameborder="0" marginheight="0" marginwidth="0" title="Contact"></iframe>
      </Box>

     </Container>
  );
};

export default ProductPage;
