'use client';

import { useState, useEffect } from 'react';
import { fetchHisseSenediData, IHisseSenedi } from '@/app/lib/fetchHisseSenedi';
import { Container } from '@mui/material';
import HisseSenedi from '@/app/components/HisseSenediTable/HisseSenediTable';

export default function HisseSenediPage() {
  const [data, setData] = useState<IHisseSenedi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchHisseSenediData()
      .then((response) => setData(response.data.result))
      .catch((err) => console.error('Veri alınırken hata:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <HisseSenedi title={'Hisse Senedi'} data={data} loading={loading} />
    </Container>
  );
}
