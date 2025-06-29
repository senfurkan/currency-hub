'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Döviz', href: '/currency' },
  { label: 'Altın', href: '/gold' },
  { label: 'Kripto', href: '/crypto' },
  { label: 'Hisse Senedi', href: '/hisseSenedi' },
  { label: 'Borsa İstanbul', href: '/borsaIstanbul' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme(); // 🎯

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Currencyhub
      </Typography>
      <List>
        {navItems.map(({ label, href }) => (
          <ListItem
            key={href}
            component={Link}
            href={href}
            sx={{
              justifyContent: 'center',
              color: pathname === href ? theme.palette.secondary.main : 'inherit',
              fontWeight: pathname === href ? 700 : 400,
            }}
          >
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="primary" component="nav">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
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
            Currencyhub
          </Typography>

          {/* Masaüstü menü */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map(({ label, href }) => (
              <Button
                key={href}
                component={Link}
                href={href}
                sx={{
                  color: pathname === href ? theme.palette.secondary.main : 'white',
                  fontWeight: pathname === href ? 700 : 400,
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobil menü ikonu */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobilde Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }} // mobile performance
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
