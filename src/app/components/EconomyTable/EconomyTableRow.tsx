import { memo } from 'react';
import { TableRow, TableCell } from '@mui/material';
import type { MarketItem } from '@/types/market';

interface EconomyRowItem extends MarketItem {
  buyingstr?: string | number;
  sellingstr?: string | number;
}

interface CurrencyTableRowProps {
  item: EconomyRowItem;
}

function CurrencyTableRow({ item }: CurrencyTableRowProps) {
  return (
    <TableRow
      sx={(theme) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
        },
      })}
    >
      <TableCell>{item.name}</TableCell>
      <TableCell align="right">{item.buyingstr}</TableCell>
      <TableCell align="right">{item.sellingstr}</TableCell>
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

export default memo(CurrencyTableRow);
