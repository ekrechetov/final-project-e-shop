import React, {Component} from 'react';
import Register from '../Register';
import Login from '../Login';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
    signInUp: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

class SignInUp extends Component {
    render() {
        return (
            <div className={this.props.classes.signInUp}>
<<<<<<< HEAD
                <Register/>
                <Login/>
=======
                <Register>

                </Register>
                <Login>

                </Login>
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
            </div>
        );
    }
}

export default withStyles(styles)(SignInUp);