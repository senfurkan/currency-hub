import { TableRow, TableCell, Skeleton } from '@mui/material';

interface CurrencySkeletonRowProps {
  index: number;
}

export default function CurrencySkeletonRow({ index }: CurrencySkeletonRowProps) {
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
