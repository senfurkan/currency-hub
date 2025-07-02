import { IconButton } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export default function SwitchButton({ onClick }) {
  return (
    <IconButton onClick={onClick}>
      <SwapHorizIcon />
    </IconButton>
  );
}
