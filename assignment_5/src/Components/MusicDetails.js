import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';

const MusicDetails = ({ route }) => {
    const theme = useSelector((state) => state.theme.theme);
    const [musicList, setMusicList] = useState([]);
    const [loading, setLoading] = useState(true);
    const musicId = route.params;

    async function fetchData() {
        try {
            const response = await axios
                .get('https://api.deezer.com/track/' + musicId);
            setLoading(false);
            console.log(response.data);
            setMusicList(response.data);
        }
        catch (error) {
            console.log(error.toString());
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            {
                loading ? <ActivityIndicator size={"large"} />
                    :
                    <ScrollView>
                        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
                            <Image source={{ uri: musicList.album.cover_big }} style={styles.image} />
                            <Text style={[styles.title, { color: theme.color }]}>
                                {musicList.title}
                            </Text>
                            <Text style={[styles.artist, { color: theme.color, }]}>
                                {musicList.artist.name}
                            </Text>
                        </View>
                    </ScrollView>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image:
    {
        width: 300,
        height: 300,
        borderRadius: 10,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20
    },
    title:
    {
        fontWeight: '800',
        paddingLeft: 10,
    },
    artist:
    {
        paddingLeft: 10,
    }
});

export default MusicDetails;