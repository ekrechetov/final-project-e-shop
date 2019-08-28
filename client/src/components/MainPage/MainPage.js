import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core";
import CardMenu from '../CardMenu/CardMenu';
import Stock from "../Stock/Stock";
import SpecialsOffers from '../SpecialsOffers/SpecialsOffers';
import AdvantagesList from '../AdvantagesList/AdvantagesList';
import Slider from "../Slider/Slider";


const useStyles = makeStyles({
        mainPage: {
            padding: '0 20px',
            fontFamily: 'Roboto, sans-serif'
        }
    }
);
export default function MainPage(props) {
    const classes = useStyles();
    return (
        <Container className={classes.mainPage} maxWidth="xl">
            <Slider />
            <CardMenu/>
            <AdvantagesList/>
            <SpecialsOffers/>
            <Stock/>
        </Container>
    );
}

