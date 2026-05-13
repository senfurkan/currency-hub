import { memo } from 'react';
import { TableRow, TableCell, Avatar } from '@mui/material';

interface HisseSenediRowItem {
  text?: string;
  icon?: string;
  lastprice?: string | number;
  rate?: string | number;
  hacim?: string | number;
  min?: string | number;
  max?: string | number;
  time?: string;
}

interface HisseSenediTableRowProps {
  item: HisseSenediRowItem;
}

function HisseSenediTableRow({ item }: HisseSenediTableRowProps) {
  return (
    <TableRow
      sx={(theme) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
        },
      })}
    >
      <TableCell>
        <Avatar alt={item.text} src={item.icon} />
      </TableCell>
      <TableCell>{item.text}</TableCell>
      <TableCell>{item.lastprice}</TableCell>
      <TableCell
        sx={{
          color: Number.parseFloat(String(item.rate ?? 0)) > 0 ? 'green' : 'red',
          fontWeight: 500,
        }}
      >
        {item.rate}
      </TableCell>
      <TableCell>{item.hacim}</TableCell>
      <TableCell>{item.min}</TableCell>
      <TableCell>{item.max}</TableCell>
      <TableCell>{item.time}</TableCell>
    </TableRow>
  );
}

export default memo(HisseSenediTableRow);
