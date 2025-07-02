'use client';

import { useState, useEffect } from 'react';
import { Box, Grid, TextField, Typography, Paper, InputAdornment } from '@mui/material';
import CurrencySelect from '@/app/components/converter/CurrencySelect';
import ConvertButton from '@/app/components/converter/ConvertButton';
import SwitchButton from '@/app/components/converter/SwitchButton';
import { fetchSymbolsData } from '@/app/lib/fetchSymbols';
import { fetchExchangeData } from '@/app/lib/fetchExchange';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [symbols, setSymbols] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSymbolsData()
      .then((res) => setSymbols(res.data.result))
      .catch((err) => console.error('Veri alınırken hata:', err));
  }, []);

  const handleSwitch = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
  };

  const handleConvert = async () => {
    setLoading(true);
    fetchExchangeData(amount, to, from)
      .then((response) => setResult(response.data.result.data[0]))
      .catch((err) => console.error('Hata 💥', err))
      .finally(() => setLoading(false));
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Döviz Dönüştürücü
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Grid container spacing={2} rowSpacing={1.5} alignItems="center" justifyContent="center">
          <Grid item size={{ xs: 12, sm: 5.5 }}>
            <CurrencySelect
              label="Mevcut Döviz Cinsi"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              options={symbols}
            />
          </Grid>

          <Grid item size={{ xs: 12, sm: 1 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <SwitchButton onClick={handleSwitch} />
          </Grid>

          <Grid item size={{ xs: 12, sm: 5.5 }}>
            <CurrencySelect
              label="Çevrilecek Döviz"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              options={symbols}
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <TextField
              label="Tutar"
              type="number"
              value={amount}
              onChange={(e) => {
                const value = e.target.value;
                if (parseFloat(value) > 0 || value === '') {
                  setAmount(value);
                }
              }}
              fullWidth
              required
              InputProps={{
                endAdornment: from ? <InputAdornment position="end">{from}</InputAdornment> : null,
              }}
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <ConvertButton
              onClick={handleConvert}
              loading={loading}
              disabled={!amount || !from || !to || loading}
            />
          </Grid>
        </Grid>
      </Paper>

      {result && amount && from && to && (
        <Paper elevation={2} sx={{ mt: 4, p: 3, borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            {amount} {from} ≈ {result.calculated} {to}
          </Typography>
          <Typography variant="h6" gutterBottom>
            1 {from} = {result.rate} {to}
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
