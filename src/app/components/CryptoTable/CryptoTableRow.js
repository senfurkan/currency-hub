import { TableRow, TableCell } from '@mui/material';

export default function CurrencyTableRow({ item }) {
  return (
    <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
      <TableCell>{item.code}</TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell
        sx={{
          color: parseFloat(item.changeHour) > 0 ? 'green' : 'red',
          fontWeight: 500,
        }}
      >
        {item.changeHour}
      </TableCell>
      <TableCell
        sx={{
          color: parseFloat(item.changeDay) > 0 ? 'green' : 'red',
          fontWeight: 500,
        }}
      >
        {item.changeDay}
      </TableCell>
      <TableCell
        sx={{
          color: parseFloat(item.changeWeek) > 0 ? 'green' : 'red',
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
