import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'

import Spacer from '../components/Spacer'

const SignupScreen = ( { navigation } ) => {
  return (
    <>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label='Email' />
      <Spacer />
      <Input label='Password' />
      <Spacer>
        <Button title='Sign Up' onPress={() => navigation.navigate( '' )} />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create( {} )

export default SignupScreen