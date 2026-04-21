'use client';

import { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import EconomyTable from '@/app/components/EconomyTable/EconomyTable';
import CurrencyConverter from '@/app/components/converter/CurrencyConverter';
import { useCurrencyStore } from '@/store/useCurrencyStore';

export default function CurrencyPage() {
  const { data, loading, error, fetchCurrency } = useCurrencyStore();

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
          <CurrencyConverter />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <EconomyTable title={'Döviz Kuru'} data={data} loading={loading} />
        </Grid>
      </Grid>
    </Container>
  );
}
