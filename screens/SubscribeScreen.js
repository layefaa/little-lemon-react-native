import * as React from "react";
import { ValidateEmail, validateEmail } from "../utils";
import { View, Image, Text, Pressable, TextInput, Alert } from "react-native";
import { StyleSheet } from "react-native";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const [isPressable, setIsPressable] = React.useState(true)

  const onChangeEmail = (inputText) => {
    setEmail(inputText);
  };

  const onSubmit = () => {
    if (isPressable) {
      setIsPressable(!isPressable)
      if (validateEmail(email)) {
        Alert.alert('Thanks for subscribing, stay tuned!')
        setEmail('')
      }
    }
  }
  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.normalText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.emailTextField}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Type your email"
        keyboardType="email-address"
      />
      <Pressable style={[
        styles.subscribeButton,
        {backgroundColor: isPressable ? "#394D46" : 'lightgray'}
      ]} onPress={onSubmit}>
        <Text style={styles.subscribeButtonText}>Subscribe</Text>
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
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    flexDirection: "column",
  },
  normalText: {
    fontSize: 16,
    textAlign: "center",
  },
  emailTextField: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    width: "100%",
    textAlign: "center",
    margin: 16,
  },
  subscribeButton: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#394D46",
    padding: 8,
  },
  subscribeButtonText: {
    textAlign: "center",
    color: "white",
  },
});

export default SubscribeScreen;
