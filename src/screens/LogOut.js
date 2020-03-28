import {Alert} from 'react-native';
const toGoOut = () => {
  Alert.alert(
    'התנתקות',
    'האם אתה בטוח שברצונך להתנתק?',
    [
      {
        text: 'ביטול',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'אישור', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
};
export default toGoOut;
