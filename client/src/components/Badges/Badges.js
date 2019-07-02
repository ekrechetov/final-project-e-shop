import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {withTheme, withStyles} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const StyledBadge = withStyles(theme => ({
    badge: {
        top: '50%',
        right: -3,
        // The border color match the background color.
        border: `2px solid ${
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
            }`,
    },
}))(Badge);

function CustomizedBadges({theme}) {
    return (
        <IconButton aria-label="Cart" style={{color: theme.palette.secondary.main, position: 'absolute', right: '70px'}}>
            <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon/>
            </StyledBadge>
        </IconButton>
    );
}

function BadgesWrap({theme}) {
    return <CustomizedBadges theme={theme}/>
}

const Badges = withTheme(BadgesWrap);

export default function BadgesElem() {
    return (<Badges style={{paddingTop: '100px'}}/>)
}