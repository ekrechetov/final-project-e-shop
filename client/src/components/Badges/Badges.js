import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {withTheme, withStyles} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";


const styles = (theme) => ({
    badgeLinkWrap: {
        position: 'absolute',
        right: '70px',
    },

    badgeWrapBlock: {
        color: theme.palette.primary.dark,

        // width: '42px',
        // height: '42px'
    },
    badge: {
        top: '50%',
        right: '-1px',
        border: theme.palette.primary.dark,
        // width: '42px',
        // height: '42px'
    },
    badgeIcon: {
        width: '32px',
        height: '32px'
    }
});

// const secondStyles = (theme) => ({});

// const StyledBadge = withStyles(styles)(Badge);

class CustomizedBadges extends Component {
    render() {
        return (
            <Link to={'/cart'} className={this.props.classes.badgeLinkWrap}>
            <IconButton aria-label="Cart" className={this.props.classes.badgeWrapBlock}>
                <Badge badgeContent={4} className={this.props.classes.badge}>
                    <ShoppingCartIcon className={this.props.classes.badgeIcon}/>
                </Badge>
            </IconButton>
            </Link>
        )
    }
}

export default withStyles(styles)(CustomizedBadges);
// function BadgesWrap({theme}) {
//     return <CustomizedBadges theme={theme}/>
// }

// const Badges = withTheme(BadgesWrap);

// export default class BadgesElem extends Component {
//     state = {};
//
//     render() {
//         return (<Badges style={{paddingTop: '100px'}}/>)
//     }
// }