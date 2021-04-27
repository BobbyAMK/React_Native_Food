// signUpWithAxios = () => {
//   // axios
//   const url = 'https://training.softech.cloud/api/users/register';
//   const data = {
//     email: this.state.email,
//     password: this.state.password,
//     fullname: this.state.fullname ,
//   };

//   axios
//     .post(url, data)
//     .then(response => {
//       if (response.data.ok) {
//         console.log('Đăng nhập thành công');
//       } else {
//         console.log('Đăng nhập không thành công');
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Switch,
  Alert,
} from 'react-native';
import {icons, images} from '../../navigator';
import useRegisterEmail from './useRegisterEmail';

export default function SignUp({navigation}) {
  const [loading, success, signUp] = useRegisterEmail();
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [fullname, setFullname] = React.useState(null);

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image source={icons.eatmelogo} style={styles.logo} />
        <View style={styles.logoText}>
          <Text style={styles.headerText}>E a t m e</Text>
        </View>
        <Text style={{fontSize: 30, fontWeight: 'bold', top: 40}}>
          Getting Started
        </Text>
        <View style={styles.welcomeText}>
          <Text style={{fontSize: 16, fontWeight: 'normal'}}>
            Create an account to continue!
          </Text>
        </View>
      </View>
      <View style={styles.email}>
        <Text style={{fontSize: 14, top: 1, left: 0}}>Email</Text>
        <View style={styles.emailInput}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Enter your Email"
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>
      </View>
      <View style={styles.fullname}>
        <Text style={{fontSize: 16, fontWeight: 'normal', top: 40}}>
          Fullname
        </Text>
        <View style={styles.fullNameInput}>
          <TextInput
            autoCapitalize="none"
            keyboardType="default"
            placeholder="Enter your Fullname"
            value={fullname}
            onChangeText={text => {
              setFullname(text);
            }}
          />
        </View>
      </View>
      <View style={styles.password}>
        <Text style={{fontSize: 16, fontWeight: 'normal', top: 40}}>
          Password
        </Text>
        <View style={styles.passWordInput}>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={true}
            keyboardType="default"
            placeholder="Enter your Password"
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
      </View>
      <View style={styles.signUpContainer}>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            signUp();
          }}>
          <Text style={styles.signInText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signInContainer}>
        <Text style={{fontSize: 14, fontWeight: 'normal', color: '#898B9A'}}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={{
            width: 56,
            height: 20,
            marginLeft: 5,
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#FF6C44'}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fbSignIn}>
        <TouchableOpacity style={styles.fbButton}>
          <Image source={icons.facebook} style={{width: 20, height: 20}} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'normal',
              color: 'white',
              marginLeft: 5,
            }}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ggSignIn}>
        <TouchableOpacity style={styles.ggButton}>
          <Image source={icons.google} style={{width: 20, height: 20}} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'normal',
              color: 'black',
              marginLeft: 5,
            }}>
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  header: {
    width: WIDTH - (92 + 92),
    height: 60,
    top: 48,
    left: 92,
    justifyContent: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    top: 35,
    left: 20,
  },
  logoText: {
    position: 'absolute',
    width: 110,
    height: 40,
    top: 15,
    left: 90,
  },
  headerText: {
    fontSize: 25,
    color: '#FF6C44',
    fontWeight: 'bold',
  },
  welcomeText: {
    width: WIDTH - 71 * 2,
    height: 30,
    top: 40,
  },
  email: {
    position: 'absolute',
    width: WIDTH - 24 * 2,
    height: 81,
    top: 200,
    left: 24,
  },
  emailInput: {
    width: WIDTH - 24 * 2,
    height: 56,
    top: 20,
    borderRadius: 8,
    backgroundColor: '#F5F5F8',
  },
  fullname: {
    position: 'absolute',
    width: WIDTH - 24 * 2,
    height: 81,
    top: 260,
    left: 24,
  },
  fullNameInput: {
    width: WIDTH - 24 * 2,
    height: 56,
    top: 50,
    borderRadius: 8,
    backgroundColor: '#F5F5F8',
  },
  password: {
    position: 'absolute',
    width: WIDTH - 24 * 2,
    height: 81,
    top: 350,
    left: 24,
  },
  passWordInput: {
    width: WIDTH - 24 * 2,
    height: 56,
    top: 50,
    borderRadius: 8,
    backgroundColor: '#F5F5F8',
  },
  signUpContainer: {
    width: WIDTH - 24 * 2,
    height: 56,
    top: 440,
    left: 24,
  },
  signInButton: {
    width: WIDTH - 24 * 2,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#FF6C44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },
  fbSignIn: {
    width: WIDTH - 24 * 2,
    height: 50,
    left: 24,
    top: 480,
  },
  fbButton: {
    width: WIDTH - 24 * 2,
    height: 50,
    backgroundColor: '#3C5A99',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ggSignIn: {
    width: WIDTH - 24 * 2,
    height: 50,
    left: 24,
    top: 490,
  },
  ggButton: {
    width: WIDTH - 24 * 2,
    height: 50,
    backgroundColor: '#F5F5F8',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInContainer: {
    width: WIDTH - 68 * 2,
    left: 68,
    height: 20,
    top: 455,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
