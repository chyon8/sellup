

import { useParams } from 'next/navigation';
import BASE_URL from '@/app/config';
import { Typography,Box,Container } from '@mui/material';
import ProductDetail from '@/components/ProductDetail';

const ProductPage = () => {


  return (
    <Container>
   
   <ProductDetail/>
    
  
     </Container>
  );
};

export default ProductPage;
