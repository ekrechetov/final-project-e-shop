import React from 'react';
import {makeStyles} from '@material-ui/core';
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import SocialNetworksItem from '../SocialNetworksItem/SocialNetworksItem';

const useStyles = makeStyles({
        list: {
            display: 'flex',
            justifyContent: 'center',
            padding: '0 20px',
            marginLeft: 'auto'
        },
    }
);

const socialNetworksListData = [
    {
        "href": "#!",
        "icon": faFacebookF
    },
    {
        "href": "#!",
        "icon": faTwitter
    },
    {
        "href": "#!",
        "icon": faInstagram
    },
];

export default function SocialNetworksList() {
    const classes = useStyles();
    return (
        <div className={classes.list}>
            {socialNetworksListData.map((elem) => {
                return <SocialNetworksItem icon={elem.icon}/>
            })}
        </div>
    );
}

