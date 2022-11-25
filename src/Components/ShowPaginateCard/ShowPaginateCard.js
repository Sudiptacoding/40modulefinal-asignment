import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import './ShowPaginateCard.css';
import { Link } from 'react-router-dom';

const ShowPaginateCard = (props) => {
    const { title, body, id, userId } = props.item;
    const Slice = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "..."
        } else {
            return str;
        }
    };
    return (
        <div>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {Slice(title, 10)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {Slice(body, 100)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <Link to='/more' state={{title, body, id, userId}}>Read More</Link>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default ShowPaginateCard;