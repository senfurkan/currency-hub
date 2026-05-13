import Link from 'next/link';
import { Box, Typography } from '@mui/material';

export default function Logo() {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#444b4e',
        p: 1,
        borderRadius: 1,
      }}
    >
      <Typography variant="h5" sx={{ color: 'white', lineHeight: 1 }}>
        Currency
      </Typography>

      <Box
        component="div"
        sx={{
          ml: 0.5,
          px: 1,
          bgcolor: '#ffd700',
          color: '#444b4e',
          fontSize: '1.875rem',
          borderRadius: 1,
          fontWeight: 'inherit',
          lineHeight: 1,
          fontFamily: 'inherit',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        hub
      </Box>
    </Box>
  );
}
