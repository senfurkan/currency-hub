'use client';

import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import EmtiaTable from '@/app/components/EmtiaTable/EmtiaTable';
import { useEmtiaStore } from '@/store/useEmtiaStore';

export default function EmtiaPage() {
  const { data, isLoading, error, fetchEmtia } = useEmtiaStore();

  useEffect(() => {
    fetchEmtia();
  }, [fetchEmtia]);

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography color="error">Hata: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <EmtiaTable title={'Emtia'} data={data} loading={isLoading} />
    </Container>
  );
}
