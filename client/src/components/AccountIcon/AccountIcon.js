import React, {Component} from 'react';
import AccountBox from '@material-ui/icons/AccountBox';
import {withStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';

const styles = theme => ({
    accountIconWrap: {
        position: 'absolute',
        right: '140px',
    },
    accountIcon: {
        width: '32px',
        height: '32px',
        cursor: 'pointer',
        color: theme.palette.primary.dark
    }
});

class AccountIcon extends Component {
    render() {
        return (
            <Link to="/login" className={this.props.classes.accountIconWrap}>
                <AccountBox className={this.props.classes.accountIcon}/>
            </Link>
        );
    }
}

export default withStyles(styles)(AccountIcon);
// import React from 'react';
// import { withStyles } from '@material-ui/styles';
//
// const styles = {
//     root: {
//         backgroundColor: 'red',
//     },
// };
//
// class MyComponent extends React.Component {
//     render () {
//         return <div className={this.props.classes.root} />;
//     }
// }
//
// export default withStyles(styles)(MyComponent);
