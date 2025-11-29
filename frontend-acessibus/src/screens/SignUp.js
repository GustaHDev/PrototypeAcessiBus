import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/logo-acessibus.png")} style={styles.logo} />
            </View>

            <View style={styles.content}>
                <Ionicons name="person-circle-outline" size={100} color="black" />

                <Text style={styles.title}> Cadastre-se </Text>

                <TextInput style={styles.input} placeholder='Nome' />
                <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <View style={styles.socialContainer}>
                    <Ionicons name="logo-facebook" size={40} color="1877F2" />
                    <Ionicons name="logo-google" size={40} color="4285F4" />
                </View>
            </View>

            <View style={styles.navbar}>
                <Ionicons name="home-outline" size={40} color="black" onPress={() => navigation.navigate("Home")} />
                <Ionicons name="timer-outline" size={40} color="black" />
                <Ionicons name="heart-outline" size={40} color="black" />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        paddingTop: 60,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc"
    },

    logo: {
        width: 120,
        height: 70,
        resizeMode: "contain",
        left: 0
    },

    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },

    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        marginBottom: 15,
        borderRadius: 4
    },

    button: {
        backgroundColor: "black",
        padding: 15,
        borderRadius: 25,
        width: "60%",
        alignItems: "center",
        marginBottom: 20
    },

    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },

    socialContainer: {
        flexDirection: "row",
        gap: 20,
        marginBottom: 40
    },

    navbar: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        position: "absolute",
        bottom: 20
    }
});
