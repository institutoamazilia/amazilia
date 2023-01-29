import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ActivitiesCards, IActivitiesCard } from '../activities/data';
import { IconButton } from '@mui/material';

export default function ActivitiesCard( item : IActivitiesCard) {
  return (
    <Card sx={{ maxWidth: 248 }}>
      <CardActionArea>
        <CardContent>
          <img src={item.icon} alt={`icone ${item.title}`} />
          <Typography variant="body2" color="text.secondary"> {item.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}