import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'

import Spacer from '../components/Spacer'

const SignupScreen = ( { navigation } ) => {
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
      <Spacer>
        <Button title='Sign Up' onPress={() => navigation.navigate( '' )} />
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
  }
} )

export default SignupScreen
