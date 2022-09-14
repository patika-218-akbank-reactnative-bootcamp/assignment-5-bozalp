import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Musics from './Musics';
import MusicDetails from '../Components/MusicDetails';
import MusicLine from '../Components/MusicLine';

const Movies = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Musics" component={Musics} options={{
                headerShown: false
            }} />
            <Stack.Screen name="MusicLine" component={MusicLine} options={{
                headerShown: false
            }} />
         <Stack.Screen name="MusicDetails" component={MusicDetails} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
};

export default Movies;
