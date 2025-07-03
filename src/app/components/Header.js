'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Logo from '@/app/components/Logo';
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
  Collapse,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const navItems = [
  { label: 'Döviz', href: '/currency' },
  {
    label: 'Altın',
    subItems: [
      { label: 'Altın Fiyatları', href: '/gold' },
      { label: 'Diğer Emtia', href: '/emtia' },
    ],
  },
  {
    label: 'Borsa',
    subItems: [
      { label: 'Hisse Senedi', href: '/hisseSenedi' },
      { label: 'Borsa İstanbul', href: '/borsaIstanbul' },
    ],
  },
  { label: 'Kripto', href: '/crypto' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState({});
  const [anchorEl, setAnchorEl] = useState({});
  const theme = useTheme();

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  const handleMobileToggle = (label) => {
    setMobileMenuOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Logo />
      <List>
        {[...navItems, { label: 'Dönüştür', href: '/exchange', isAction: true }].map(
          ({ label, href, subItems, isAction }) =>
            subItems ? (
              <Box key={label}>
                <ListItem
                  button
                  onClick={() => handleMobileToggle(label)}
                  sx={{ justifyContent: 'space-between', px: 3 }}
                >
                  <ListItemText primary={label} />
                  {mobileMenuOpen[label] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
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
                href={href}
                onClick={() => setMobileOpen(false)}
                sx={{
                  justifyContent: 'center',
                  bgcolor: isAction ? theme.palette.secondary.main : 'inherit',
                  color: pathname === href ? theme.palette.secondary.contrastText : 'inherit',
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
              return subItems ? (
                <Box key={label}>
                  <Button
                    onClick={(e) =>
                      setAnchorEl((prev) => ({
                        ...prev,
                        [label]: open ? null : e.currentTarget,
                      }))
                    }
                    sx={{
                      color: pathname.startsWith(href) ? theme.palette.secondary.main : 'white',
                      fontWeight: pathname.startsWith(href) ? 700 : 400,
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
              ) : (
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
              );
            })}
          </Box>

          <Button
            component={Link}
            href="/exchange"
            variant="contained"
            color="secondary"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Dönüştür
          </Button>

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
