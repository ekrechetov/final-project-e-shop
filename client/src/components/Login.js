import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authentication';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
    login: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '48%',
        margin: '20px auto',
        borderRadius: '5px',
        border: '1px solid #f5f5f5',
        fontSize: '1rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
    loginTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        backgroundColor: '#f5f5f5',
        width: '100%',
        height: '4em',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#ff8f00',
        boxShadow: '0 0 5px rgba(0,0,0,0.5)',
    },
    loginError: {
        fontSize: '10px',
        color: 'red',
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        // alignContent: 'center',
        // justifyContent: 'space-around',
        width: '51%',
        // height: '50vh',
        margin: '2% auto',
    },
    inputsWrap: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: '2vw'
    },
    inputContainer: {
        display: 'flex',
        marginTop: '2vw'
    },
    loginInput: {
        width: '100%',
        height: '35px',
        borderRadius: '5px',
        outline: 'none',
        paddingLeft: '10px',
        border: '1px solid #f5f5f5',
        boxShadow: '0 0 5px rgba(0,0,0,0.5)',
    },
    buttonContainer: {
        width: '100%',
        position: 'relative',
        // bottom: '10%',
        // marginTop: 'auto'
    },
    loginButton: {
        width: '100%',
        height: '3.5em',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0,0,0,0.5)',
        outline: 'none',
        border: 'none',
        backgroundColor: '#f5f5f5',
        color: '#ff8f00',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    '@media(max-width: 767px)': {
        login: {
            width: '96%'
        },
    }
});


class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {}
    }
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div className={this.props.classes.login}>
                <h2 className={this.props.classes.loginTitle}>Авторизация</h2>
                <form onSubmit={this.handleSubmit} className={this.props.classes.loginForm}>
                    <div className={this.props.classes.inputsWrap}>
                        <div className={this.props.classes.inputContainer}>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                                className={this.props.classes.loginInput}
                            />
                            {errors.email && (<div>{errors.email}</div>)}
                        </div>
                        <div className={this.props.classes.inputContainer}>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                                className={this.props.classes.loginInput}

                            />
                            {errors.password && (<div>{errors.password}</div>)}
                        </div>
                    </div>
                    <div className={this.props.classes.buttonContainer}>
                        <button type="submit" className={this.props.classes.loginButton}>
                            Авторизоваться
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

const LoginWithStyles = (withStyles(styles)(Login));
export default connect(mapStateToProps, {loginUser})(LoginWithStyles)