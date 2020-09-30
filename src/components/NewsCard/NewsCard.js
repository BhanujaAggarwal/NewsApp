import React from 'react'
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './styles'

const NewsCard = ({article:{description,publishedAt,source, title, url, urlToImage},i}) => {
    const classes = useStyles();
    return (
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media} image={urlToImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Findia%2Fbreaking-news-live-updates-february-18-2020%2Fliveblog%2F74183552.cms&psig=AOvVaw1VzKYF69S2hk2gzyubLxl7&ust=1601577493992000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiRoKDDkewCFQAAAAAdAAAAABAD'} />
                <div>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" colot="primary" >Learn More</Button>
                    <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
