import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {registerUser} from '../actions/authentication';
import withStyles from "@material-ui/core/styles/withStyles";
// import './Register.scss';

const styles = (theme) => ({
    register: {
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
    registerTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '4em',
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        backgroundColor: '#f5f5f5',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#ff8f00',
        boxShadow: '0 0 5px rgba(0,0,0,0.5)',
    },
    registerError: {
        fontSize: '10px',
        color: 'red',
    },
    registerForm: {
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
    registerInput: {
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
    registerButton: {
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
        register: {
            width: '96%'
        },
    }
});

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
        errors: {},
    };

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
        };
        this.props.registerUser(user, this.props.history);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        const {errors} = this.state;
        return (
            <div className={this.props.classes.register}>
                <h2 className={this.props.classes.registerTitle}>Регистрация</h2>
                <form onSubmit={this.handleSubmit} className={this.props.classes.registerForm}>
                    <div className={this.props.classes.inputsWrap}>
                        <div className={this.props.classes.inputContainer}>
                            <input
                                type="text"
                                placeholder="введите Ваше имя"
                                name="name"
                                onChange={this.handleInputChange}
                                value={this.state.name}
                                className={this.props.classes.registerInput}
                            />
                            {errors.name && (
                                <div className={this.props.classes.registerError}>
                                    {' '}
                                    {errors.name}
                                </div>
                            )}
                        </div>
                        <div className={this.props.classes.inputContainer}>
                            <input
                                type="email"
                                placeholder="введите Ваш email"
                                name="email"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                                className={this.props.classes.registerInput}
                            />
                            {errors.email && (<div>{errors.email}</div>)}
                        </div>
                        <div className={this.props.classes.inputContainer}>
                            <input
                                type="password"
                                placeholder="Ваш пароль"
                                name="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                                className={this.props.classes.registerInput}
                            />
                            {errors.password && (<div>{errors.password}</div>)}
                        </div>
                        <div className={this.props.classes.inputContainer}>
                            <input
                                type="password"
                                placeholder="повторите Ваш пароль"
                                name="password_confirm"
                                onChange={this.handleInputChange}
                                value={this.state.password_confirm}
                                className={this.props.classes.registerInput}
                            />
                            {errors.password_confirm && (<div>{errors.password_confirm}</div>)}
                        </div>
                    </div>
                    <div className={this.props.classes.buttonContainer}>
                        <button type="submit" className={this.props.classes.registerButton}>
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});


const RegistersWithStyles = (withStyles(styles)(Register));
export default connect(mapStateToProps, {registerUser})(withRouter(RegistersWithStyles));
