import { CircularProgress, Button } from '@mui/material';

interface ConvertButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

export default function ConvertButton({ onClick, loading, disabled }: ConvertButtonProps) {
  return (
    <Button fullWidth variant="contained" color="secondary" onClick={onClick} disabled={disabled}>
      {loading ? <CircularProgress size={20} color="inherit" /> : 'Donustur'}
    </Button>
  );
}
