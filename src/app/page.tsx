'use client';

import Link from 'next/link';
import { Box, Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';

interface HomeCardItem {
  label: string;
  href: string;
}

const homeCardItems: HomeCardItem[] = [
  { label: 'Doviz Kurlari', href: '/currency' },
  { label: 'Altin Fiyatlari', href: '/gold' },
  { label: 'Kripto Paralar', href: '/crypto' },
];

export default function HomePage() {
  return (
    <Box p={4}>
      <Grid container spacing={4}>
        {homeCardItems.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.href}>
            <Card>
              <CardActionArea component={Link} href={item.href}>
                <CardContent>
                  <Typography variant="h5" align="center">
                    {item.label}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
