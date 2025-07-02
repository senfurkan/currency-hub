'use client';

import { useState, useEffect } from 'react';
import { fetchCurrencyData } from '@/app/lib/fetchCurrency';
import { Container, Grid } from '@mui/material';
import EconomyTable from '@/app/components/EconomyTable/EconomyTable';
import CurrencyConverter from '@/app/components/converter/CurrencyConverter';

export default function CurrencyPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCurrencyData()
      .then((response) => setData(response.data.result))
      .catch((err) => console.error('Veri alınırken hata:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={4}>
        <Grid item size={{ xs: 12 }}>
          <CurrencyConverter />
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <EconomyTable title={'Döviz Kuru'} data={data} loading={loading} />
        </Grid>
      </Grid>
    </Container>
  );
}
