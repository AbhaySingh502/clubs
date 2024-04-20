import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../css/sport.css'


const Sports_card = ({ key, icon, title, image, shortpara, para }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <div className="sport_icon">
                <img src={icon} alt="" />
                <h4>{title}</h4>
            </div>
            <CardMedia
                component="img"
                height="194"
                image={image}  //image
                alt="#"
            />
            <CardContent>
                <Typography className='text-start' variant="body2" color="text.secondary">
                    {shortpara}
                </Typography>
            </CardContent>
        </Card>
    )
}


export default Sports_card