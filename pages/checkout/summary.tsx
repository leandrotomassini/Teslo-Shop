import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { CartList, OrderSummary } from '../../components/cart';

const SummaryPage = () => {
    return (
        <ShopLayout
            title={'Resumen de orden'}
            pageDescription={'Resumen de la orden'}
        >
            <Typography variant='h1' component='h1'>
                Resumen de la orden
            </Typography>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={7} sx={{ my: 2 }}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>

                            <Typography variant='h2'>Resumen: (3 productos)</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/checkout/address' passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar datos
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography variant='subtitle1'>
                                Dirección de entrega
                            </Typography>

                            <Typography>
                                Homero Simpson
                            </Typography>

                            <Typography>
                                3325 Av. Siempre Viva
                            </Typography>

                            <Typography>
                                Styisl. HY2112
                            </Typography>

                            <Typography>
                                Canadá
                            </Typography>

                            <Typography>
                                +1 558 8558
                            </Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar productos
                                    </Link>
                                </NextLink>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Confirmar orden
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default SummaryPage