import { TableRow, TableCell, Avatar } from '@mui/material';

export default function BorsaIstanbulTableRow({ item }) {
  return (
    <TableRow sx={(theme) => ({
    '&:nth-of-type(odd)': {
      backgroundColor:
        theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
    },
  })}>
      <TableCell>{item.date}</TableCell>
      <TableCell>{item.time}</TableCell>
      <TableCell>{item.opening}</TableCell>
      <TableCell>{item.closing}</TableCell>
      <TableCell>{item.current}</TableCell>
      <TableCell
        sx={{
          color: parseFloat(item.changerate) > 0 ? 'green' : 'red',
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
