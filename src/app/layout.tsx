'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { lightTheme, darkTheme } from '@/app/theme';
import Header from '@/app/components/Header';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored) setDarkMode(stored === 'true');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const updated = !prev;
      localStorage.setItem('darkMode', String(updated));
      return updated;
    });
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
