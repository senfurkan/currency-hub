import { Autocomplete, TextField } from '@mui/material';

export default function CurrencySelect({ value, onChange, options, label }) {
  return (
    <Autocomplete
      options={options}
      value={options.find((option) => option.code === value) || null}
      onChange={(event, newValue) => {
        onChange({ target: { value: newValue?.code || '' } });
      }}
      getOptionLabel={(option) => `${option.name} (${option.code})`}
      isOptionEqualToValue={(option, val) => option.code === val.code}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
