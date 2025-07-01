'use client';

import { useState, useEffect } from 'react';
import { fetchEmtiaData } from '@/app/lib/fetchEmtia';
import { Container } from '@mui/material';
import EmtiaTable from '@/app/components/EmtiaTable/EmtiaTable';

export default function EmtiaPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmtiaData()
      .then((response) => setData(response.data.result))
      .catch((err) => console.error('Veri alınırken hata:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <EmtiaTable title={'Emtia'} data={data} loading={loading} />
    </Container>
  );
}
