import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core";
import Header from '../Header/Header';
import CardMenu from '../CardMenu/CardMenu';
import Footer from '../Footer/Footer';
import Stock from "../Stock/Stock";
import SpecialsOffers from '../SpecialsOffers/SpecialsOffers';
import AdvantagesList from '../AdvantagesList/AdvantagesList';


const useStyles = makeStyles({
        container: {
            // height: '200px',
            // backgroundImage: 'url(' + img + ');',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    }
);
export default function MainContainer(props) {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="xl">
            <Header theme={props.theme}/>
            <CardMenu/>
            <Stock/>
            <AdvantagesList/>
            <SpecialsOffers/>
            <Footer/>
        </Container>
    );
}

