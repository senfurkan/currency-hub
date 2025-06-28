'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const navItems = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Döviz', href: '/currency' },
  { label: 'Altın', href: '/gold' },
  { label: 'Kripto', href: '/crypto' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 600,
          }}
        >
          Ekonomi Takip
        </Typography>

        <Box>
          {navItems.map(({ label, href }) => (
            <Button
              key={href}
              component={Link}
              href={href}
              sx={{
                color: pathname === href ? 'yellow' : 'white',
                fontWeight: pathname === href ? 700 : 400,
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
