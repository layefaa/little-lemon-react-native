import * as React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.main}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo.png")}
      />
      <Text style={styles.normalText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable style={styles.newsletterButton} onPress={() => {
        navigation.navigate('Subscribe')
      }}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 100,
    resizeMode: "contain",
    justifyContent: "center",
    alignContent: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    flexDirection: "column",
  },
  normalText: {
    fontSize: 18,
    textAlign: "center",
    padding: 32,
    marginLeft: 32,
    marginRight: 32,
  },
  newsletterButton: {
    fontSize: 22,
    padding: 10,
    marginLeft: 64,
    marginRight: 64,
    backgroundColor: "#394D46",
    borderColor: "#394D46",
    width: '100%',
    borderWidth: 2,
    borderRadius: 16,
    position: 'absolute',
    bottom: 32
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});

export default WelcomeScreen;
