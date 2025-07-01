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
import EconomyTableRow from '@/app/components/EconomyTable/EconomyTableRow';
import SkeletonRow from '@/app/components/SkeletonRow';

export default function CurrencyTable({ title, data, loading }) {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{title}</TableCell>
              <TableCell align="right">Alış</TableCell>
              <TableCell align="right">Satış</TableCell>
              <TableCell align="right">%</TableCell>
              <TableCell align="right">Saat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} index={5}/>)
              : data.map((item) => <EconomyTableRow key={item.code ? item.code : item.name} item={item} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
