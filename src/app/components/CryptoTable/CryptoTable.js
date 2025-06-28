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
import CryptoTableRow from '@/app/components/CryptoTable/CryptoTableRow';
import SkeletonRow from '@/app/components/SkeletonRow';

export default function CryptoTable({ title, data, loading }) {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>Fiyat</TableCell>
              <TableCell>1s Değişimi</TableCell>
              <TableCell>24s Değişimi</TableCell>
              <TableCell>7g Değişimi</TableCell>
              <TableCell>Hacim (24s)</TableCell>
              <TableCell>Piyasa Değeri</TableCell>
              <TableCell>Arz</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} index={8}/>)
              : data.map((item) => <CryptoTableRow key={item.code} item={item} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
