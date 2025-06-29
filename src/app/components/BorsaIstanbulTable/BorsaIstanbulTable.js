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
import BorsaIstanbulTableRow from '@/app/components/BorsaIstanbulTable/BorsaIstanbulTableRow';
import SkeletonRow from '@/app/components/SkeletonRow';

export default function BorsaIstanbulTable({ title, data, loading }) {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tarih</TableCell>
              <TableCell>Saat</TableCell>
              <TableCell>Açılış</TableCell>
              <TableCell>Kapanış</TableCell>
              <TableCell>Güncel</TableCell>
              <TableCell>Değişim %</TableCell>
              <TableCell>En Düşük</TableCell>
              <TableCell>En Yüksek</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} index={8} />)
              : data.map((item) => <BorsaIstanbulTableRow key={1} item={item} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
