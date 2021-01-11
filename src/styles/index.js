import {
    Dimensions
} from 'react-native';
import * as colors from './colors';
import * as spacing from './spacing';
import * as typography from './typography';
import * as mixins from './mixins';
import { formStyles as forms }  from './forms';
import { headerStyles as headers }  from './headers';
import { cardStyle as cards }  from './cards';

const { width, height } = Dimensions.get('window');
// console.log(height)
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;

export {  colors, spacing, mixins, forms, headers, cards }