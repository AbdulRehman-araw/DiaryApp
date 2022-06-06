import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TouchID from 'react-native-touch-id';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

const touch_Handler = () => {
  TouchID.isSupported(optionalConfigObject)
    .then(biometryType => {
      // Success code
      if (biometryType === 'FaceID') {
        console.log('FaceID is supported.');
      } else {
        console.log('TouchID is supported.');
      }
    })
    .catch(error => {
      // Failure code
      console.log('Touch Id Not Working : ', error.details);
    });
};

const Number = ({num}) => {
  return (
    <TouchableOpacity onPress={() => Pin(num)}>
      <View style={styles.btnStyle}>
        <Text style={[styles.lightText, {fontSize: 32}]}>{num}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Pin = num => {
  return <TextField number={num} />;
  // console.log(num);
};

const TextField = ({number}) => {
  return <Text style={styles.input}>{number}</Text>;
};

const Lock_Screen = () => {
  useEffect(() => {
    touch_Handler();
  });
  const [number, setNumber] = useState('');

  return (
    <View style={styles.main}>
      <Text style={[styles.boldText, {textTransform: 'uppercase'}]}>
        Enter Your Pin
      </Text>
      <View style={styles.row}>
        <TextField />
        <TextField />
        <TextField />
        <TextField />
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.row}>
          <Number num="1" />
          <Number num="2" />
          <Number num="3" />
        </View>
        <View style={styles.row}>
          <Number num="4" />
          <Number num="5" />
          <Number num="6" />
        </View>
        <View style={styles.row}>
          <Number num="7" />
          <Number num="8" />
          <Number num="9" />
        </View>
        <View style={[styles.row, {alignSelf: 'flex-end'}]}>
          <Number num="0" />
          <Number num="X" />
        </View>
      </View>
      <TouchableOpacity onPress={() => alert('Forgot Pin')}>
        <Text style={[styles.lightText, {marginBottom: 40}]}>
          Forgot Security Pin?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lock_Screen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lightText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  btnStyle: {
    backgroundColor: '#aaa',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    marginHorizontal: 14,
  },
  btnContainer: {
    marginTop: 50,
    marginBottom: 50,
  },
  input: {
    borderRadius: 10,
    height: 22,
    width: 22,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 16,
    marginTop: 30,
    color: '#fff',
  },
});
