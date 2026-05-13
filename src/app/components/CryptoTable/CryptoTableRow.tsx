import { memo } from 'react';
import { TableRow, TableCell } from '@mui/material';
import type { CryptoItem } from '@/types/market';

interface CryptoRowItem extends CryptoItem {
  changeHour?: string | number;
  changeDay?: string | number;
  changeWeek?: string | number;
  volume?: string | number;
  marketCap?: string | number;
  circulatingSupply?: string | number;
}

interface CryptoTableRowProps {
  item: CryptoRowItem;
}

function CryptoTableRow({ item }: CryptoTableRowProps) {
  return (
    <TableRow
      sx={(theme) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
        },
      })}
    >
      <TableCell>{item.code}</TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell
        sx={{
          color: Number.parseFloat(String(item.changeHour ?? 0)) > 0 ? 'green' : 'red',
          fontWeight: 500,
        }}
      >
        {item.changeHour}
      </TableCell>
      <TableCell
        sx={{
          color: Number.parseFloat(String(item.changeDay ?? 0)) > 0 ? 'green' : 'red',
          fontWeight: 500,
        }}
      >
        {item.changeDay}
      </TableCell>
      <TableCell
        sx={{
          color: Number.parseFloat(String(item.changeWeek ?? 0)) > 0 ? 'green' : 'red',
          fontWeight: 500,
        }}
      >
        {item.changeWeek}
      </TableCell>
      <TableCell>{item.volume}</TableCell>
      <TableCell>{item.marketCap}</TableCell>
      <TableCell>{item.circulatingSupply}</TableCell>
    </TableRow>
  );
}

export default memo(CryptoTableRow);
