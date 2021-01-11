import {width, height, verticalScale} from './mixins';
import * as colors from './colors';

export  const headerStyles = {
    flex:{
        flex:1,
        backgroundColor:colors.PRIMARY,
        height:verticalScale(78),
        paddingTop:verticalScale(20)
    },
    left:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:0,
    },
    button:{
        borderWidth:0,
        backgroundColor:'none',
    },
    button_left:{
        borderWidth:0,
        borderColor:'none',
        backgroundColor:'none',
        width: verticalScale(0)
    },
    button_right:{
        backgroundColor:'none',
        width: verticalScale(30),
        borderWidth:0,
    },
    icon:{
        borderWidth:0,
        padding:0,
        marginLeft:6,
        fontSize: verticalScale(18),
        width:verticalScale(24),
        color:'white',
    },
    body:{
        flex:1,
    },
    right:{
        flex:1
    },
    title:{
        color:'white',
        fontFamily:'Roboto',
        fontWeight:'500',
        fontSize:verticalScale(18),
        marginLeft:verticalScale(10),
        justifyContent:'center',
        alignItems: 'center',
        textAlign:"left"
    }
}
