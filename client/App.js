import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App(){
    return(
        <View style={styles.conatiner}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style = "auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    }
});