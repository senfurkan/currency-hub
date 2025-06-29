import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import HisseSenediTableRow from '@/app/components/HisseSenediTable/HisseSenediTableRow';
import SkeletonRow from '@/app/components/SkeletonRow';

export default function HisseSenediTable({ title, data, loading }) {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>Fiyat</TableCell>
              <TableCell>Değişim %</TableCell>
              <TableCell>Hacim</TableCell>
              <TableCell>En Düşük</TableCell>
              <TableCell>En Yüksek</TableCell>
              <TableCell>Saat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} index={8} />)
              : data.map((item) => <HisseSenediTableRow key={item.code} item={item} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
