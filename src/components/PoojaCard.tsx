import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

type Props = {
  name: string;
  price: number;
  duration?: string;
  desc?: string;
};

export default function PoojaCard({ name, price, duration, desc }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        {duration && <Typography variant="caption">{duration}</Typography>}
        <Typography variant="body2" sx={{ mt: 1 }}>{desc}</Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>₹ {price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="secondary">Book / Offer</Button>
      </CardActions>
    </Card>
  );
}
