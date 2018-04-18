import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyA6Uc8Y7vnT8oVZmEzUmHaaKqZTaeX9ml4",
            authDomain: "manager-d5580.firebaseapp.com",
            databaseURL: "https://manager-d5580.firebaseio.com",
            projectId: "manager-d5580",
            storageBucket: "manager-d5580.appspot.com",
            messagingSenderId: "714299070703"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}