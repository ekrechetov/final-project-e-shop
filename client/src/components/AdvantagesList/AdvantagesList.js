import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {faPaperPlane, faEye, faShareSquare} from '@fortawesome/free-regular-svg-icons';
import AdvantagesItem from "../AdvantagesItem/AdvantagesItem";

const advantagesArr = [
    {
        "logo": faPaperPlane,
        "title": "Fast Delivery",
        "description": "Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit. Cras neque nulla, convallis non commodo et, euismod nonsese."
    },
    {
        "logo": faEye,
        "title": "Secure Checkout",
        "description": "Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit. Cras neque nulla, convallis non commodo et, euismod nonsese."
    },
    {
        "logo": faShareSquare,
        "title": "Free Returns",
        "description": "Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit. Cras neque nulla, convallis non commodo et, euismod nonsese."
    },
];

const useStyles = makeStyles({
        advantagesWrap: {
            display: 'flex',
            justifyContent: 'center',
        },
        '@media (max-width: 767px)': {
            advantagesWrap: {
                flexDirection: 'column'
            }
        }
    }
);

export default function AdvantagesList(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <div className={classes.advantagesWrap}>
            {advantagesArr.map((elem) => {
                return <AdvantagesItem logo={elem.logo} title={elem.title} description={elem.description}/>
            })}
        </div>
    );
}