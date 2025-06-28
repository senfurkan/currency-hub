import { TableRow, TableCell, Skeleton } from '@mui/material';

export default function CurrencySkeletonRow({index}) {
  return (
    <TableRow>
      {Array.from({ length: index }).map((_, idx) => (
        <TableCell key={idx}>
          <Skeleton variant="text" />
        </TableCell>
      ))}
    </TableRow>
  );
}
