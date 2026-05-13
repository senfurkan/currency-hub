import { memo } from 'react';
import { TableRow, TableCell } from '@mui/material';
import type { MarketItem } from '@/types/market';

interface EmtiaTableRowProps {
  item: MarketItem;
}

function EmtiaTableRow({ item }: EmtiaTableRowProps) {
  return (
    <TableRow
      sx={(theme) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
        },
      })}
    >
      <TableCell>{item.text}</TableCell>
      <TableCell align="right">{item.buying}</TableCell>
      <TableCell align="right">{item.selling}</TableCell>
      <TableCell
        align="right"
        sx={{
          color: Number.parseFloat(String(item.rate ?? 0)) > 0 ? 'green' : 'red',
          fontWeight: 500,
        }}
      >
        {item.rate}
      </TableCell>
      <TableCell align="right">{item.time}</TableCell>
    </TableRow>
  );
}

export default memo(EmtiaTableRow);
