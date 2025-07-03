import React from 'react';
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
        p: 1, // tailwind p-2 yaklaşık padding: 8px
        borderRadius: 1, // 1 birim = 4px genelde, tailwind rounded = 0.25rem (4px)
      }}
    >
      <Typography
        variant="h5" // text-3xl yaklaşık 1.875rem ~ 30px, MUI'de h4 biraz küçük ama yaklaştırıyor
        sx={{ color: 'white', lineHeight: 1 }}
      >
        Currency
      </Typography>

      <Box
        component="div"
        sx={{
          ml: 0.5, // ml-1 = 0.25rem ~4px (MUI spacing unit 0.5 = 4px)
          px: 1, // px-2 = 0.5rem ~8px padding left-right
          bgcolor: '#ffd700',
          color: '#444b4e',
          fontSize: '1.875rem', // 30px, tailwind text-3xl
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
