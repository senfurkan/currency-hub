import { memo } from 'react';
import { TableRow, TableCell } from '@mui/material';

interface BorsaIstanbulRowItem {
  date?: string;
  time?: string;
  opening?: string | number;
  closing?: string | number;
  current?: string | number;
  changerate?: string | number;
  min?: string | number;
  max?: string | number;
}

interface BorsaIstanbulTableRowProps {
  item: BorsaIstanbulRowItem;
}

function BorsaIstanbulTableRow({ item }: BorsaIstanbulTableRowProps) {
  return (
    <TableRow
      sx={(theme) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
        },
      })}
    >
      <TableCell>{item.date}</TableCell>
      <TableCell>{item.time}</TableCell>
      <TableCell>{item.opening}</TableCell>
      <TableCell>{item.closing}</TableCell>
      <TableCell>{item.current}</TableCell>
      <TableCell
        sx={{
          color: Number.parseFloat(String(item.changerate ?? 0)) > 0 ? 'green' : 'red',
          fontWeight: 500,
        }}
      >
        {item.changerate}
      </TableCell>
      <TableCell>{item.min}</TableCell>
      <TableCell>{item.max}</TableCell>
    </TableRow>
  );
}

export default memo(BorsaIstanbulTableRow);
