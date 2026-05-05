'use client';

import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import BorsaIstanbulTable from '@/app/components/BorsaIstanbulTable/BorsaIstanbulTable';
import { useBorsaIstanbulStore } from '@/store/useBorsaIstanbulStore';

export default function BorsaIstanbulPage() {
  const { data, isLoading, error, fetchBorsaIstanbul } = useBorsaIstanbulStore();

  useEffect(() => {
    fetchBorsaIstanbul();
  }, [fetchBorsaIstanbul]);

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography color="error">Hata: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <BorsaIstanbulTable title={'Borsa İstanbul'} data={data} loading={isLoading} />
    </Container>
  );
}
