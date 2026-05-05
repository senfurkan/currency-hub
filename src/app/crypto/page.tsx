'use client';

import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import CryptoTable from '@/app/components/CryptoTable/CryptoTable';
import { useCryptoStore } from '@/store/useCryptoStore';

export default function CryptoPage() {
  const { data, isLoading, error, fetchCrypto } = useCryptoStore();

  useEffect(() => {
    fetchCrypto();
  }, [fetchCrypto]);

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography color="error">Hata: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <CryptoTable title={'Coin'} data={data} loading={isLoading} />
    </Container>
  );
}
