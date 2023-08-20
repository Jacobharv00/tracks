import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

import Spacer from './Spacer'

const AuthForm = ( { headerText, buttonTitle, errorMessage, onSubmit } ) => {
  const [ email, setEmail ] = useState( '' )
  const [ password, setpassword ] = useState( '' )

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Spacer>
        <Button
          title={buttonTitle}
          onPress={() => onSubmit( { email, password } )}
        />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create( {
  errorMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 15
  },
} )

export default AuthForm