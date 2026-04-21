'use client';

import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import EconomyTable from '@/app/components/EconomyTable/EconomyTable';
import { useGoldStore } from '@/store/useGoldStore';

export default function GoldPage() {
  const { data, loading, error, fetchGold } = useGoldStore();

  useEffect(() => {
    fetchGold();
  }, [fetchGold]);

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography color="error">Hata: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <EconomyTable title={'Altın'} data={data} loading={loading} />
    </Container>
  );
}
