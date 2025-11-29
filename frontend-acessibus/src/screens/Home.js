import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo-acessibus.png")} style={styles.logo} />
        <Ionicons name="person-circle-outline" size={80} color="black" onPress={() => {navigation.navigate("SignUp")}}/>
      </View>

      <View style={styles.content}>

        <TouchableOpacity style={styles.micButton}>
            <Ionicons name="mic-outline" size={100} color="white" />
        </TouchableOpacity>

        <Image source={require("../../assets/soundwave.png")} style={styles.soundwave} />
      </View>

      <View style={styles.navbar}>
        <Ionicons name="home-outline" size={40} color="black" />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  
  logo: {
    width: 120,
    height: 70,
    resizeMode: "contain"
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  micButton: {
    backgroundColor: "#1A6AD2",
    borderRadius: 200,
    padding: 40,
    marginBottom: 20,
    elevation: 5
  },

  soundwave: {
    width: 200,
    height: 80,
    resizeMode: "contain"
  },
  
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 20
  }
});
