import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {faPaperPlane, faEye, faShareSquare} from '@fortawesome/free-regular-svg-icons';
import AdvantagesItem from "../AdvantagesItem/AdvantagesItem";

const advantagesArr = [
    {   "key": 1,
        "logo": faPaperPlane,
        "title": "Быстрая Доставка",
        "description": "Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit. Cras neque nulla, convallis non commodo et, euismod nonsese."
    },
    {    "key": 2,
        "logo": faEye,
        "title": "Безопасный Заказ",
        "description": "Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit. Cras neque nulla, convallis non commodo et, euismod nonsese."
    },
    {   "key": 3,
        "logo": faShareSquare,
        "title": "Бесплатный Возврат",
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
                return <AdvantagesItem logo={elem.logo} title={elem.title} key={elem.key} description={elem.description}/>
            })}
        </div>
    );
}