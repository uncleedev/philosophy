import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'


export default function RootLayout() {

    const [loaded] = useFonts({
        "Miltonian":  require("../assets/fonts/Miltonian_Tattoo/MiltonianTattoo-Regular.ttf"),
        "Poppins": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
        "Lora": require("../assets/fonts/Lora/static/Lora-Regular.ttf")

    })

    if (!loaded) {
        return null
    }

  return (
    <Stack>
        <Stack.Screen 
            name='index'
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name='(auth)/signin'
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name='(auth)/signup'
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name='home'
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name='about'
            options={{
                headerShown: false
            }}
        />

    </Stack>
  )
}

