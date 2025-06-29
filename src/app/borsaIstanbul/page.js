'use client';

import { useState, useEffect } from 'react';
import { fetchBorsaIstanbulData } from '@/app/lib/fetchBorsaIstanbul';
import { Container } from '@mui/material';
import BorsaIstanbulTable from '@/app/components/BorsaIstanbulTable/BorsaIstanbulTable';

export default function BorsaIstanbulPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBorsaIstanbulData()
      .then((response) => setData(response.data.result))
      .catch((err) => console.error('Veri alınırken hata:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <BorsaIstanbulTable title={'Borsa İstanbul'} data={data} loading={loading} />
    </Container>
  );
}
