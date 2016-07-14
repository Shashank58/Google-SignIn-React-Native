import React, { Component } from 'react'
import {StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class Login extends Component {
	constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Coming')
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {

      GoogleSignin.configure({
        scopes: ["https://www.googleapis.com/auth/drive.readonly"],
        iosClientId: '290693663063-qa4vskev9jl4t5cg467gjj39an9n2b7f.apps.googleusercontent.com',
        offlineAccess: false
      });

      GoogleSignin.currentUserAsync().then((user) => {
        console.log('USER', user);
        this.setState({user: user});
      }).done();

    })
    .catch((err) => {
      console.log("Play services error", err.code, err.message);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          onPress={this._SignIn.bind(this)}
          style={{width: 48, height: 48}}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark} />
      </View>
    );
  }

  _SignIn() {
    GoogleSignin.signIn()
        .then((user) => {
          console.log(user);
          this.setState({user: user});
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = Login