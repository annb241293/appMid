import React, { Component, Image } from 'react';
import {
    View, StatusBar as StatusBarPlatform
} from 'react-native';
import {colors} from '../styles/index';
import {statusHeight} from '../styles/mixins';

export default class StatusBar extends Component  {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={{backgroundColor: colors.PRIMARY, height: statusHeight}}>
                <StatusBarPlatform
                    translucent
                    backgroundColor={colors.PRIMARY}
                    barStyle='light-content'
                />
            </View>
        );
    }
}
