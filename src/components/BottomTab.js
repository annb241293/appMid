import React, { Component, Image, useEffect } from 'react';
import {
    View, StatusBar
} from 'react-native';
import { Container, Content, Item, Input, Icon, Button, Text, Footer, FooterTab, } from 'native-base';
import { colors } from '../styles/index'
import { verticalScale, width } from '../styles/mixins';

const BottomTab = (props) => {

    useEffect(() => {
        console.log('BottomTab props', props);
    }, [])





    return (
        <Footer>
            <FooterTab style={style.footer_tabs}>
                <Button style={style.footer_button} onPress={() => props.navigation.navigate('Home')}>
                    <Icon type='Ionicons' name="home" style={style.footer_icon} />
                    <Text style={[style.footer_text]}>Trang chủ</Text>
                </Button>
                {/* <Button style={style.footer_button} onPress={() => props.navigation.navigate('Login')}>
                    <Icon type='Ionicons' name="home" style={style.footer_icon} />
                    <Text style={[style.footer_text]}>Đăng nhập</Text>
                </Button> */}


                <Button style={style.footer_button} onPress={() => props.navigation.navigate('Notification')}>
                    <Icon type='Octicons' name="calendar" style={style.footer_icon} />
                    <Text style={style.footer_text}>Lịch sử</Text>
                </Button>
                <Button style={style.footer_button} onPress={() => props.navigation.navigate('Notification')}>
                    <Icon type='Ionicons' name="md-notifications" style={style.footer_icon} />
                    <Text style={style.footer_text}>Thông báo</Text>
                </Button>
                <Button style={style.footer_button} onPress={() => props.navigation.navigate('Account', { response: props.route.params.response })}>
                    <Icon type='Ionicons' name="person" style={style.footer_icon} />
                    <Text style={style.footer_text}>Tài khoản</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
}

const style = {
    footer_tabs: {
        height: verticalScale(73)
    },
    footer_button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 5,
        marginBottom: 13,
        // margin:0,
    },
    footer_icon_svg: {
        // height: 20,
        // width:17,
    },
    footer_icon: {
        color: '#fff',
        fontSize: verticalScale(24),
    },
    footer_text: {
        color: '#fff',
        // backgroundColor:'black',
        padding: 0,
        margin: 0,
        fontFamily: "Poppins-Regular",
        fontSize: verticalScale(11)
    }
}

export default BottomTab