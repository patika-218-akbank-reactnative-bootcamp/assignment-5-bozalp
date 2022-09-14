import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';

import MusicLine from '../Components/MusicLine';

const Musics = ({ navigation }) => {
    const theme = useSelector((state) => state.theme.theme);
    const [musicList, setMusicList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await axios
                .get('https://api.deezer.com/playlist/1479458365/tracks');
            setLoading(false);
            setMusicList(response.data.data);
        }
        catch (error) {
            console.log(error.toString());
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    const renderMusics = ({ item }) => <MusicLine navigation={navigation} musics={item} />

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            {
                loading ? <ActivityIndicator size={"large"} />
                    :
                    <FlatList
                        data={musicList}
                        renderItem={renderMusics}
                    />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Musics;