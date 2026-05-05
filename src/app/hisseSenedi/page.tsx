'use client';

import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import HisseSenedi from '@/app/components/HisseSenediTable/HisseSenediTable';
import { useHisseSenediStore } from '@/store/useHisseSenediStore';

export default function HisseSenediPage() {
  const { data, isLoading, error, fetchHisseSenedi } = useHisseSenediStore();

  useEffect(() => {
    fetchHisseSenedi();
  }, [fetchHisseSenedi]);

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography color="error">Hata: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <HisseSenedi title={'Hisse Senedi'} data={data} loading={isLoading} />
    </Container>
  );
}
