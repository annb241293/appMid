import React, { Component, useEffect, useState } from 'react';
import {
    View, StatusBar, Image, TouchableOpacity
} from 'react-native';
import { Container, Content, Form, CheckBox, Icon, Item, Input, Button, Text, Picker } from 'native-base';
import { colors, forms } from '../styles/index';
import BottomTab from '../components/BottomTab';
import Odoo from 'react-native-odoo-promise-based'

const Login = (props) => {

    const [id, setId] = useState('admin@gmail.com')
    const [password, setPassword] = useState('123')
    const [remember, setRemember] = useState(false)
    const [database, setDatabase] = useState('odoo')

  

   const onValueChange = (value) => {
        setDatabase(value)
    }

   const onClickLogin = () => {
        console.log('props',props);
        const odoo = new Odoo({
            host: 'phanmemdoanhnghiep.net',
            port: 8075, /* Defaults to 80 if not specified */
            database: database,
            username: id, /* Optional if using a stored session_id */
            password: password, /* Optional if using a stored session_id */
            sid: 'YOUR_SESSION_ID', /* Optional if using username/password */
            protocol: 'http' /* Defaults to http if not specified */
        })

        odoo.connect()
            .then(response => {
                if (response.success) {
                    props.navigation.navigate("Home", { response: response })
                } else {
                    console.log("login fail");
                }
            })
            .catch(e => {
                console.log('error', e);
            })
    }


        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor='white'
                    barStyle='dark-content'
                />

                <Content>
                    <Form style={forms.container} >
                        <View style={forms.wapper}>
                            <View style={forms.header}>
                                <Image
                                    source={{ uri: 'https://erptoancau.com/web/image/res.company/1/logo?unique=0821c60' }} //Change your icon image here
                                    style={forms.logo}
                                />
                                <Text style={forms.header_text_1}>Đăng nhập vào hệ thống</Text>
                                {/* <Text style={forms.header_text_2} >Database: {database}</Text> */}
                            </View>
                            <Item picker bordered rounded style={forms.item_input}>
                                <Icon type="AntDesign" name="database" style={[forms.input_icon]} />
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ color: "gray", width: undefined }}
                                    placeholder="Select your database"
                                    placeholderTextColor="gray"
                                    placeholderStyle={{ color: "gray" }}
                                    placeholderIconColor="gray"
                                    selectedValue={database}
                                    onValueChange={onValueChange}
                                >
                                    <Picker.Item label="Odoo" value="odoo" />
                                    <Picker.Item label="Odoo 2" value="odoo2" />
                                </Picker>
                            </Item>

                            <Item bordered rounded style={forms.item_input}>
                                <Icon type="AntDesign" name="mail" style={[forms.input_icon]} />
                                <Input
                                    placeholderTextColor="gray"
                                    placeholder="Email"
                                    value={id}
                                    onChangeText={(id) => setId(id)} />
                            </Item>

                            <Item bordered rounded style={forms.item_input}>
                                <Icon type="SimpleLineIcons" name="lock" style={[forms.input_icon]} />
                                <Input
                                    placeholderTextColor="gray"
                                    placeholder="Mật khẩu"
                                    value={password}
                                    secureTextEntry={true}
                                    onChangeText={(password) => setPassword(password)} />
                            </Item>

                            <Button onPress={onClickLogin} style={forms.btn}>
                                <Text style={forms.btn_text}>Đăng nhập</Text>
                            </Button>

                            <View style={forms.remember_container}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', flex: 1 }}
                                    onPress={() => setRemember(!remember)} >
                                    <CheckBox
                                        checked={remember}
                                        color={colors.PRIMARY}
                                        style={forms.checkbox}
                                        onPress={() => setRemember(!remember)}
                                    />
                                    <Text style={forms.text_remember}> Duy trì đăng nhập </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('ForgotPassword')}
                                    style={{ justifyContent: 'flex-end' }}>
                                    <Text style={forms.text_forgot}>Bạn quên mật khẩu</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Form>
                </Content>
                {/* <BottomTab {...props} ></BottomTab> */}

            </View>
        );
}

export default Login
