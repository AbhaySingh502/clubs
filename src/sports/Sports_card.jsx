import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import '../css/sport.css'
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Sports_card = ({ key, icon, title, image, shortpara, para }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                <Typography variant="body2" color="text.secondary">
                    {shortpara}
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{ display: 'flex', justifyContent: 'center' }}>
                <ExpandMore style={{ marginLeft: 0 }}
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Typography paragraph>
                        {para}

                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    )
}


export default Sports_card