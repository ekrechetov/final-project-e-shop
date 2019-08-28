import React from 'react';
import { Link } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import img1 from '../../images/card-menu-1.jpg';
import img2 from '../../images/card-menu-2.jpg';
import img3 from '../../images/card-menu-3.jpg';
import img4 from '../../images/card-menu-4.jpg';
import img5 from '../../images/card-menu-5.jpg'
const images = [
    {
        url: img1,
        title: 'Парфюмированная вода',
        width: '49%',
        alias: '/categories/parfum-voda'
    },
    {
        url: img2,
        title: 'Туалетная вода',
        width: '49%',
        alias: '/categories/tualetnaya-voda'
    },
    {
        url: img3,
        title: 'Духи',
        width: '32%',
        alias: '/categories/duhi'
    },
    {
        url: img4,
        title: 'Одеколон',
        width: '32%',
        alias: '/categories/odekolon'
    },
    {
        url: img5,
        title: 'Дезодоранты',
        width: '32%',
        alias: '/categories/dezodorant'
    },

];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: 200,
        width: '100%',
        marginTop: '1%'
    },
    image: {
        position: 'relative',
        height: 300,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 200,
        },
        marginTop: '20px',
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundRepeat: 'no-repeat',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        fontSize: '17px',
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function CardMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {images.map(image => (
                <Link to={image.alias}
                    focusripple="true"
                    key={image.title}
                    className={classes.image}
                    focusvisibleclassname={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'top'
              }}
          />
                    <span className={classes.imageBackdrop}/>
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {image.title}
                <span className={classes.imageMarked}/>
            </Typography>
          </span>
                </Link>
            ))}
        </div>
    );
}