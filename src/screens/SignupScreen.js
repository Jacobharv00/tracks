import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'

import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'

const SignupScreen = ( { navigation } ) => {
  const { state, signup } = useContext( AuthContext )

  // Local State
  const [ email, setEmail ] = useState( '' )
  const [ password, setpassword ] = useState( '' )

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label='Email' value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
      <Spacer />
      <Input
        label='Password'
        value={password}
        onChangeText={setpassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {state.errorMessage && <Text style={styles.errorMessage}>{state.errorMessage}</Text>}
      <Spacer>
        <Button title='Sign Up' onPress={() => signup( { email, password } )} />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 15
  }
} )

export default SignupScreen
