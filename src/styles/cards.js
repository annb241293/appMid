import {verticalScale} from './mixins';

export const cardStyle = {
    container:{
        flex:1,
        marginLeft:verticalScale(16),
        marginRight:verticalScale(16),
        marginTop:verticalScale(16),
        borderWidth:0,
        boxShadow:0
    },
    row:{
        flex:1,
        width:'100%',
        flexDirection : "row",
        alignItems: "center",
        marginBottom: verticalScale(12)
    },
    row_left_50:{
        width:'50%',
        justifyContent:'flex-start'
    },
    row_right_50:{
        width:'50%',
        justifyContent:'flex-end'
    },
    item:{
        width: '100%',
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius:verticalScale(5),
        marginBottom:verticalScale(16),
        backgroundColor:'white',
        padding:12
    },
    wapper:{

    },
    header:{
        flex:1,
        flexDirection:'column',
        margin:0,
        padding:0
    },
    body:{
        paddingTop:12,
    },
    title:{
        width: '100%',
        fontFamily:'Roboto',
        fontWeight:'700',
        fontSize:verticalScale(16),
        color: 'rgba(51, 51, 51, 0.87)',
        textAlign:'left',
        paddingBottom:12,
    },
    line_dash:{
        height: 1,
        width: '100%',
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#EBF0FF',
        borderStyle: 'dashed'
    },
    text_right:{
        fontFamily: 'Roboto',
        fontSize:verticalScale(12),
        textAlign:'right',
        justifyContent:'flex-end',
        color:'rgba(51, 51, 51, 0.87)'
    },
    text_left:{
        fontFamily: 'Roboto',
        fontSize:verticalScale(12),
        textAlign:'left',
        justifyContent:'flex-start',
        color:'#223263'
    },
}