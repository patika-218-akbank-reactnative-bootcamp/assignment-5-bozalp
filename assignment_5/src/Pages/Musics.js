import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Musics = () => {
    const theme = useSelector((state) => state.theme.theme);
    const [musicList, setMusicList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await axios
                .get('https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=30&apikey=8159142c43bf8b82be3a1d09e28e1837');
               // .get('https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=&apikey=8159142c43bf8b82be3a1d09e28e1837');
               // .get('https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=1039&s_release_date=desc&g_album_name=1&apikey=8159142c43bf8b82be3a1d09e28e1837');
            setLoading(false);
            console.log(response.data.message.body.artist_list);
            setMusicList(response.data.message.body.artist_list);
        }
        catch (error) {
            console.log(error.toString());
        }
    }
    //ilk acildiginda selectedTab guncelleniyor. Ya da selectedTab degistiginde baska bir fetch islemi yapiyorum.
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            {
                loading ? <ActivityIndicator size={"large"} />
                    :
                    <FlatList
                        data={musicList}
                        renderItem={({ item }) => <View>
                            <Text >
                               {item.artist.artist_name}
                            </Text>
                        </View>}
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