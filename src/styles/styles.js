import * as mixins from './mixins'
import * as colors from './colors';

export default {
    flex:{
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        width: mixins.width,
        height:mixins.height,
    },
    header:{
        alignItems: 'center',
        justifyContent: 'center',
        height: mixins.verticalScale(200),
        width:mixins.width,
        // backgroundColor:'#000'
    },
    header_background:{
        flex:1,
        position:"relative",
        width: mixins.width,
        height:mixins.height,
    },
    img_background_bottom:{
        top: undefined,
        // width:width,
        width:mixins.width,
        height:mixins.verticalScale(140),
        // resizeMode: "cover",
        alignSelf: "flex-end"
    },
    header_logo:{
        paddingTop:mixins.verticalScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        // backgroundColor:'#000'
    },
    header_text_1:{
        color:'#000',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: mixins.verticalScale(15),
        paddingTop:mixins.verticalScale(20)
    },
    header_text_2:{
        fontSize: mixins.verticalScale(12),
        paddingTop:mixins.verticalScale(5),
        color:'#000',
        textAlign:'center'
    },
    header_text_3:{
        fontSize: mixins.verticalScale(12),
        paddingTop:mixins.verticalScale(5),
        color:'#999'
    },
    body: {
        alignItems: 'center',
        width:mixins.width,
        // backgroundColor:'#999',
        // height: verticalScale(380)
    },
    body_wapper:{
        width:'80%',
    },
    footer:{
        justifyContent: 'center',
        alignItems: 'center',
        width:mixins.width,
        marginTop: mixins.verticalScale(20),
    },
    footer_wapper:{
        width:mixins.width*0.8,
    },
    loginWith:{
        width:mixins.width*0.8,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:mixins.verticalScale(40)
    },
    group_input:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth:mixins.verticalScale(1),
        borderColor: '#ddd',
        borderRadius: mixins.verticalScale(10),
        marginBottom:mixins.verticalScale(10),
    },
    group_cinput:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom:mixins.verticalScale(10),
    },
    group_tinput:{
        flex:1,
        flexDirection: 'row',
        width:'100%',
    },
    checkbox:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSubmit:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: mixins.verticalScale(10),
        height:mixins.verticalScale(40)
    },
    btn:{
        width:mixins.width*0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03a9f4',
        borderRadius: mixins.verticalScale(10),
        height:mixins.verticalScale(40)
    },
    btnBlue:{
        backgroundColor: '#03a9f4',
    },
    btnPink:{
        backgroundColor:'#ca2091'
    },
    btnGreen:{
        backgroundColor:'#5cc5a4'
    },
    legend:{
        paddingLeft:mixins.verticalScale(5),
        paddingRight:mixins.verticalScale(5),
        position: 'absolute',
        // top: -12,
        fontWeight: 'bold',
        // backgroundColor: '#fff',
        color:'#999'
    },
    input:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        padding:mixins.verticalScale(3),
        color:'black',
        height:mixins.verticalScale(38)
    },
    input_placeholder:{
    },

    icon_right:{
        padding: 10,
        margin: 5,
        width: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    icon_btn:{
        width: 25,
        height: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    message:{
        width:'100%'
    },
    txtMessage:{
        color: colors.ALERT
    },
    txtPolicy:{
        alignSelf: 'stretch',
        textAlign:'right',
        color: 'blue',
        textDecorationLine: 'underline'
    },
}