'use client';

import { lazy, Suspense, useEffect } from 'react';
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import { useCurrencyStore } from '@/store/useCurrencyStore';

const CurrencyConverterSection = lazy(() => import('@/app/components/converter/CurrencyConverterView'));
const EconomyTableSection = lazy(() => import('@/app/components/EconomyTable/EconomyTable'));

function ConverterFallback() {
  return (
    <Box>
      <Skeleton variant="text" width={220} height={48} sx={{ mb: 1 }} />
      <Skeleton variant="rounded" height={280} />
    </Box>
  );
}

function TableFallback() {
  return (
    <Box>
      <Skeleton variant="text" width={180} height={48} sx={{ mb: 1 }} />
      <Skeleton variant="rounded" height={420} />
    </Box>
  );
}

export default function CurrencyPage() {
  const { data, isLoading, error, fetchCurrency } = useCurrencyStore();

  useEffect(() => {
    fetchCurrency();
  }, [fetchCurrency]);

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography color="error">Hata: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={4}>
        <Grid size={{ xs: 12 }}>
          <Suspense fallback={<ConverterFallback />}>
            <CurrencyConverterSection />
          </Suspense>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Suspense fallback={<TableFallback />}>
            <EconomyTableSection title={'Döviz Kuru'} data={data} loading={isLoading} />
          </Suspense>
        </Grid>
      </Grid>
    </Container>
  );
}
