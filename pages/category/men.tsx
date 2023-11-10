import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { useProducts } from '../../hooks';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreeLoading } from '../../components/ui';




const MenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=men')

  return (
    <ShopLayout title={'Teslo-Shop - Hombres'} pageDescription={'Encuentra los mejores productos de Teslo para niños'}>
      <Typography variant='h1' component='h1'>Hombres</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Productos para hombres</Typography>

      {
        isLoading
          ? <FullScreeLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  );
}

export default MenPage
