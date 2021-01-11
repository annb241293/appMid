import React, { Fragment, useEffect } from 'react';
import { StatusBar, View, Text, TouchableOpacity, Image } from 'react-native';

import Odoo from 'react-native-odoo-promise-based'
import {
    Body,
    Button,
    Content,
    Form,
    Header,
    Icon,
    Input,
    Item,
    Label,
    Left, ListItem,
    Right,
    Thumbnail,
    Title,
} from 'native-base';
import { colors, forms, headers } from '../styles';
import BottomTab from '../components/BottomTab';
import { verticalScale } from '../styles/mixins';

// import Odoo from 'react-native-odoo'

// const odoo = new Odoo({
//     host: 'phanmemdoanhnghiep.net',
//     port: 8075,
//     database: 'odoo',
//     username: 'thanhhai41280@gmail.com',
//     password: '123'
// });

/* Create new Odoo connection instance */
// const odoo = new Odoo({
//     host: 'phanmemdoanhnghiep.net',
//     port: 8075, /* Defaults to 80 if not specified */
//     database: 'odoo',
//     username: 'admin@gmail.com', /* Optional if using a stored session_id */
//     password: '123', /* Optional if using a stored session_id */
//     sid: 'YOUR_SESSION_ID', /* Optional if using username/password */
//     protocol: 'http' /* Defaults to http if not specified */
// })


const Home = (props) => {

    const uri = "https://erptoancau.com/web/image/res.company/1/logo?unique=0821c60";

    useEffect(() => {
        console.log('home screen props', props);
    }, [])

    // _getUsers = async () => {
    //     var params = {
    //         ids: [2],
    //         fields: ['name', 'email', 'image'],
    //     }; //params
    //     odoo.get('res.users', params, {}).then(response => {
    //         console.log('_getUsers', response);
    //     })
    //         .catch(e => {
    //             console.log(e);
    //         })
    // }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar />

            <Content style={{ backgroundColor: 'white' }}>


                <View style={style.thumbnail_container}>
                    <Image
                        source={{ uri: uri }} //Change your icon image here
                        style={style.logo}
                    />
                    <Text style={style.name}>Hệ thống chấm công</Text>
                </View>

                <View style={style.info_container}>
                    <Form style={style.info_form}>
                        <Item style={style.form_item}>
                            <Icon type="AntDesign" name="user" style={[forms.input_icon, { color: colors.GREEN }]} />
                            <Label style={style.label}>Xin chào: Administrator</Label>
                        </Item>
                        {/*<Item  style={style.form_item}>*/}
                        {/*    <Icon type="AntDesign" name="mail" style={[forms.input_icon, {color: colors.PRIMARY}  ]} />*/}
                        {/*    <Label style={style.label}>thanhhai41280@gmail.com</Label>*/}
                        {/*</Item>*/}
                        <Item style={style.form_item}>
                            <Icon type="AntDesign" name="staro" style={[forms.input_icon, { color: 'orange' }]} />
                            <Label style={style.label}>Chức vụ: Nhân viên</Label>
                        </Item>
                        <Item style={style.form_item}>
                            <Icon type="AntDesign" name="clockcircleo" style={[forms.input_icon, { color: colors.PRIMARY }]} />
                            <Label style={style.label}>Đăng nhập lúc: 12 : 15 PM</Label>
                        </Item>

                    </Form>
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={style.check_container}>
                        <Text style={style.check_title}>CA 1: HÔM NAY, 02/12/2020</Text>
                        <View style={style.check_control}>
                            <Button style={[style.btn_check_in, { marginRight: 10 }]}>
                                <Icon type="Ionicons" name="checkmark-circle" />
                                <Text style={style.check_text}>Check In</Text>
                            </Button>

                            <Button style={[style.btn_check_out, { marginLeft: 10 }]}>
                                <Icon type="Ionicons" name="checkmark-done-circle" />
                                <Text style={style.check_text}>Check Out</Text>
                            </Button>
                        </View>
                    </View>
                </View>



                {/* <View style={{alignItems: 'center', marginTop:28}}>
                   <TouchableOpacity
                       onPress={()=>this.props.navigation.navigate('ForgotPassword')}
                       style={{justifyContent: 'flex-end' }}>
                       <Text style={forms.text_forgot}>Xem lịch sử</Text>
                   </TouchableOpacity>
                </View> */}


            </Content>
            <BottomTab {...props}></BottomTab>
        </View>
    );
}

const style = {
    logo: {
        height: verticalScale(100),
        width: verticalScale(150),
    },
    check_text: {
        color: 'white',
        paddingRight: 20
    },
    btn_check_in: {
        backgroundColor: '#28a745'
    },
    btn_check_out: {
        backgroundColor: '#dc3545'
    },
    check_title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: verticalScale(20),
        color: colors.PRIMARY
    },
    check_container: {
        width: '90%',
        alignItems: 'center',
        borderWidth: 0,
        // borderColor:colors.PRIMARY,
        paddingBottom: 10,
        borderColor: '#000', // if you need
        overflow: 'hidden',
        shadowColor: 'yourchoice',
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    check_control: {
        marginTop: 38,
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    thumbnail_container: {
        marginTop: verticalScale(118),
        alignItems: 'center',
    },
    info_container: {
        marginTop: 28,
        width: '100%',
        marginBottom: 20,
    },
    info_form: {
        width: '100%',
        margin: 0,
        padding: 0,
        alignItems: 'center',
    },
    form_item: {
        marginLeft: 0,
        padding: 0,
        width: '90%',
        borderBottomColor: '#e2e1e1'
    },
    label: {
        fontSize: verticalScale(15)
    },
    name: {
        textAlign: 'center',
        fontFamily: 'Rotobo',
        fontWeight: 'bold',
        fontSize: verticalScale(18),
        marginTop: verticalScale(10)
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

export default Home