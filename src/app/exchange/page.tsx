'use client';

import { Container } from '@mui/material';
import CurrencyConverter from '@/app/components/converter/CurrencyConverterView';

export default function ExchangePage() {
  return (
    <Container>
      <CurrencyConverter />
    </Container>
  );
}
