import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.header}>Account Screen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 5,
    fontSize: 48
  }
})

export default AccountScreen

