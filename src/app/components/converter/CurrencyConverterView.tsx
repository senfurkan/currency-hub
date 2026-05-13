'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { ChangeEvent } from 'react';
import { Box, Grid, TextField, Typography, Paper, InputAdornment } from '@mui/material';
import CurrencySelect from '@/app/components/converter/CurrencySelect';
import ConvertButton from '@/app/components/converter/ConvertButton';
import SwitchButton from '@/app/components/converter/SwitchButton';
import { useExchangeStore } from '@/store/useExchangeStore';

export default function CurrencyConverterView() {
  const { symbols, result, isLoading, fetchSymbols, fetchExchange, setResult } = useExchangeStore();
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    fetchSymbols();
  }, [fetchSymbols]);

  const handleSwitch = useCallback(() => {
    setFrom(to);
    setTo(from);
    setResult(null);
  }, [from, to, setResult]);

  const handleConvert = useCallback(() => {
    fetchExchange(amount, to, from);
  }, [amount, to, from, fetchExchange]);

  const handleFromChange = useCallback((event: { target: { value: string } }) => {
    setFrom(event.target.value);
  }, []);

  const handleToChange = useCallback((event: { target: { value: string } }) => {
    setTo(event.target.value);
  }, []);

  const handleAmountChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '' || Number.parseFloat(value) > 0) {
      setAmount(value);
    }
  }, []);

  const conversionResult = useMemo(() => {
    if (!result || !amount || !from || !to) return null;

    return {
      calculatedText: `${amount} ${from} ≈ ${result.calculated} ${to}`,
      rateText: `1 ${from} = ${result.rate} ${to}`,
    };
  }, [result, amount, from, to]);

  const isConvertDisabled = useMemo(() => !amount || !from || !to || isLoading, [amount, from, to, isLoading]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Doviz Donusturucu
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Grid container spacing={2} rowSpacing={1.5} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, sm: 5.5 }}>
            <CurrencySelect
              label="Mevcut Doviz Cinsi"
              value={from}
              onChange={handleFromChange}
              options={symbols}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 1 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <SwitchButton onClick={handleSwitch} />
          </Grid>

          <Grid size={{ xs: 12, sm: 5.5 }}>
            <CurrencySelect
              label="Cevrilecek Doviz"
              value={to}
              onChange={handleToChange}
              options={symbols}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label="Tutar"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              fullWidth
              required
              InputProps={{
                endAdornment: from ? <InputAdornment position="end">{from}</InputAdornment> : null,
              }}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <ConvertButton onClick={handleConvert} loading={isLoading} disabled={isConvertDisabled} />
          </Grid>
        </Grid>
      </Paper>

      {conversionResult && (
        <Paper elevation={2} sx={{ mt: 4, p: 3, borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            {conversionResult.calculatedText}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {conversionResult.rateText}
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
