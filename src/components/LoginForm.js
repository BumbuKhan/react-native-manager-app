import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from "./common";
import {connect} from 'react-redux';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                        <Input
                            label="Email"
                            placeholder="example@gmail.com"
                            value={this.props.auth}
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

export default connect(mapStateToProps)(LoginForm);