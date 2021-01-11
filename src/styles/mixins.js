import {Dimensions,PixelRatio} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const statusHeight = getStatusBarHeight(true)
console.log(statusHeight)

// const WINDOW_WIDTH = Dimensions.get('window').width;
export const { width, height } = Dimensions.get('window');
console.log(height)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const verticalScale = size => ( (height) / guidelineBaseHeight) * size;
export const scaleSize = size => (width/guidelineBaseWidth) * size;

export const scaleFont = size => size * PixelRatio.getFontScale();

function dimensions(top, right = top, bottom = top, left = right, property){
    let styles = {};

    styles[`${property}Top`] = top;
    styles[`${property}Right`] = right;
    styles[`${property}Bottom`] = bottom;
    styles[`${property}Left`] = left;

    return styles;
}

export function margin(top, right, bottom, left){
    return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left){
    return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(color, offset = {height:2,width:2},
                          radius = 8, opacity = 0.2){
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}
