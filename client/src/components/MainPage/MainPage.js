import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core";
import Header from '../Header/Header';
import CardMenu from '../CardMenu/CardMenu';
import Footer from '../Footer/Footer';
import Stock from "../Stock/Stock";
import SpecialsOffers from '../SpecialsOffers/SpecialsOffers';
import AdvantagesList from '../AdvantagesList/AdvantagesList';
import Slider from "../Slider/Slider";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
        mainPage: {
            // height: '200px',
            // backgroundImage: 'url(' + img + ');',
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat'
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
            <Stock/>
            <AdvantagesList/>
            <SpecialsOffers/>
        </Container>
    );
}

