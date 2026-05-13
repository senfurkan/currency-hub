import { IconButton } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

interface SwitchButtonProps {
  onClick: () => void;
}

export default function SwitchButton({ onClick }: SwitchButtonProps) {
  return (
    <IconButton onClick={onClick}>
      <SwapHorizIcon />
    </IconButton>
  );
}
