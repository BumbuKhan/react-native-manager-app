import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from "./common";
import {connect} from 'react-redux';
import {emailChanged} from '../actions';
import {passwordChanged} from '../actions';

class LoginForm extends Component {
    handleEmailChange = (email) => {
        this.props.emailChanged(email);
    };

    handlePasswordChange = (password) => {
        this.props.passwordChanged(password);
    };

    render() {
        return (
            <Card>
                <CardSection>
                        <Input
                            label="Email"
                            placeholder="example@gmail.com"
                            value={this.props.email}
                            onChangeText={this.handleEmailChange}
                        />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="********"
                        value={this.props.password}
                        onChangeText={this.handlePasswordChange}
                    />
                </CardSection>

                <CardSection>
                    <Button>Sign In</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      email: state.auth.email,
      password: state.auth.password
  }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);