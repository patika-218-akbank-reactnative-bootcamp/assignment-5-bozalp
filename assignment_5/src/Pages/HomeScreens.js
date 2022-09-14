import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingStack from './Settings/SettingStack';
import MusicsHome from './MusicsHome';
import Search from './Search';
import Icons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreens = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="MusicsHome" component={MusicsHome} options={{
                title:"Musics",
                tabBarIcon: ({ color }) => (
                    <Icons name='musical-notes-outline' size={24} color={color} />
                )
            }}/>
            <Tab.Screen name="Search" component={Search}options={{
                tabBarIcon: ({ color }) => (
                    <Icons name='search' size={24} color={color} />
                )
            }} />
            <Tab.Screen name="Settings" component={SettingStack}options={{
                tabBarIcon: ({ color }) => (
                    <Icons name='settings-outline' size={24} color={color} />
                )
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreens;