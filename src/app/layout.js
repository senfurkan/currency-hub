'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { lightTheme, darkTheme } from '@/app/theme';
import Header from '@/app/components/Header';

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: remember preference with localStorage
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored) setDarkMode(stored === 'true');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const updated = !prev;
      localStorage.setItem('darkMode', updated);
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
