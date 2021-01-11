import React, { Component, Image } from 'react';
import {
    View, StatusBar
} from 'react-native';
import {
    Icon,
    Button,
    Text,
    Header as NBHeaer,
    Left,
    Title, Right,
} from 'native-base';

import {colors, headers} from '../styles/index';

export default class Header extends Component  {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <NBHeaer style={headers.flex}>
                <Left style={headers.left}>
                    <Button style={headers.button_left} onPress={this.props.onPressLeftIcon}>
                        <Icon type="MaterialIcons"  style={headers.icon} name={this.props.leftIcon} />
                    </Button>
                    <Title style={headers.title}>{this.props.title}</Title>
                </Left>
            </NBHeaer>
        );
    }
}
