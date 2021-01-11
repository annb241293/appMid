import React, { Component, useEffect } from 'react';
import {
    View, Image, TouchableOpacity, Platform, StatusBar as StatusBarPlatform,
} from 'react-native';
import {
    Container,
    Content,
    Form,
    CheckBox,
    Icon,
    Item,
    Input, Label,
    Button,
    Text,
    Left,
    Body,
    ListItem, Thumbnail,
    Title, Right, Header
} from 'native-base';
import { colors, forms, headers } from '../styles/index';
import BottomTab from '../components/BottomTab';
import StatusBar from '../components/StatusBar';
import { statusHeight, verticalScale } from '../styles/mixins';


const Account = (props) => {

    useEffect(() => {
        console.log('acount screen props', props);
    }, [])

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         spinner: true,
    //         id: '',
    //         password: '',
    //         remember: false
    //     };
    // }

    // test() {
    //     console.log(Date.now())
    // }


    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'white', height: statusHeight }}>
                <StatusBarPlatform
                    translucent
                    backgroundColor='white'
                    barStyle='dark-content'
                />
            </View>

            <Content style={{ backgroundColor: 'white' }}>
                {/*<Header style={headers.flex}>*/}
                {/*    <Left>*/}
                {/*        <Button transparent>*/}
                {/*            <Icon name='arrow-back' />*/}
                {/*        </Button>*/}
                {/*    </Left>*/}
                {/*    <Body>*/}
                {/*        <Title>Tài khoản</Title>*/}
                {/*    </Body>*/}
                {/*    <Right />*/}
                {/*</Header>*/}

                <View style={style.thumbnail_container}>
                    <Thumbnail large source={{ uri: uri }} />
                    <Text style={style.name}>Administrator</Text>
                </View>

                <View style={style.info_container}>
                    <Form style={style.info_form}>
                        <Item style={style.form_item}>
                            <Icon type="AntDesign" name="user" style={[forms.input_icon, { color: colors.GREEN }]} />
                            <Label style={style.label}>Administrator</Label>
                        </Item>
                        <Item style={style.form_item}>
                            <Icon type="AntDesign" name="mail" style={[forms.input_icon, { color: colors.PRIMARY }]} />
                            <Label style={style.label}>thanhhai41280@gmail.com</Label>
                        </Item>
                        <Item style={style.form_item}>
                            <Icon type="AntDesign" name="staro" style={[forms.input_icon, { color: 'orange' }]} />
                            <Label style={style.label}>Chức vụ: Nhân viên</Label>
                        </Item>
                    </Form>
                </View>

                <ListItem icon button={true} style={style.list_item} onPress={() => props.navigation.navigate('PaymentInfomation')}>
                    <Left>
                        <Button style={style.button}>
                            <Icon type="AntDesign" name="clouduploado" style={[style.icon, { color: colors.GREEN }]} />
                        </Button>
                    </Left>
                    <Body style={style.body}>
                        <Text style={style.title}>Thay đổi avatar</Text>
                    </Body>

                </ListItem>

                <ListItem icon button={true} style={style.list_item} onPress={() => props.navigation.navigate('PaymentInfomation')}>
                    <Left>
                        <Button style={style.button}>
                            <Icon type="MaterialCommunityIcons" name="lock-reset" style={[style.icon, { color: 'orange' }]} />
                        </Button>
                    </Left>
                    <Body style={style.body}>
                        <Text style={style.title}>Thay đổi mật khẩu</Text>
                    </Body>

                </ListItem>

                <ListItem icon button={true} style={style.list_item} onPress={() => props.navigation.navigate('PaymentInfomation')}>
                    <Left>
                        <Button style={style.button}>
                            <Icon type="AntDesign" name="poweroff" style={[style.icon, { color: 'red' }]} />
                        </Button>
                    </Left>
                    <Body style={style.body}>
                        <Text style={style.title}>Đăng xuất</Text>
                    </Body>
                </ListItem>
            </Content>
            <BottomTab {...props} ></BottomTab>
        </View>
    );
}

const style = {
    thumbnail_container: {
        marginTop: verticalScale(118),
        alignItems: 'center',
    },
    info_container: {
        marginTop: 20,
        width: '90%',
        marginBottom: 20
    },
    info_form: {
        width: '100%',
    },
    form_item: {
        borderBottomColor: '#e2e1e1'
    },
    label: {
        fontSize: verticalScale(15)
    },
    name: {
        textAlign: 'center',
        fontFamily: 'Rotobo',
        fontWeight: 'bold',
        fontSize: verticalScale(18)
    },
    list_item: {
        width: '80%',
        paddingLeft: 10,
        height: verticalScale(56),
        borderBottomWidth: 0
    },
    button: {
        backgroundColor: '#fff'
    },
    body: {
        borderBottomWidth: 0
    },
    icon: {
        color: colors.PRIMARY,
        fontSize: verticalScale(22)
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: verticalScale(15)
    }
}


export default Account