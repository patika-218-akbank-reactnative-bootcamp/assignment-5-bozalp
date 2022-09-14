import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import TextBox from '../Components/TextBox';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {

    const firebaseConfig = {
        apiKey: "AIzaSyBGAZAFZ2bOh18kQhDamufyNxkuLooq4WU",
        authDomain: "musicapp-96109.firebaseapp.com",
        projectId: "musicapp-96109",
        storageBucket: "musicapp-96109.appspot.com",
        messagingSenderId: "5762728566",
        appId: "1:5762728566:web:aa5ce65f3a13b4de815557",
        measurementId: "G-BE3B1DZVX7"
      };

      const app = initializeApp(firebaseConfig);

      const auth = getAuth(app);
    const theme = useSelector((state) => state.theme.theme);

    const [email, setMail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordAgain, setPasswordAgain] = useState(null);
    const [username, setUsername] = useState(null);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("kayit basarili");
                console.log(user.email);
            })
            .catch(error => Alert.alert(error.message));
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color, padding: 30, letterSpacing:5 }]}>Best Music App</Text>
            <View style={{ margin: 10, }}>
                <Text style={{ color: theme.color, paddingBottom: 30 }}>Create Account</Text>

                <TextBox title="UserName" value={username} onChangeText={setUsername} />
                <TextBox title="E-Mail" value={email} onChangeText={setMail} />
                <TextBox title="Password" value={password} onChangeText={setPassword} secureText={true} />
                <TextBox title="Password (Again)" value={passwordAgain} onChangeText={setPasswordAgain} secureText={true} />

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.button, { borderColor: theme.color, backgroundColor: '#19c790' }]}
                    onPress={() => handleSignUp()}>
                    <Text style={{ color: theme.color, textAlign: 'center' }}>
                        Create Account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            padding: 10,
        },
        header:
        {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            paddingBottom: 50,
        },
        phone_number_area:
        {
            flexDirection: 'row',
        },
        button:
        {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 20,
            height: 50,
            width: '80%',
            justifyContent: 'center',
            alignSelf: 'center'
        }
    }
);
export default SignUp;
