import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const useStyles = makeStyles((theme) => ({
        advantagesBlock: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px',
            transition: 'all 0.8s ease',
            '&:hover': {
                backgroundColor: theme.palette.primary.light
            }
        },
        advantagesLogo: {
            fontSize: '25px',
            transition: 'all 0.2s ease',
            '&:hover': {
                color: theme.palette.secondary.light
            }
        },
        advantagesTitle: {
            margin: '25px 0 10px 0',
            textAlign: 'center'
        },
        advantagesDescription: {
            textAlign: 'center'
        }
    })
);

export default function AdvantagesItem(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <div className={classes.advantagesBlock}>
                <span className={classes.advantagesLogo}>
                    <FontAwesomeIcon icon={props.logo} className={classes.socialNeetworksItemIcon}/>
                </span>
            <h4 className={classes.advantagesTitle}>
                {props.title}
            </h4>
            <p className={classes.advantagesDescription}>
                {props.description}
            </p>
        </div>
    );
}