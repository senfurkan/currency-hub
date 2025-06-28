'use client';

import { useState, useEffect } from 'react';
import { fetchCurrencyData } from '@/app/lib/fetchCurrency';
import { Container } from '@mui/material';
import EconomyTable from '@/app/components/EconomyTable/EconomyTable';

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
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <EconomyTable title={'Döviz Kuru'} data={data} loading={loading} />
    </Container>
  );
}
