import { Button } from '@mui/material';

export default function ConvertButton({  onClick, loading, disabled }) {
  return (
    <Button
      fullWidth
      variant="contained"
      color="secondary"
      onClick={onClick}
      loading={loading}
      disabled={disabled}
    >
      Dönüştür
    </Button>
  );
}
