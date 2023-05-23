import * as React from 'react';
import { Avatar, Box, Card as MuiCard, Rating } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const Card = ({ description, name, designation, rating }: Record<string, string>) => {
    return (
        <MuiCard sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <Rating name="read-only" value={Number(rating)} readOnly sx={{ pt: 2, pl: 2 }} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Box sx={{ display: 'flex', mt: 2 }}>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>{name.charAt(0)}</Avatar>
                        <Box>
                            <Typography gutterBottom variant="h5" component="div" sx={{ pl: 1 }}>
                                {name}
                            </Typography>
                            <Typography variant='h6' sx={{ fontSize: 14, fontWeight: 900, mt: "-12px", ml: '9px' }}>{designation}</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </MuiCard>
    )
}

export default Card