import { Autocomplete, TextField } from '@mui/material';
import type { ExchangeSymbol } from '@/types/market';

interface SelectChangeEventLike {
  target: {
    value: string;
  };
}

interface CurrencySelectProps {
  value: string;
  onChange: (event: SelectChangeEventLike) => void;
  options: ExchangeSymbol[];
  label: string;
}

export default function CurrencySelect({ value, onChange, options, label }: CurrencySelectProps) {
  return (
    <Autocomplete
      options={options}
      value={options.find((option) => option.code === value) ?? null}
      onChange={(_, newValue) => {
        onChange({ target: { value: newValue?.code ?? '' } });
      }}
      getOptionLabel={(option) => `${option.name} (${option.code})`}
      isOptionEqualToValue={(option, selected) => option.code === selected.code}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
