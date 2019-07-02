import React from 'react';
import Tabs from '@material-ui/core/Tabs/index';
import Tab from '@material-ui/core/Tab/index';
import SwipeableViews from 'react-swipeable-views';
import Stock from "../Stock/Stock";

const styles = {
    tabs: {
        background: '#fff',
    },
    slide: {
        // padding: 15,
        // minHeight: 100,
        color: '#fff',
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};

class SpecialsOffers extends React.Component {
    state = {
        index: 0,
    };

    handleChange = (event, value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;

        return (
            <div>
                <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
                    <Tab label="Item 1"/>
                    <Tab label="Item 2"/>
                    <Tab label="Item 3"/>
                </Tabs>
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <div style={Object.assign({}, styles.slide, styles.slide1)}><Stock topMargin={true}>slide n°1</Stock></div>
                    <div style={Object.assign({}, styles.slide, styles.slide2)}><Stock topMargin={true}>slide n°2</Stock></div>
                    <div style={Object.assign({}, styles.slide, styles.slide3)}><Stock topMargin={true}>slide n°3</Stock></div>
                </SwipeableViews>
            </div>
        );
    }
}

export default SpecialsOffers;