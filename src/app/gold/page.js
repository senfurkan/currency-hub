'use client';

import { useState, useEffect } from 'react';
import { fetchGoldData } from '@/app/lib/fetchGold';
import { Container } from '@mui/material';
import EconomyTable from '@/app/components/EconomyTable/EconomyTable';

export default function GoldPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGoldData()
      .then((response) => setData(response.data.result))
      .catch((err) => console.error('Veri alınırken hata:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <EconomyTable title={'Altın'} data={data} loading={loading} />
    </Container>
  );
}
