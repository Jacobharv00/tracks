import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const SignupScreen = ( { navigation } ) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Sign up Screen</Text>
      <Button title="Signin" onPress={() => navigation.navigate( 'Signin' )} />
    </>
  )
}


const styles = StyleSheet.create( {} )

export default SignupScreen