'use client';

import { useState, useEffect } from 'react';
import { fetchCryptoData } from '@/app/lib/fetchCrypto';
import { Container } from '@mui/material';
import CryptoTable from '@/app/components/CryptoTable/CryptoTable';

export default function CryptoPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCryptoData()
      .then((response) => setData(response.data.result))
      .catch((err) => console.error('Veri alınırken hata:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <CryptoTable title={'Coin'} data={data} loading={loading} />
    </Container>
  );
}
