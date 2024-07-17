import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import InputBox from "../../components/Form/InputBox";

const Email = () => {
  const loginImage = "https://cdn-icons-png.flaticon.com/512/295/295128.png";
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      <InputBox placeholder={"Enter Your Email"} autoComplete={"email"} />
      <InputBox placeholder={"Enter Your Password"} />
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
});

export default Email;
