import React, { Component } from 'react';
import {
    View, Image,TouchableOpacity, Platform
} from 'react-native';
import {
    Container,
    Content,
    Form,
    CheckBox,
    Icon,
    Item,
    Input,
    Button,
    Text,
    Left,
    Body,
    ListItem,
    Title, Header, Right
} from 'native-base';
import {colors, forms, headers} from '../styles/index';
import BottomTab from '../components/BottomTab';

import StatusBar from '../components/StatusBar';
import {statusHeight, verticalScale, height} from '../styles/mixins';


export default class Notification extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            spinner: true,
            id: '',
            password: '',
            remember:false
        };
    }

    componentDidMount() {
        console.log(Date.now())
    }


    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar />
                <Content style={{backgroundColor:'white'}}>

                    <Header style={headers.flex}>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Thông báo</Title>
                        </Body>
                        <Right />
                    </Header>

                    <ListItem icon button={true} style={style.list_item}>
                        <Left style={style.left}>
                            <Icon type="MaterialIcons" name="notifications-none" style={style.notifi_icon}  />
                        </Left>
                        <Body style={style.body}>
                            <Text style={style.title}>Thông báo nghỉ tết</Text>
                            <Text style={style.content}>Thông báo nghỉ tết cho nhân viên </Text>
                            <Text style={style.datetime}>30 tháng 10, 2020 1:01 CH</Text>
                        </Body>

                    </ListItem>

                </Content>
                <BottomTab {...this.props} ></BottomTab>
            </View>
        );
    }
}

const style = {
    list_item:{
        flex:1,
        flexDirection:'row',
        height: verticalScale(128),
        borderBottomWidth:0
    },
    notifi_icon:{
        color:colors.GREEN
    },
    left:{
        // width:verticalScale(50),
        alignItems:'flex-start',
        justifyContent:'flex-start',
        padding:0,
        margin:0,
    },
    body:{
        justifyContent:'flex-start',
        borderBottomWidth:0,
        padding:0,
        margin:0,
        // backgroundColor: 'blue',
    },
    icon:{
        padding:0,
        margin:0,
        textAlign:'center',
        alignItems:'center',
        fontSize:verticalScale(24),
    },
    title:{
        fontFamily: 'Roboto',
        fontWeight:'bold',
        fontSize: verticalScale(14),
        marginBottom:verticalScale(8),
        color:colors.GREEN
    },
    content:{
        fontFamily: 'Roboto',
        fontSize: verticalScale(12),
        marginBottom:verticalScale(8),
        letterSpacing:verticalScale(0.5),
        color:'rgba(51, 51, 51, 0.87)',

    },
    datetime:{
        fontFamily: 'Roboto',
        fontSize: verticalScale(10),
        color:'#9B9B9B'
    }
}
