import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import specialOffersImg from '../../images/special-offers-1.jpg'

const styles = (theme) => ({
    specialOffer: {
        width: '100%',
        backgroundImage: 'url(' + specialOffersImg + ');',
        backgroundPositionY: '5%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // transition: 'all 800ms cubic-bezier(0.000, 1.650, 0.735, 0.085)',
        [`&:hover .fivePercent--active`]: {
            transition: 'all 700ms cubic-bezier(0.000, 1.650, 0.735, 0.085)',
            padding: '10px 10px',
            marginLeft: '20px',
            fontSize: '68px',
            fontWeight: 'bold',
            color: theme.palette.secondary.contrastText
        }
    },
    specialOfferContainer: {
        display: 'flex',
        maxHeight: '270px',
        alignItems: 'center',
        padding: '110px 100px'
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 0',

        color: theme.palette.secondary.main
    },
    title: {
        fontSize: '42px',
        marginBottom: '25px'
    },
    descriptionText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontSize: '28px'
    },
    fivePercentText: {
        fontSize: '52px',
        fontWeight: 'normal',
        transition: 'all 500ms cubic-bezier(0.000, 1.650, 0.735, 0.085)',
    },
    onlyToday: {
        marginTop: '25px'
    },
    '@media (max-width: 767px)': {
        specialOffer: {
            backgroundPositionX: '35%',
            [`&:hover .fivePercent--active`]: {
                fontSize: '50px'
            }
        },
        specialOfferContainer: {
            maxHeight: '250px',
            padding: '50px',
        },
        title: {
          fontSize: '36px',
        },
        descriptionText: {
          fontSize: '22px',
        },
        fivePercentText: {
            fontSize: '36px',
        }
    }
});

class SpecialsOffers extends Component {
    hoverStyle = () => {
            let elem = document.querySelector('#specialOffersBlock');
            elem.addEventListener('mouseenter', () => {
                let textElem = document.querySelector('#fivePercent');
                textElem.classList.add('fivePercent--active');
                console.log('absolutly');
            });
            elem.addEventListener('mouseleave', () => {
                let textElem = document.querySelector('#fivePercent');
                textElem.classList.remove('fivePercent--active');
                console.log('hooh');
            });
        };

    render() {
        console.log (this.state);
        return (
            <section className={this.props.classes.specialOffer} id='specialOffersBlock' onMouseEnter={this.hoverStyle}>
                <div className={this.props.classes.specialOfferContainer}>
                    <div className={this.props.classes.description}>
                        <h3 className={this.props.classes.title}>
                            Специальное предложение
                        </h3>
                        <p className={this.props.classes.descriptionText}>
                            <span className={this.props.classes.fivePercentText} id='fivePercent'>-5%</span>
                            {/*&nbsp;*/}
                            <span className={this.props.classes.onlyToday}>Только сегодня, на любую покупку</span>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
export default withStyles(styles)(SpecialsOffers);