import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";

const Register = ({ navigation }) => {
  const loginImage =
    "https://mybuddyinfo.jswpaints.in/Images/icon-register.png";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  //login function
  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please provide all fields");
    }
    alert("Register Successfully");
    navigation.navigate("login");
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      <InputBox
        value={name}
        setValue={setName}
        placeholder={"Enter Your Name"}
        autoComplete={"name"}
      />
      <InputBox
        value={email}
        setValue={setEmail}
        placeholder={"Enter Your Email"}
        autoComplete={"email"}
      />
      <InputBox
        value={password}
        setValue={setPassword}
        placeholder={"Enter Your Password"}
        secureTextEntry={true}
      />
      <InputBox
        value={address}
        setValue={setAddress}
        placeholder={"Enter Your Address"}
        autoComplete={"address-line1"}
      />
      <InputBox
        value={city}
        setValue={setCity}
        placeholder={"Enter Your City"}
        autoComplete={"country"}
      />
      <InputBox
        value={contact}
        setValue={setContact}
        placeholder={"Enter Your Mobile Num"}
        autoComplete={"tel"}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Already a user please ?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("login")}
          >
            Login !
          </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,

    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});

export default Register;
