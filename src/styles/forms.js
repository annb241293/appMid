import {width, height, verticalScale} from './mixins';
import * as colors from './colors';

export  const formStyles = {
    container:{
        width: width,
        flexDirection : "column",
        alignItems: "center"
    },
    wapper:{
        width: verticalScale(width - verticalScale(32)),
    },
    row:{
        flex:1,
        width:'100%',
        flexDirection : "row",
        alignItems: "center",
    },
    row_bottom_20:{
        flex:1,
        width:'100%',
        flexDirection : "row",
        alignItems: "center",
        marginBottom:20,
    },
    row_left_50:{
        width:'50%',
        justifyContent:'flex-start'
    },
    row_right_50:{
        width:'50%',
        justifyContent:'flex-end'
    },
    header:{
        height:verticalScale(281),
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    header_register:{
        height:verticalScale(281),
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    header_text_1:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:verticalScale(16),
        color:'#333333',
        marginBottom: verticalScale(8)
    },
    header_text_2:{
        fontFamily:'Roboto',
        fontSize:verticalScale(12),
        color:'#9098B1',
        marginBottom: verticalScale(28)
    },
    logo:{
        height: verticalScale(100),
        width: verticalScale(150),
        top:verticalScale(100),
        position:'absolute',
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    item_input:{
        height: 48,
        marginBottom:8,
        borderRadius: 5,
        borderWidth:verticalScale(1),
        // borderColor:'#EBF0FF'
    },
    input_text:{
        color:colors.GRAY
    },
    input_icon:{
        padding:10,
        fontSize:20,
        color:colors.GRAY
    },
    input_icon_gray:{
        color:colors.GRAY,
    },
    input_icon_green:{
        color:colors.GREEN,
    },
    btn_upload:{
        width: verticalScale(72),
        height: verticalScale(72),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFFFFF',
        marginBottom:30,
    },
    btn:{
        width:'100%',
        height: 57,
        marginTop:verticalScale(8),
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.PRIMARY
    },
    btn_text:{
        fontFamily: 'Roboto',
        fontWeight:'bold',
        fontSize:verticalScale(14)
    },
    label_text:{
        width:'100%',
        fontFamily: 'Roboto',
        fontWeight:'bold',
        fontSize:verticalScale(14),
        marginTop:verticalScale(12),
        marginBottom:verticalScale(12),
    },
    textarea:{
        borderWidth: 1,
        // borderColor:'#EBF0FF',
        borderRadius:5
    },
    checkbox:{
        height:20,
        width:20,
        marginLeft: -2,
        marginRight: 10,
        padding:0,
        borderRadius: 5
    },
    remember_container:{
        flex:1,
        flexDirection: 'row',
        width:'100%',
        marginTop:18,
        // backgroundColor: 'black'
    },
    register_container:{
        flex:1,
        width:'100%',
        marginTop:38,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text_remember:{
        fontFamily: 'Roboto',
        fontSize:14,
        marginLeft:6,
        color:'#8692A6',
    },
    text_forgot:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize:14,
        color:colors.PRIMARY,
    },
    text_have_account:{
        fontFamily: 'Roboto',
        fontSize:14,
        color:'#8692A6',
    },
    text_register:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize:14,
        color:colors.PRIMARY,
    },
    text_normal:{
        fontFamily: 'Roboto',
        fontSize:verticalScale(14),
    },
    text_right:{
        fontFamily: 'Roboto',
        fontSize:verticalScale(14),
        textAlign:'right',
        justifyContent:'flex-end',
        color:'rgba(51, 51, 51, 0.87)'
    },
    text_left:{
        fontFamily: 'Roboto',
        fontSize:verticalScale(14),
        textAlign:'left',
        justifyContent:'flex-start',
        color:'rgba(51, 51, 51, 0.87)'
    },
    holder_question:{
        fontFamily: 'Roboto',
    }


}
