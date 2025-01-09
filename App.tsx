import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
function App(): React.JSX.Element {
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'center', fontSize: 22, fontWeight: 'bold'}}>
          SIGN IN
        </Text>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 2,
            width: 300,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          {/* <Image
            source={require('./image/user.png')}
            style={{
              width: 30,
              height: 30,
              top: 10,
              left: -2,
            }}></Image> */}
          <TextInput
            placeholder="Username"
            placeholderTextColor={'gray'}
            style={{
              backgroundColor: 'white',
              color: 'black',
              width: 200,
              marginLeft: 50,
            }}></TextInput>
        </View>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 2,
            width: 300,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          {' '}
          {/* <Image
            source={require('./image/password.png')}
            style={{
              width: 30,
              height: 30,
              
            }}></Image> */}
          <TextInput
            placeholder="Password"
            placeholderTextColor={'gray'}
            style={{
              backgroundColor: 'white',
              color: 'black',
              width: 200,
              marginLeft: 50,
            }}></TextInput>
        </View>
        <Text style={{alignSelf: 'center', fontSize: 15, marginTop: 20}}>
          Don't Have an Account?{' '}
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 14,
              color: 'purple',
              fontWeight: 'bold',
            }}>
            Register Now
          </Text>
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            marginTop: 20,
            width: 180,
            height: 45,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default App;
