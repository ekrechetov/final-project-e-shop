import React from 'react';
import {makeStyles} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
        linkIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '20px',
            height: '20px',
            margin: '0 15px'
        },
        socialNeetworksItemIcon: {
            fontSize: '20px'
        },
        '@media (max-width: 767px)': {
            linkIcon: {
                margin: '0 5px'
            }
        }
    }
);

export default function SocialNetworksItem(props) {
    const classes = useStyles();
    console.log(props.data);
    return (
        <a href="#!" className={classes.linkIcon}>
            <FontAwesomeIcon icon={props.icon} className={classes.socialNeetworksItemIcon}/>
        </a>
    );

}