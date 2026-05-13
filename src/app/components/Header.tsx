'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Logo from '@/app/components/Logo';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  subItems?: NavSubItem[];
}

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems: NavItem[] = [
  { label: 'Doviz', href: '/currency' },
  {
    label: 'Altin',
    subItems: [
      { label: 'Altin Fiyatlari', href: '/gold' },
      { label: 'Diger Emtia', href: '/emtia' },
    ],
  },
  {
    label: 'Borsa',
    subItems: [
      { label: 'Hisse Senedi', href: '/hisseSenedi' },
      { label: 'Borsa Istanbul', href: '/borsaIstanbul' },
    ],
  },
  { label: 'Kripto', href: '/crypto' },
];

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<Record<string, boolean>>({});
  const [anchorEl, setAnchorEl] = useState<Record<string, HTMLElement | null>>({});
  const theme = useTheme();

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  const handleMobileToggle = (label: string) => {
    setMobileMenuOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleDesktopMenuToggle = (label: string, event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl((prev) => ({
      ...prev,
      [label]: prev[label] ? null : event.currentTarget,
    }));
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Logo />
      <List>
        {[...navItems, { label: 'Donustur', href: '/exchange' }].map(({ label, href, subItems }) =>
          subItems ? (
            <Box key={label}>
              <ListItemButton
                onClick={() => handleMobileToggle(label)}
                sx={{ justifyContent: 'space-between', px: 3 }}
              >
                <ListItemText primary={label} />
                {mobileMenuOpen[label] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
              <Collapse in={mobileMenuOpen[label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {subItems.map((item) => (
                    <ListItem
                      key={item.href}
                      component={Link}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      sx={{ pl: 6 }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          ) : (
            <ListItem
              key={href}
              component={Link}
              href={href ?? '/'}
              onClick={() => setMobileOpen(false)}
              sx={{
                justifyContent: 'center',
                color: pathname === href ? theme.palette.secondary.main : 'inherit',
                fontWeight: pathname === href ? 700 : 400,
              }}
            >
              <ListItemText primary={label} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="primary" component="nav">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Logo />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {navItems.map(({ label, href, subItems }) => {
              const open = Boolean(anchorEl[label]);

              if (subItems) {
                const isActive = subItems.some((item) => pathname === item.href);

                return (
                  <Box key={label}>
                    <Button
                      onClick={(event) => handleDesktopMenuToggle(label, event)}
                      sx={{
                        color: isActive ? theme.palette.secondary.main : 'white',
                        fontWeight: isActive ? 700 : 400,
                      }}
                      endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    >
                      {label}
                    </Button>
                    <Menu
                      anchorEl={anchorEl[label]}
                      open={open}
                      onClose={() => setAnchorEl((prev) => ({ ...prev, [label]: null }))}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                      {subItems.map((item) => (
                        <MenuItem
                          key={item.href}
                          component={Link}
                          href={item.href}
                          onClick={() => setAnchorEl((prev) => ({ ...prev, [label]: null }))}
                          selected={pathname === item.href}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                );
              }

              return (
                <Button
                  key={href}
                  component={Link}
                  href={href ?? '/'}
                  sx={{
                    color: pathname === href ? theme.palette.secondary.main : 'white',
                    fontWeight: pathname === href ? 700 : 400,
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <Button component={Link} href="/exchange" variant="contained" color="secondary">
              Donustur
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
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
