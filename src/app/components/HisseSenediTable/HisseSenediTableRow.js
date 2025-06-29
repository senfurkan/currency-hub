import { TableRow, TableCell, Avatar } from '@mui/material';

export default function HisseSenediTableRow({ item }) {
  return (
    <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
      <TableCell>
        <Avatar alt={item.text} src={item.icon} />
      </TableCell>
      <TableCell>{item.text}</TableCell>
      <TableCell>{item.lastprice}</TableCell>
      <TableCell
        sx={{
          color: parseFloat(item.rate) > 0 ? 'green' : 'red',
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
