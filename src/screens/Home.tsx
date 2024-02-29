import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigator = useNavigation();

    return (
    <View>
      <Text>Home</Text>
      <Pressable
        onPress={()=>{navigator.navigate("CreateTask");}}
      >
        <Text>Create Task</Text>
      </Pressable>
    </View>
  )
}

export default Home