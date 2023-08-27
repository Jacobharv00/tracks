import '../_mockLocation'
import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

import Map from '../components/Map'

const TrackCreateScreen = () => {
  const [ error, setError ] = useState(null)

  const requestLocationPermission = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync()
      if (!granted) {
        throw new Error('Location permission not granted')
      }
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        console.log('location', location)
      })
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    requestLocationPermission()
  }, [])

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create A Track</Text>
      {error && <Text h4>Please enable location services</Text>}
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen