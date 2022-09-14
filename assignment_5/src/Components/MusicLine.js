import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const MusicLine = ({ navigation, musics }) => {
    const theme = useSelector((state) => state.theme.theme);
    //Tikladigim filmin id verisini detail sayfasina yolluyorum.
    function goToMusicDetails() {
        navigation.navigate("MusicDetails", musics.id);
    }
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => goToMusicDetails()}>
            <View style={styles.container}>
                <Image source={{ uri: musics.album.cover_medium }} style={styles.image} />
                <View>
                    <Text style={[styles.title, { color: theme.color }]}>
                        {musics.title}
                    </Text>
                    <Text style={{ color: theme.color }}>
                        {musics.artist.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    image:
    {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'contain',
        marginRight: 10
    },
    title:
    {
        fontWeight: '800',
        paddingTop: 5
    }
});

export default MusicLine;