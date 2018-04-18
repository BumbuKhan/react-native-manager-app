import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from "./common";
import {connect} from 'react-redux';
import {emailChanged} from '../actions';

class LoginForm extends Component {
    handleEmailChange = (email) => {
        this.props.emailChanged(email);
    };

    render() {
        return (
            <Card>
                <CardSection>
                        <Input
                            label="Email"
                            placeholder="example@gmail.com"
                            value={this.props.auth}
                            onChangeText={this.handleEmailChange}
                        />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="********"
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
  return {auth: state.auth.email}
};

export default connect(mapStateToProps, {emailChanged})(LoginForm);