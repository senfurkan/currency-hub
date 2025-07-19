import { TableRow, TableCell } from '@mui/material';

export default function CurrencyTableRow({ item }) {
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
          color: parseFloat(item.rate) > 0 ? 'green' : 'red',
          fontWeight: 500,
        }}
      >
        {item.rate}
      </TableCell>
      <TableCell align="right">{item.time}</TableCell>
    </TableRow>
  );
}
